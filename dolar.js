const Discord = require("discord.js")
const fetch = require("node-fetch")

module.exports.run = async (client, message, args) => {

  let say = (args[0])

    fetch(`https://economia.awesomeapi.com.br/all/USD-BRL`)
    .then(response => response.json())
    .then(data =>{

      

      let usd = data.USD.high.toLocaleString()

      const embed = new Discord.MessageEmbed()
      .setDescription(message.author)
      .setTitle(`Valor do dólar atualmente:`)
      .setColor('RED')
      .addField(`<:money:741482780742910093>`, `1 USD = ${usd}`)
      .addField(`${say} Dólares em reais:`, (args[0]) * data.USD.high.toLocaleString())
      .setFooter(`Comando executado por ${message.author}`)

      if(isNaN(args[0])) return message.reply(`Utilize um número a frente do comando para ele funcionar!`)

      message.channel.send(embed)
      console.log('alguem usou o comando de dolar')

    })
} 
