const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {
  let user = message.author;

  let timeout = 86400000;
  let amount = 1000000;

  let dailye = await db.fetch(`dailye_${user.id}`);

  if (dailye !== null && timeout - (Date.now() - dailye) > 0) {
    let time = ms(timeout - (Date.now() - dailye));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`:x: Günlük ödülünüzü zaten topladınız \n\n Tekrar almanız için kalan zaman ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark: Günlük ödülünü aldın ${amount}`);
  message.channel.send(moneyEmbed)
  db.add(`money_${user.id}`, amount)
  db.set(`dailye_${user.id}`, Date.now())


  }
};

exports.config = {
  name: "milyon",
  guildOnly: true,
  aliases: [],
};