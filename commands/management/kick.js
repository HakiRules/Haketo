module.exports = {
    name: 'kick',
    description: 'Kicks a user from the server.',
    usage: '[User] ',
    guildOnly: true,
    args: true,
    permissions: 'KICK_ROLE',
    execute (message,args) {
        let user = message.mentions.members.first() || message.guild.cache.find(u => u.username == args[0]);
        if(!user) return 'No se ha encontrado el usuario bro.';
        user.kick();
        return `Achanta ${user}`;
    }
}