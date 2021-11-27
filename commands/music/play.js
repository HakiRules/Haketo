const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Plays a song on the use channel',
    usage: '[Song link or name of song]',
    guildOnly: false,
    args: true,
    async execute(message,args) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('Necesitas estar en un canal de voz para escuchar musica.');
        const connection = await voiceChannel.join();

        const validUrl = (url) => {
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0,9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            return regex.test(url)
        }

        if(validUrl(args[0])){
            const stream = ytdl(args[0], { filter: 'audioonly', quality: "highest" });
            connection.play(stream,{ seek: 0, volume: 0.5 }).on('finish', () =>  voiceChannel.leave() );
            await message.reply(`:notes: Reproduciendo ***${args[0]}***`);
            return;
        }

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
            return videoResult.videos.length > 1 ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '));
        if(video){
            const stream = ytdl(video.url, { filter: 'audioonly' });
            connection.play(stream,{ seek: 0, volume: 1 }).on('finish', () =>  voiceChannel.leave() );
            await message.reply(`:notes: Reproduciendo ***${video.title}***`);
        }else{
            message.channel.send('No he encontrado ningun video.');
        }
    }
}