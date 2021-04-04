const slotItems = ["<a:sapsap:796330332152528909>","<a:ponpon:796330334441439253>","<a:opcuk:796330334711054356>","<a:kalppp:796330407405682719>","<a:kalpp:796330337884962838>","<a:kalpler:796330407146553394>","<a:para:795711621120131105>"];
const db = require("quick.db");
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    
    let user = message.author;
    let moneydb = await db.fetch(`money_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;
  
  
    let eksikcoin = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Sahip olduğunuzdan daha fazla para eklediniz Paranız: ${moneydb}`);

    let tutar = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Lütfen bir tutar girin`);

    if (!money) return message.channel.send(tutar);
    if (money > moneydb) return message.channel.send(eksikcoin);

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let kazandın = new Discord.MessageEmbed()
            .setThumbnail('https://cdn.discordapp.com/attachments/796351836549939220/796351897488457788/ezgif-1-85a0be96c162.gif')
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}`)
            .addField("Sonuçlar",`**Kazandınız!** \nKazanç: **${money}**`)
            .setColor(0x06ff7b)
        message.channel.send(kazandın)
        db.add(`money_${user.id}`, money)
    } else {
        let kaybettin = new Discord.MessageEmbed()
            .setThumbnail('https://cdn.discordapp.com/attachments/796351836549939220/796351897488457788/ezgif-1-85a0be96c162.gif')
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}`)
            .addField("Sonuçlar",`**Kaybettiniz!** \nParanız: **${money}**`)
            .setColor(0xff0b41)
        message.channel.send(kaybettin)
        db.subtract(`money_${user.id}`, money)
    } 
}

exports.config = {
  name: "ss",
  guildOnly: true,
  aliases: [],
};