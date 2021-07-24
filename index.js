const dotenv = require('dotenv');
const Discord = require('discord.js');
const { prefix } = require('config.json');
const fs = require('fs');
const client = new Discord.Client();
const commandFolders  = fs.readdirSync('./commands');

client.commands = new Discord.Collection();
dotenv.config();

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for(const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
    }
}

client.once('ready', () => {
    console.log('Ready manin!')
});

client.on('message', message  => {
    if(message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(command)

    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('Buen md, pero no puedo hacer eso aqui bro!');
    }

    if (command.permissions) {
        const authorPerms = message.channel.permissionsFor(message.author);
        if (!authorPerms || !authorPerms.has(command.permissions)) {
            return message.reply('You can not do this!');
        }
    }

    if (command.args && !args.length) {
        let reply = `Y los argumentos que crack, te los has fumado?`;
        if (command.usage) {
            reply += `\nEsta vaina se usa asi: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }

    try {
        command.execute(message,args);
    } catch (error) {
        console.log(error);
        message.reply('Hubo un error manin, sry.');
    }

});

client.login(process.env.TOKEN);