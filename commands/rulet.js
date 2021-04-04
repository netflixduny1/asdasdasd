const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {
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
.setDescription(`:x: Rulet oynamak için bir miktar belirtin. Örnek: w rulet siyah 1000`);

let moneymore = new Discord.MessageEmbed()
.setColor("FF5757")
.setDescription(`:x: Bu kadar paran yok !`);

let colorbad = new Discord.MessageEmbed()
.setColor("FF5757")
.setDescription(`:x: Bir renk belirtin | :red_circle: Kırmızı [1.5x] :black_circle: Siyah [2x] :green_circle: Yeşil [15x]`);


    if (!colour)  return message.channel.send(colorbad);
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(moneyhelp); 
    if (money > moneydb) return message.channel.send(moneymore);
    
    if (colour == "b" || colour.includes("siyah")) colour = 0;
    else if (colour == "r" || colour.includes("kırmızı")) colour = 1;
    else if (colour == "g" || colour.includes("yeşil")) colour = 2;
    else return message.channel.send(colorbad);
    
    
    
    if (random == 0 && colour == 2) { // Green
        money *= 15
        db.add(`money_${user.id}`, money)
        let moneyEmbed1 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:green_circle: Kazandın ${money}  :tada:`)
		.setFooter(`Çizerge: 15x | Renk: Yeşil`)
        message.channel.send(moneyEmbed1)
    } else if (isOdd(random) && colour == 1) { // Red
        money = parseInt(money * 1.5)
        db.add(`money_${user.id}`, money)
        let moneyEmbed2 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:red_circle: Kazandın ${money}  :tada:`)
	.setFooter(`Çizerge: 1.5x | Renk: Kırmızı`);
        message.channel.send(moneyEmbed2)
    } else if (!isOdd(random) && colour == 0) { // Black
        money = parseInt(money * 2)
        db.add(`money_${user.id}`, money)
        let moneyEmbed3 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:black_circle: Kazandın ${money}  :tada:`)
		.setFooter(`Çizerge: 2x | Renk: Siyah`)
        message.channel.send(moneyEmbed3)
    } else { // Wrong
        db.subtract(`money_${user.id}`, money)
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setColor("FF5757")
        .setDescription(`:x: Kaybettin ${money} :cry: `)
		.setFooter(`Çizerge: 0x |  :(`)
        message.channel.send(moneyEmbed4)
    }
}



exports.config = {
  name: "rulet",
  guildOnly: true,
  aliases: [],
};
