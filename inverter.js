const Discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
  if(!args[0]) message.channel.send(`\`Escreva um texto para eu inverter\``)
       const msg2 = args.join(' ');
      let msg = await message.reply(msg2.split('').reverse().join(''));
      
      await message.delete()
      console.log('alguem usou o comando de inverter ' + msg2)
}