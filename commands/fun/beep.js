module.exports = {
	name: 'beep',
	description: 'Beep Boop Beep',
	execute(message, args) {
		message.channel.send('Beep Boop Beep.');
	},
};