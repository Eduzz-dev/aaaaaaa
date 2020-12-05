const Discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
  let userID = args[0]
 
  if(!userID) return message.channel.send(`Utilize dessa forma:
  ${config.prefix}unban 123456789012345 <= ID do usuário banido anteriormente.`)
  if(!message.member.hasPermission("BAN_MEMBERS")) {
  return message.channel.send("Sem Permissão meu caro, acho que deixar um usuário comum desbanir um criminoso, não seria tão fácil assim.")
  } 

  if(userID.length > 18) return message.reply("Não reconheci nenhum ID de algum usuário com mais de \`18 caracteres\`")
  if(userID.length < 18) {
     return message.reply("Não reconheci nenhum ID de algum usuário com menos de \`18 caracteres\``")
  } else {
      message.guild.fetchBans().then(bans=> {
      if(bans.size == 0) return
      let bUser = bans.find(b => b.user.id == userID)
      if(!bUser) return message.channel.send(`Esse usuário nem banido está.`)
       message.guild.members.unban(bUser.user)
        message.channel.send(`Usuário desbanido Usuário: <@!${userID}>`)
   })
   }
}
  
