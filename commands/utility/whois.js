const Discord = require('discord.js');

module.exports = {
    name: 'whois',
    description: 'Gives information about a user.',
    usage: '',
    guildOnly: true,
    args: true,
    execute(message,args) {
        let userMember = message.mentions.members.first() || message.guild.members.cache.find(u => u.username == args[0]);
        if(!userMember) return message.reply(`No he podido encontrar a ${args[0]}`);
        let user = userMember.user;
        let roles = '';
        userMember.roles.cache.forEach(element => {
            roles += `${element.name} | `
        });
        let embed = new Discord.MessageEmbed()
            .setTitle(user.username)
            .addFields(
                {name: 'Joined on',value: userMember.joinedAt},
                {name: 'Signed on',value: user.createdAt},
                {name: 'Roles',value: roles.slice(0,-3)}
                )
            .setImage(user.avatarURL());
        message.channel.send(embed);
    }
}