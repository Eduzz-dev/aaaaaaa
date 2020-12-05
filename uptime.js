const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `<a:carregando:756545739655741610>  ${days.toFixed()} dias\n<a:carregando:756545739655741610>  ${hours.toFixed()} horas\n<a:carregando:756545739655741610>  ${minutes.toFixed()} minutos\n<a:carregando:756545739655741610>  ${seconds.toFixed()} segundos`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`Tempo de atividade 🕰️`)
    .setThumbnail("https://cdn.discordapp.com/emojis/753693795643687163.png?size=2048")
    .setColor("YELLOW")
    .setDescription(`**Estou online há:**\n${uptime}`)
    .setFooter("Comando requisitado por: "+message.author.username, message.author.displayAvatarURL({size: 32}))

  message.channel.send(embed);
};