const { MessageEmbed } = require("discord.js");

exports.run = async(client, message, args) => {
  
  const invite = new MessageEmbed()
  .setTitle("Me convide para o seu servidor")
  .setColor("RANDOM")
  .setTimestamp()
.setFooter(`Solicitado por | ${message.author.tag}`, message.author.displayAvatarURL({format :  "png"}))
  .setDescription("coloque aqui o convite do teu bot")
 message.channel.send(invite);
}