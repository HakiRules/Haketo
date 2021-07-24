const { prefix } = require('../../config.json');

module.exports = {
    name: 'help',
	description: 'List all of my commands or info about a specific command.',
	execute(message, args) {
		const data = [];
        const { commands } = message.client;
        if(!args.length) {
            data.push('Aqui tienes todos los comandos manin: ');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nPuedes enviar ${prefix}help [comando] para tener la informacion de un comando especifico!`);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
			        essage.reply('Te he enviado un MD con todos los comandos');
                })
                .catch(error => {
                    console.error(`No se ha podido enviar un MD a ${message.author.tag}.\n`, error);
                    message.reply('Che manin, tienes los MD deshabilitados? No he podido enviarte uno.');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name);

        if (!command) {
            return message.reply('Eso no es un comando bro.');
        }

        data.push(`**Nombre:** ${command.name}`);
        if (command.description) data.push(`**Descripcion:** ${command.description}`);
        if (command.usage) data.push(`**Uso:** ${prefix}${command.name} ${command.usage}`);

        message.channel.send(data, { split: true });
	},
}