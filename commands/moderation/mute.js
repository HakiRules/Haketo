module.exports = {
    name: 'mute',
    description: 'Mutes a user the time specified (3s by default).',
    usage: '[User] [time in seconds]',
    guildOnly: true,
    args: true,
    permissions: 'MUTE_MEMBERS',
    execute(message,args) {
        const mutedRole = message.guild.roles.cache.find((role) => role.name === 'Muted');
        let userMember = message.mentions.members.first() || message.guild.members.cache.find(u => u.user.username == args[0]);
        userMember.roles.add(mutedRole);
        setTimeout(() => {
            userMember.roles.remove(mutedRole);
        },(args[1] * 1000) || 3000);
    }
}