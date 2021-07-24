const dotenv = require('dotenv');
const Discord = require('discord.js');
dotenv.config()
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready manin!')
});

client.on('message', () => {
    
});

client.login(process.env.TOKEN);