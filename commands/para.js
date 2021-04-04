const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`Kullanıcı: ${user}
  Kullanıcı ID: **${user.id}**
  
  Nakit: ${bal}\n :bank: Banka: ${bank}`)
  message.channel.send(moneyEmbed)
};

exports.config = {
  name: "param",
  guildOnly: true,
  aliases: [],
};

