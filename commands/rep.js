const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {
  let user = message.author;

  let timeout = 86400000;
  let amount = 1;

  let res = await db.fetch(`res_${user.id}`);

  if (res !== null && timeout - (Date.now() - res) > 0) {
    let time = ms(timeout - (Date.now() - res));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`:x: Günlük rep aldınız \n\n Tekrar almanız için kalan zaman ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark: ${amount}'Adet +rep aldın ' `);
  message.channel.send(moneyEmbed)
  db.add(`rep_${user.id}`, amount)
  db.set(`res_${user.id}`, Date.now())


  }
};


exports.config = {
  name: "rep",
  guildOnly: true,
  aliases: [],
};