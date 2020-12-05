const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-br')

module.exports = {
    config: {
        name: "botinfo",
        aliases: ['bot-info'],
        description: 'Mostra infos do bot!',
        example: "/botinfo",
        usage: "/botinfo"
    },
    run: async (bot, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`BotInfo`)
            .setColor("#00ffff")
            .setThumbnail(bot.user.displayAvatarURL())
            .setDescription(`Oi eu me chamo among community e vim aqui para moderar servidores de among`)
            .addField(`Prefixo:`, `ac!`) 
            .addField(`nome:`, `${bot.user.username}`)
            .addField(`iD:`, `${bot.user.id}`)
            .addField(`criação:`, `${moment(bot.user.createdTimestamp).format('LLL')}`)
            .addField(`criador:`, `@[YT]Blacknott`)     
            .addField(`Espero q vc goste de mim :)`, `<3`);       
        
        message.channel.send(embed)
    }
}