module.exports = {
    name: 'undeafen',
    description: 'Undeafens a user.',
    usage: '[User] ',
    guildOnly: true,
    args: true,
    permissions: 'DEAFEN_MEMBERS',
    execute (message,args) {
        let userMember = message.mentions.members.first() || message.guild.cache.find(u => u.username == args[0]);
        if(!userMember) return 'No se ha encontrado el usuario bro.';
        userMember.setDeaf(false);
    }
}