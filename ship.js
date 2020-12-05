const Discord = require("discord.js")

module.exports.run = async(client, message, args) =>{

message.delete()
let user = message.mentions.users.first() || message.author
let avatar = user.avatarURL({format: 'png', dynamic: true, size: 1024})

let valor1 = args[0]
let valor2 = args[1]

let maximo = 100
let ganho = Math.floor(Math.random()* maximo + 0)

let erro1 = new Discord.MessageEmbed()
.setTitle("<:warn:752915973480382474>  Mencione 2 Usúarios")
.setColor("YELLOW").setTimestamp()
.setDescription(`**<a:seta3:755497207729356921>  Exemplo \`\`\ l!ship <usùario1> <usúario2> \`\`\ **`)
.setFooter(message.author.tag)
.setThumbnail(avatar)

if(!valor1) return message.channel.send(erro1)

let erro2 = new Discord.MessageEmbed()
.setTitle("<:warn:752915973480382474>  Mencione 2 Usúarios")
.setColor("YELLOW").setTimestamp()
.setDescription(`<a:seta3:755497207729356921> Exemplo \`\`\ l!ship <usùario1> <usúario2> \`\`\ **`)
.setFooter(message.author.tag)
.setThumbnail(avatar)

if(!valor2) return message.channel.send(erro2)


let embed = new Discord.MessageEmbed()
.setTitle("<a:luvey:751629171465388032>  Qual a Porcentagem de Amor?")
.setColor("YELLOW").setTimestamp()
.setFooter(message.author.tag)
.setThumbnail(avatar)
.addField("**<a:luvey:751629171465388032>  Shipados**",` ${valor1} e ${valor2} `)
.addField("**<a:luvey:751629171465388032>  Porcentagem de Amor**",` \`\`\ ${ganho}% \`\`\ `)


message.channel.send(embed)





}