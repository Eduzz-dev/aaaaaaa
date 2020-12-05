const Discord = require('discord.js')
const superagent = require("superagent");

exports.run = async (bot, message, args) => {


    let user = message.mentions.users.first() || message.author
    if (!user) return message.channel.send("Mencione alguém para da um tapa.");
    if (user.id == message.author.id) return message.reply("você não pode dar um tapa em si mesmo.")

    const {
        body
    } = await superagent
        .get(`https://nekos.life/api/v2/img/slap`);

    let Embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}> deu um tapa em ${message.author.id}`)
        .setImage(body.url)
        .setColor("YELLOW")
        .setTimestamp()

    message.channel.send(Embed)
}

exports.help = {
    name: "tapa",
    aliases: ['tapão']
}