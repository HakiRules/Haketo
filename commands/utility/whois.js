const Discord = require('discord.js');

module.exports = {
    name: 'whois',
    description: 'Gives information about a user.',
    usage: '',
    guildOnly: true,
    args: false,
    execute(message,args) {
        let userMember = message.mentions.members.first() || message.guild.cache.find(u => u.username == args[0]);
        let user = userMember.username;
        let roles = '';
        userMember.roles.cache.forEach(element => {
            roles += `${element.name} | `
        });
        let embed = new Discord.MessageEmbed()
            .setTitle(user.name)
            .addFields(
                {name: 'Joined on',value: userMember.joinedAt},
                {name: 'Signed on',value: user.createdAt},
                {name: 'Roles',value: roles.slice(0,-3)}
                )
            .setImage(user.avatarURL());
        message.channel.send(embed);
    }
}