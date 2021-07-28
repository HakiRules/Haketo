const Discord = require('discord.js');
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

module.exports = {
    name: 'haketo',
    description: 'Gives information about Haketo bot.',
    usage: '',
    guildOnly: false,
    args: false,
    execute(message,args) {
        let bot = message.guild.members.cache.find(user => user.user.username == 'Haketo');
        let joinedAt = new Date(bot.joinedAt);
        let createdAt = new Date(bot.user.createdAt);
        let embed = new Discord.MessageEmbed()
            .setTitle(bot.user.username)
            .setDescription(`Che manin, soy el bot de este server, mi creador es HakiRules, si ves que tengo algun problema o tal habla con el, sabra que hacer.`)
            .addFields(
                {name: 'Joined on',value: `${joinedAt.getDate()} ${months[joinedAt.getMonth()]} ${joinedAt.getFullYear()}`, inline: true},
                {name: 'Signed on',value: `${createdAt.getDate()} ${months[createdAt.getMonth()]} ${createdAt.getFullYear()}`, inline: true},
                {name: '\u200b',value: `\u200b`, inline: true}
            )
            .setImage(bot.user.avatarURL());
        message.channel.send(embed);
    }
}