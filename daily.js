const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (cora, message, args) => {
  
  let amount = 150;
  let user = message.author;
  
  var day = new Date().getDate();
  var month = new Date().getMonth();
  
  let lastDailyD = await db.fetch(`lastdailyd_${user.id}`);
  if (lastDailyD === null) lastDailyD = 0;
  let lastDailyM = await db.fetch(`lastdailym_${user.id}`)
  if (lastDailyM === null) lastDailyM = 0;
  
  
   if (lastDailyD === day && lastDailyM === month) {
   message.reply("Volte daqui 24H pra pega denovo") 
 } else {
   db.set(`lastdailyd_${message.author.id}`, day);
   db.set(`lastdailym_${message.author.id}`, month);
  
   message.channel.send("🏧 | **" + user.username + ", voce recebe 💵 2500  coins!**")
   db.add(`money_${user.id}`, amount)
 }
  
}
