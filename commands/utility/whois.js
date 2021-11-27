const Discord = require('discord.js');
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

module.exports = {
    name: 'whois',
    description: 'Gives information about a user.',
    usage: '',
    guildOnly: true,
    args: true,
    execute(message,args) {
        let userMember = message.mentions.members.first() || message.guild.members.cache.find(u => u.user.username == args[0]);
        if(!userMember) return message.reply(`No he podido encontrar a ${args[0]}`);
        let user = userMember.user;
        let roles = '';
        userMember.roles.cache.forEach(element => {
            roles += `${element.name} | `
        });
        let joinedAt = new Date(userMember.joinedAt);
        let createdAt = new Date(user.createdAt);
        let embed = new Discord.MessageEmbed()
            .setTitle(user.username)
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .addFields(
                {name: 'Joined on',value: `${joinedAt.getDate()} ${months[joinedAt.getMonth()]} ${joinedAt.getFullYear()}`, inline: true},
                {name: 'Signed on',value: `${createdAt.getDate()} ${months[createdAt.getMonth()]} ${createdAt.getFullYear()}`, inline: true},
                {name: 'Roles',value: roles.slice(0,-3)},
                {name: 'Last message',value: userMember.lastMessage.content}
                )
            .setImage(user.avatarURL());
        message.channel.send(embed);
    }
}