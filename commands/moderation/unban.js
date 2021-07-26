module.exports = {
    name: 'unban',
    description: 'Unbans a user.',
    usage: '[User] ',
    guildOnly: true,
    args: true,
    permissions: 'BAN_ROLE',
    execute (message,args) {
        let userMember = message.mentions.members.first() || message.guild.cache.find(u => u.username == args[0]);
        if(!userMember) return 'No se ha encontrado el usuario bro.';
        message.guild.members.unban(userMember.user.id);
        return `Eres libre ${userMember}`;
    }
}