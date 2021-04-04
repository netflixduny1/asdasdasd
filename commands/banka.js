
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {

  let user = message.author;

  let member = db.fetch(`money_${user.id}`)
  let member2 = db.fetch(`bank_${user.id}`)

if(isNaN(args[0])) {
    return message.channel.send({embed: {
     color: 16734039,
     description: `Para yatırmak için bir sayı giriniz`
     }})
}
	
  if (args[0] == 'all') {
    let money = await db.fetch(`money_${user.id}`)
    let bank = await db.fetch(`bank_${user.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(":x: Bankaya yatırıcak yeterli paranız bulunmamaktadır !")

    if(money === 0) return message.channel.send(embedbank)

    db.add(`bank_${user.id}`, money)
    db.subtract(`money_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark:  Tüm paranızı bankaya yatırdınız`);
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Yatırıcak bir miktar belirtin`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Seni çakal bu yasak !`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Yazdığınız rakamda paranız bulunmamaktadır`);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark:  Bankanıza ${args[0]} para yatırdınız`);

  message.channel.send(embed5)
  db.add(`bank_${user.id}`, args[0])
  db.subtract(`money_${user.id}`, args[0])
  }
}
exports.config = {
  name: "banka",
  guildOnly: true,
  aliases: [],
};
