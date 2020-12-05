const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
if (!['348952884869857293'].includes(message.author.id) && !message.member.hasPermission("MANAGE_CHANNELS")) {
    return message.reply('você precisa ser meu dono ou ter a permissão \`Gerenciar Canais\` para executar o comando')
}

  let channel = message.mentions.channels.first() 

  if(!channel) {
    return message.reply(`Mencione o canal onde as logs irão!`)
  }

  db.set(`edit_${message.guild.id}`, channel.id) 
  db.set(`delm_${message.guild.id}`, channel.id)
    
  message.channel.send(`o Canal de Logs setado: ${channel}`) 
  console.log('alguem usou o comando de setlogs')
  }

