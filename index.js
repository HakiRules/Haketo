const dotenv = require('dotenv');
const Discord = require('discord.js');
const { prefix } = require('config.json');
const fs = require('fs');
const client = new Discord.Client();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.commands = new Discord.Collection();
dotenv.config();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
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

    try {
        command.execute(message,args);
    } catch (error) {
        console.log(error);
        message.reply('Hubo un error manin, sry.');
    }

});

client.login(process.env.TOKEN);