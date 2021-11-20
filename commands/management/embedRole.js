const Discord = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'Sends a embed message to the channel which reacting to will give roles.',
    guildOnly: true,
    args: false,
    async execute(message, args, client) {
        const embed = new Discord.MessageEmbed()
            .setColor('#ffae00')
            .setTitle('Roles gratis!')
            .setDescription('Reacciona con los distintos emoticonos para recibir roles:')
            .addFields(
                { name: 'League of Legends', value: '🧂', inline: true },
                { name: 'CS:GO', value: '🔫', inline: true },
                { name: 'Fortnite', value: '🏯', inline: true },
                { name: 'Minecraft', value: '⛏', inline: true },
                { name: 'Apex Legends', value: '👹', inline: true },
            );

        let channel = message.channel;

        let messageEmbed = await channel.send(embed);
        messageEmbed.react('🧂');
        messageEmbed.react('🔫');
        messageEmbed.react('🏯');
        messageEmbed.react('⛏');
        messageEmbed.react('👹');

        let lolRol = message.guild.roles.cache.find(role => role.name == 'LOL')
        let csgoRol = message.guild.roles.cache.find(role => role.name == 'Counter')
        let fortRol = message.guild.roles.cache.find(role => role.name == 'Fortnite')
        let mineRol = message.guild.roles.cache.find(role => role.name == 'Minecraft')
        let apexRol = message.guild.roles.cache.find(role => role.name == 'Apex')

        client.on('messageReactionAdd', async (reaction, user) => {
            if(user.bot) return;
            if(!reaction.message.guild) return;
            if(reaction.message.channel.id == channel.id){
                if(reaction.emoji.name == '🧂'){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(lolRol)
                }
                if(reaction.emoji.name == '🔫'){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(csgoRol)
                }
                if(reaction.emoji.name == '🏯'){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(fortRol)
                }
                if(reaction.emoji.name == '⛏'){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mineRol)
                }
                if(reaction.emoji.name == '👹'){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(apexRol)
                }
            }else{
                return
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if(user.bot) return;
            if(!reaction.message.guild) return;
            if(reaction.message.channel.id == channel.id){
                if(reaction.emoji.name == '🧂'){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(lolRol)
                }
                if(reaction.emoji.name == '🔫'){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(csgoRol)
                }
                if(reaction.emoji.name == '🏯'){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(fortRol)
                }
                if(reaction.emoji.name == '⛏'){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mineRol)
                }
                if(reaction.emoji.name == '👹'){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(apexRol)
                }
            }else{
                return
            }
        });
    }
}