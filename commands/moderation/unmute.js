module.exports = {
    name: 'unmute',
    description: 'Unmutes a user .',
    usage: '[User]',
    guildOnly: true,
    args: true,
    permissions: 'MUTE_MEMBERS',
    execute(message,args) {
        const mutedRole = message.guild.roles.cache.find((role) => role.name === 'Muted');
        let userMember = message.mentions.members.first() || message.guild.members.cache.find(u => u.user.username == args[0]);
        if(userMember.roles.cache.find(rol => rol.name = 'Muted')){
            userMember.roles.remove(mutedRole);
        }
    }
}