module.exports = {
    name: 'ban',
    description: 'Bans a user.',
    usage: '[User] ',
    guildOnly: true,
    args: true,
    permissions: 'BAN_ROLE',
    execute (message,args) {
        let userMember = message.mentions.members.first() || message.guild.cache.find(u => u.username == args[0]);
        if(!user) return 'No se ha encontrado el usuario bro.';
        message.guild.members.ban(userMember.user.id);
        return `Te me relajas ${user}`;
    }
}