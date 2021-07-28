const Discord = require('discord.js');
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const verificationLevels = {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: '(╯°□°）╯︵ ┻━┻',
    VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

module.exports = {
    name: 'info',
    description: 'Gives information about the server.',
    usage: '',
    guildOnly: true,
    args: false,
    execute(message,args) {
        
        let guild = message.guild;
        let members = guild.members.cache;
        let roles = guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        let channels = guild.channels.cache;
        let admins = guild.members.cache.filter(m => m.roles.cache.some(role => role.name === 'Glubl')).map(member => member.user.username.toString());
        let date = new Date(guild.createdTimestamp);
        let embed = new Discord.MessageEmbed()
            .setTitle(guild.name)
            .setColor('YELLOW')
            .setDescription(`**Server Info**`)
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .addField('General', [
                `**Name:** ${guild.name}`,
                `**ID:** ${guild.id}`,
                `**Owner:** ${guild.owner.user.tag} (${guild.ownerID})`,
                `**Region:** ${guild.region}`,
                `**Verification Level:** ${verificationLevels[guild.verificationLevel]}`,
                `**Time Created:** ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`,
                '\u200b'
            ])
            .addField('Statistics', [
                `**Role Count:** ${roles.length}`,
                `**Member Count:** ${message.guild.memberCount}`,
                `**Humans:** ${members.filter(member => !member.user.bot).size}`,
                `**Bots:** ${members.filter(member => member.user.bot).size}`,
                `**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
                `**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
                '\u200b'
            ])
            .addField('Presence', [
                `**Online:** ${members.filter(member => member.presence.status == 'online').size}`,
                `**Idle:** ${members.filter(member => member.presence.status == 'idle').size}`,
                `**Do Not Disturb:** ${members.filter(member => member.presence.status == 'dnd').size}`,
                `**Offline:** ${members.filter(member => member.presence.status == 'offline').size}`,
                '\u200b'
            ])
            .addField(`Roles [${roles.length - 1}]`, roles.join(', '))
            .addField(`Admins: `, admins.join(' | '))
            .setImage(guild.iconURL());

        message.channel.send(embed);
    }
}