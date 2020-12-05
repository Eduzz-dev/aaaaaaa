const Discord = require('discord.js')
module.exports = {
  name: "restart",
  category: "owner",
  run: async (client, message, args) => {
    if (message.author.id !== "599361452528369666") {
      return message.channel.send('<:error:584572397622132756> Você não pode usar este comando!')
    }

    let timer = function (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
    let m = await message.channel.send('<a:carregando:756545739655741610> Reiniciando o bot...')
    await timer(2000)
    await m.edit('<:concluido:756561232550428733>  Bot Reiniciado')
      process.exit();
  }
}