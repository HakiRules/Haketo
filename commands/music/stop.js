
module.exports = {
    name: 'stop',
    description: 'Leaves the current channel',
    usage: '',
    guildOnly: false,
    args: false,
    async execute(message,args) {
        const voiceChannel = message.member.voice.channel;
        await voiceChannel.leave();
        await message.channel.send('Ya me voy, no te pongas asi :smiling_face_with_tear:');
    }
}