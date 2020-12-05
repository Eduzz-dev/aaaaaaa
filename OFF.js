const Discord = require("discord.js")

module.exports.run = async(client, message, args) =>{
  
  
  message.delete()
  let user = message.author
  let avatar = user.avatarURL({format: 'png', dynamic: true, size: 1024})
  
  
  
  
  let embed = new Discord.MessageEmbed()
  .setTitle("Painel de Ajuda")
  .setColor("YELLOW").setTimestamp()
  .setFooter(user.tag)
  .setThumbnail(avatar)
  .addField("**Comandos**",` \`\`\ Trabalhos, Bancis, Crimes,
aa,
aa,
aa,
aa, \`\`\ `)
  
  
message.channel.send(embed)
  
  
} 
