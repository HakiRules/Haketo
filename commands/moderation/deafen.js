module.exports = {
    name: 'deafen',
    description: 'Deafens a user.',
    usage: '[User] ',
    guildOnly: true,
    args: true,
    permissions: 'DEAFEN_MEMBERS',
    execute (message,args) {
        let userMember = message.mentions.members.first() || message.guild.members.cache.find(u => u.user.username == args[0]);
        if(!userMember) return 'No se ha encontrado el usuario bro.';
        userMember.edit({deaf: true});
    }
}