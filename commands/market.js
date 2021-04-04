const Discord = require('discord.js')
const db = require("quick.db");


module.exports.run = async (client, message, args) => {

    let user = message.author;

    let author = db.fetch(`money_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("FF5757")
    .setDescription(`:x: Premium almak için paranız yeterli değil, Gereken para 800000$ `);

    if (args[0] == 'premium') {
        if (author < 800000) return message.channel.send(Embed)
        
        db.fetch(`bronze_${user.id}`);
        db.set(`bronze_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: Premium satın aldın teşekkür ederiz. `);

        db.subtract(`money_${user.id}`, 800000)
        message.channel.send(Embed2)
    } else if(args[0] == 'kral') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("FF5757")
        .setDescription(`:crown: Kral almak için paranız yeterli değil, Gereken para 1500000$ `);

        if (author < 1500000) return message.channel.send(Embed2)
       
        db.fetch(`nikes_${user.id}`)
        db.add(`nikes_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: :crown: Kral satın aldın teşekkür ederiz.`);

        db.subtract(`money_${user.id}`, 1500000)
        message.channel.send(Embed3)
    } else if(args[0] == 'kedi') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("FF5757")
        .setDescription(` :cat: Kedi almak için paranız yeterli değil, Gereken para 10000$ `);

        if (author < 10000 ) return message.channel.send(Embed2)
       
        db.fetch(`car_${user.id}`)
        db.add(`car_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: Kedi satın aldın teşekkür ederiz.`);

        db.subtract(`money_${user.id}`, 10000 )
        message.channel.send(Embed3)
    } else if(args[0] == 'köpek') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("FF5757")
        .setDescription(`:dog: Köpek almak için paranız yeterli değil, Gereken para 10000$ `);

        if (author < 10000) return message.channel.send(Embed2)
       
        db.fetch(`house_${user.id}`)
        db.add(`house_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: Köpek satın aldın teşekkür ederiz.`);

        db.subtract(`money_${user.id}`, 10000)
        message.channel.send(Embed3)
		
	} else if(args[0] == 'liste') {
	let list = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Market listesi:")
     	.addField(" :gem: Premium", "Fiyat: 800000 :money_with_wings: ")
		.addField("👑 Kral", "Fiyat: 1500000 :money_with_wings: ")
		.addField(" :cat: Kedi", "Fiyat: 10000 :money_with_wings: ")
		.addField(":guide_dog: Köpek", "Fiyat: 10000 :money_with_wings: ")
		message.channel.send(list)
    } else {
        let embed3 = new Discord.MessageEmbed()
        .setColor("FF5757")
        .setTitle("Örnek: wrw market liste, Satın almak için Örnek: wrw market kedi ")
        message.channel.send(embed3)
    }

}
  
exports.config = {
  name: "market",
  guildOnly: true,
  aliases: [],
};