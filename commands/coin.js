const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args, emoji) => {
  let user = message.author;

  function isOdd(num) { 
	if ((num % 2) == 0) return false;
	else if ((num % 2) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
let moneydb = await db.fetch(`money_${user.id}`)

let random = Math.floor(Math.random() * 37);

let moneyhelp = new Discord.MessageEmbed()
.setColor("FF5757")
.setDescription(`:x: Kullanım wrw coin yazı / tura 100`);

let moneymore = new Discord.MessageEmbed()
.setColor("FF5757")
.setDescription(`:x: Bu kadar paran yok !`);

let colorbad = new Discord.MessageEmbed()
.setColor("FF5757")
.setDescription(`:x: Kullanım wrw coin yazı / tura 100`);


    if (!colour)  return message.channel.send(colorbad);
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(moneyhelp); 
    if (money > moneydb) return message.channel.send(moneymore);
    
    if (colour == "b" || colour.includes("yazı")) colour = 0;
    else if (colour == "r" || colour.includes("tura")) colour = 1;
    else return message.channel.send(colorbad);
    
    
    
    
    if (isOdd(random) && colour == 1) { // Red
        money = parseInt(money * 1)
        db.add(`money_${user.id}`, money)
        let moneyEmbed2 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:coin: Kazandın ${money}  :coin:`)
	.setFooter(`Tura`);
        message.channel.send(moneyEmbed2)
    } else if (!isOdd(random) && colour == 0) { // Black
        money = parseInt(money * 1)
        db.add(`money_${user.id}`, money)
        let moneyEmbed3 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`${client.emojiler.coin} Kazandın ${money}  :coin:`)
		.setFooter(`Yazı`)
        message.channel.send(moneyEmbed3)
    } else { // Wrong
        db.subtract(`money_${user.id}`, money)
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setColor("FF5757")
        .setDescription(`:x: Kaybettin ${money} `)
		.setFooter(`Developer Wracnhes`)
        message.channel.send(moneyEmbed4)
    }
}


exports.config = {
  name: "coin",
  guildOnly: true,
  aliases: [],
};
