const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {

  let user = message.author;

  let member = db.fetch(`money_${user.id}`)
  let member2 = db.fetch(`bank_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`bank_${user.id}`)
    
    db.subtract(`bank_${user.id}`, money)
    db.add(`money_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Bankanızdan tüm paralarınızı çektiniz`);
  message.channel.send(embed5)
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Çekilecek bir miktar belirtin`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Beni kandıramazsın !`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Bankada o kadar paran yok`);

  if (member2 < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:green_circle: Bankanızdan  ${args[0]} Para çektiniz.`)

  message.channel.send(embed5)
  db.subtract(`bank_${user.id}`, args[0])
  db.add(`money_${user.id}`, args[0])
  }
}


exports.config = {
  name: "para.çek",
  guildOnly: true,
  aliases: [],
};