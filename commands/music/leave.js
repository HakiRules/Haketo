const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'leave',
    description: 'Leaves the current channel',
    usage: '',
    guildOnly: false,
    args: false,
    async execute(message,args) {
        const voiceChannel = message.member.voice.channel;
        await voiceChannel.leave();
        await message.channel.send('Leaving channel :smiling_face_with_tear:');
    }
}