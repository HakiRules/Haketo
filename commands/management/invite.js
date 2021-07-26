module.exports = {
    name: 'invite',
    description: 'Sends an invitation link.',
    usage: '',
    execute (message,args) {
        let channel = message.guild.channels.cache.find(chann => chann.name == 'Invite');
        let inviteLink = channel.createInvite().then(() => {});
        return `Aqui tienes el link manin ${inviteLink}`;
    }
}