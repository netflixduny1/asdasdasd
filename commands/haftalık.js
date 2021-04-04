const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {

  let user = message.author;
  let timeout = 604800000;
  let amount = 5000;

  let weekly = await db.fetch(`weekly_${user.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor(16734039)
    .setDescription(`:x: Haftalık ödülünüzü zaten topladınız \n\n Tekrar almanız için kalan zaman ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark: Haftalık  ödülünü aldın ${amount} `);
  message.channel.send(moneyEmbed)
  db.add(`money_${user.id}`, amount)
  db.set(`weekly_${user.id}`, Date.now())


  }
};


exports.config = {
  name: "haftalık",
  guildOnly: true,
  aliases: [],
};