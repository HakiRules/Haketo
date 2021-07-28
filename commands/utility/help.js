const { prefix } = require('../../config.json');
const fs = require('fs');
const Discord = require('discord.js');
const commandFolders = fs.readdirSync('./commands');

module.exports = {
    name: 'help',
	description: 'List all of my commands or info about a specific command.',
    usage: '[command name]',
	execute(message, args) {
        const embed = new Discord.MessageEmbed();
        const { commands } = message.client;
        embed.setColor('PURPLE');
        if(!args.length) {
            embed.setTitle('Comandos ');
            embed.setDescription(`Aqui puedes ver todos los comandos, escribe ${prefix}help [comando] para tener la informacion de un comando especifico.`);
            let counter = 0;
            for (const folder of commandFolders) {
                let commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
                let commands = [];
                for(const file of commandFiles) {
                    const command = require(`../../commands/${folder}/${file}`);
                    commands.push(command.name);
                }
                if(counter == 1 || counter == 3){
                    embed.addField(`${folder[0].toUpperCase() + folder.substring(1)} 📁`, commands.join('\n'), true);
                    embed.addField('\u200b', '\u200b',true);
                }else{
                    embed.addField(`${folder[0].toUpperCase() + folder.substring(1)} 📁`, commands.join('\n'), true);
                }
                counter++;
            }
        }else{
            let command = commands.get(args[0].toLowerCase());
            if(!command) return message.reply('Eso no es un comando bro.');
            embed.setTitle(command.name);
            embed.setDescription(command.description);
            embed.addField('Usage:',`${prefix}${command.name} ${command.usage}`);
        }
        message.channel.send(embed);
	},
}