const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {  

  const embed = new Discord.MessageEmbed()

  .setColor('#FFA500')
  .setDescription(`Servericon de: ${message.guild.name}`)
  .setImage(message.guild.iconURL({size: 2048}))
  .setTimestamp()
  .setFooter(`Codigo executado por ${message.author.username} `)
message.channel.send(embed)
console.log('alguem usou o comando de servericon')
}