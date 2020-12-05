const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('ping?');

  m.edit(`🏓 **| Pong!**\n<a:Ping:756487316566048768> Latência do Server: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\n<a:Ping:756487316566048768> Latência da API: **${Math.round(
      client.ws.ping
    )}ms**`
  );
};