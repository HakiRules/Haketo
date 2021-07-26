module.exports = {
    name: 'mute',
    description: 'Mutes a user the time specified (3s by default).',
    usage: '[User] [time in milisecs]',
    guildOnly: true,
    args: true,
    permissions: '',
    execute(message,args) {
        const mutedRole = message.guild.roles.cache.find((role) => role.name === 'Muted');
        let userMember = message.mentions.members.first() || message.guild.cache.find(u => u.username == args[0]);
        userMember.roles.add(mutedRole);
        setTimeout(() => {
            userMember.roles.remove(mutedRole);
        },args[1] || 3000);
    }
}