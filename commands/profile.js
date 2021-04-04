const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`money_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${user.id}`)
  if (bank === null) bank = 0;

  let vip = await db.fetch(`bronze_${user.id}`)
    if(vip === null) vip = 'Yok'
    if(vip === true) vip = 'Premium'

  let shoes = await db.fetch(`nikes_${user.id}`)
  if(shoes === null) shoes = 'Yok'
    if(shoes === true) shoes = '👑 Kral'

  let newcar = await db.fetch(`car_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await db.fetch(`house_${user.id}`)
  if(newhouse === null) newhouse = '0'
  
  let rep = await db.fetch(`rep_${user.id}`)
  if(rep === null) rep = '0'
if (message.mentions.users.first()) {
user = message.mentions.users.first();
} else {
user = message.author;
}
  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${user}'s Profile**\n\n :reminder_ribbon: +Rep ${rep}\n\n :dollar: Para: ${money}\n:bank: Banka: ${bank}\n :gem: Premium Rank: ${vip}\n👑 Kral: ${shoes}\n\n :wrench: **Envanter**\n :cat: Kedi: ${newcar}\n :guide_dog: Köpek: ${newhouse}`)
.setThumbnail(user.avatarURL);
  message.channel.send(moneyEmbed)
};

exports.config = {
  name: "profil",
  guildOnly: true,
  aliases: [],
};