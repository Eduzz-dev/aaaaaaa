const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let usermute = message.mentions.members.first() || message.guild.members.cache.get(args[0])


  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply(`Você não tem a permissão necessária \`\`Gerenciar Cargos\`\``)
  if(!usermute) return message.reply("Você precisa mencionar alguem!")
  if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.reply(`Não tenho a permissão de \`\`Gerenciar Cargos\`\`, caso queira que eu mute esse usuário me entregue a permissão. `)
  } else {
    let muterole = message.guild.roles.cache.find(x => x.name === "Mutado")

     if(usermute.roles.cache.has(muterole)) {
      return message.channel.send("este usuário nunca esteve mutado, como irei desmuta-lo ?")
    } else {

    await usermute.roles.remove(muterole)
    message.channel.send(`usuário desmutado, qualquer coisa se ele infrigir as regras novamente mute esse meliante novamente!`)
    usermute.send(`Depois de um tempo resolveram te desmutar no servidor ${message.guild.name}`)
  }
  }
  
}