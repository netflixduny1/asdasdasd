
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {

  let user = message.author;

  let timeout = 580000;
    let amount = Math.floor(Math.random() * 1000) + 50;

  let beg = await db.fetch(`beg_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor(16734039)
    .setDescription(`1 Kez dükkan soydun ve biraz beklemen gerekiyor \n\n Kalan Süre:  ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark: Küçük bi dükkan soydun ! ${amount} `);
  message.channel.send(moneyEmbed)
  db.add(`money_${user.id}`, amount)
  db.set(`beg_${user.id}`, Date.now())


  }
};

exports.config = {
  name: "soy",
  guildOnly: true,
  aliases: [],
};
