
module.exports = {
    name: 'roll',
    description: 'Rolls a dice',
    usage: '[Max number]',
    guildOnly: false,
    args: false,
    async execute(message,args) {
        let random = (Math.random()*(args[0] || 6))+1;
        message.reply(`El dios rng te ha bendecido con un :game_die: ${random}`)
    }
}