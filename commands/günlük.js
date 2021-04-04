const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {
  let user = message.author;

  let timeout = 86400000;
  let amount = 1500;

  let daily = await db.fetch(`daily_${user.id}`);
  let money = await db.fetch(`money_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
   .setColor(0x7997ff)
    .setImage("https://cdn.discordapp.com/attachments/796351836549939220/797147935703171122/3e8b57f804d626fd692a02bc8a21e206.gif")
    .setDescription(`Günlük Ödülünüzü Zaten Topladınız Tekrar Almanız İçin Kalan Zaman **${time.hours} Saat ${time.minutes} Dakika ${time.seconds} Saniye** `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor(0x7997ff)
  .setImage("https://cdn.discordapp.com/attachments/796351836549939220/797147880280162364/522e0ce4f76271fa6a314e9dc3aa37f1.gif")
  .setDescription(`Günlük Ödülünüzü Aldınız 
  Ödülünüz: **${amount}**
  Paranız: **${money}**`);
  message.channel.send(moneyEmbed)
  db.add(`money_${user.id}`, amount)
  db.set(`daily_${user.id}`, Date.now())


  }
};

exports.config = {
  name: "günlük",
  guildOnly: true,
  aliases: [],
};