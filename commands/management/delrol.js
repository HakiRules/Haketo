module.exports = {
    name: 'delrol',
    description: 'Removes a rol to a user',
    usage: '[Role name] [User] ',
    guildOnly: true,
    args: true,
    permissions: 'MANAGE_ROLES',
    execute (message,args) {
        let rol = message.guild.roles.find(r => r.name == args[0]);
        let user = message.mentions.members.first() || message.guild.cache.find(u => u.username == args[0]) || message.member;
        if(!rol) return 'No he encontrado el rol bro D:'
        if(!user) return 'No he encontrado el usuario bro D:'
        user.roles.remove(rol);
        return message.channel.send('Ya lo tienes manin.');        
    }
}