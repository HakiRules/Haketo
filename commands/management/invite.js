module.exports = {
    name: 'invite',
    description: 'Sends an invitation link.',
    usage: '',
    async execute (message,args) {
        let channel = message.guild.channels.cache.find(chann => chann.name == 'general');
        let inviteLink = await channel.createInvite({channel: channel.name});
        return message.channel.send(`Aqui tienes el link manin  https://discord.gg/${inviteLink.code}`);
    }
}