const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => { 
  let user = message.mentions.members.first() 

  let member = db.fetch(`money_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Para göndereceğin birisini etiketle`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Gönderme tutarı girin`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }

    if (isNaN(args[1])) return message.channel.send({embed: {
                    color: 16734039,
                    description: "Göndermek için para miktarı girmeniz gerekiyor !"
                }})

  let embed3 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Beni kandıramazsın !`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Yeterli paran yok`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark: Para gönderilen kişi  ${user.user.username} Gönderdiğiniz miktar: ${args[1]} `);

  message.channel.send(embed5)
  db.add(`money_${user.id}`, args[1])
  db.subtract(`money_${message.author.id}`, args[1])

}

exports.config = {
  name: "para.gönder",
  guildOnly: true,
  aliases: [],
};
