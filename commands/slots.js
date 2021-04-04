const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {
    let user = message.author;

  let slots = [" :apple: ", " :grapes: ", " :pineapple: "];
  let result1 = Math.floor((Math.random() * slots.length));
  let result2 = Math.floor((Math.random() * slots.length));
  let result3 = Math.floor((Math.random() * slots.length));
  let name = message.author.displayName;
  let icon = message.author.displayAvatarURL;
let money = parseInt(args[0]);
let moneydb = db.fetch(`money_${user.id}`)

let moneyhelp = new Discord.MessageEmbed()
.setColor("FF5757")
.setDescription(`:x: Kullanım: wrw slots 10`);

let moneymore = new Discord.MessageEmbed()
.setColor("FF5757")
.setDescription(`:x: Bu kadar paran yok !`);
      if (!money) return message.channel.send(moneyhelp); 
    if (money > moneydb) return message.channel.send(moneymore);
  if (slots[result1] === slots[result2] && slots[result3]) {
    let embed = new Discord.MessageEmbed()
       .setFooter(`Kazandın! ${money} `, icon)
       .setTitle(':slot_machine: Slots :slot_machine:')
       .addField('Sonuç:', slots[result1] + slots[result2] + slots[result3], true)
       .setColor(0xF4E842)
       
            money = parseInt(money * 1)

   db.add(`money_${user.id}`, money)

    message.channel.send(embed); 

  } else {
    let embed2 = new Discord.MessageEmbed()
       .setFooter(`Kaybettin! ${money}` , icon)
       .setTitle(':slot_machine: Slots :slot_machine:')
       .addField('Sonuç:', slots[result1] + slots[result2] + slots[result3], true)
       .setColor(0xF4E842)
            db.subtract(`money_${user.id}`, money)
    message.channel.send(embed2);
  }
}
exports.config = {
  name: "slot",
  guildOnly: true,
  aliases: [],
};