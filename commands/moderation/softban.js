module.exports = {
    name: 'softban',
    description: 'Ban and immediately unban a user.',
    usage: '[User] ',
    guildOnly: true,
    args: true,
    permissions: 'BAN_ROLE',
    execute (message,args) {
        let userMember = message.mentions.members.first() || message.guild.cache.find(u => u.username == args[0]);
        if(!userMember) return 'No se ha encontrado el usuario bro.';
        message.guild.members.ban(userMember.user.id);
        message.guild.members.unban(userMember.user.id);
        return `Donete ${userMember}`;
    }
}