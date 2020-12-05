const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
  let member =  message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.author;
  let bio2 = db.get(`bio_${member.id}`)
  let tag = db.get(`tag_${member.id}`)
  let rand = Math.floor(Math.random() * 9999 + 0001)

      if(tag === null) {
      tag = `0000`
    }

    if(bio2 === null) {
    bio2 = `Biografia nula, utilize a!bio <biografia> para aparecer aqui!`
  }


   if(tag === false) {
    db.set(`tag_${member.id}`, rand)
   } else {
   
  
  const embed = new Discord.MessageEmbed()

  .setDescription(`Perfil de: ${member}`)
  .addField(`Nick:`, `${member}`, true)
  .addField(`Tag:`, `#${tag}`, true)
  .addField(`Biografia:`, `\`${bio2}\``)
  .setFooter(`Perfil de ${member.username} | Comando executado por ${message.author.username}` )
 

  message.channel.send(embed)
  console.log('alguem usou o comando de perfil')
}
}