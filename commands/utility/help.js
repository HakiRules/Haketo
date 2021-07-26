const { prefix } = require('../../config.json');
const fs = require('fs');
const Discord = require('discord.js');
const folders = fs.readdirSync('./commands');

module.exports = {
    name: 'help',
	description: 'List all of my commands or info about a specific command.',
	execute(message, args) {
        const embed = new Discord.MessageEmbed();
        const { commands } = message.client;
        embed.setColor('WHITE');
        if(!args.length) {
            embed.setTitle('Comandos');
            embed.setDescription(`Aqui puedes ver todos los comandos, escribe ${prefix}help [comando] para tener la informacion de un comando especifico.`);
            for (const folder of commandFolders) {
                let commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
                let commands = [];
                for(const file of commandFiles) {
                    commands.push(require(`./commands/${folder}/${file}`).name);
                }
                embed.addField(`${folder}`, commands.join('\n'), true);
            }
        }else{
            let command = commands.get(args[0].toLowerCase());
            if(!command) return message.reply('Eso no es un comando bro.');
            embed.setTitle(command.name);
            embed.setDescription(command.description);
            embed.addField('Uso:',`${prefix}${command.name} ${command.usage}`);
        }
        message.channel.send(embed);
	},
}