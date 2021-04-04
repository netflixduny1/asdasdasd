const db = require("quick.db");
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let user = message.author;
    let moneydb = await db.fetch(`money_${user.id}`)
    let money = parseInt(args[0]);
      let eksikcoin = new Discord.MessageEmbed()
    .setColor(0x7997ff)
    .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    .setDescription(`Sahip olduğunuzdan daha fazla para eklediniz Paranız: **${moneydb}**`);
    let tutar = new Discord.MessageEmbed()
    .setColor(0x7997ff)
    .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    .setDescription(`**Lütfen Bir Tutar Belirtin Örnek:** \`!tkm 100\``)
    .setFooter("BetBot - Taş, Kağıt, Makas")
    if (!money) return message.channel.send(tutar);
    if (money > moneydb) return message.channel.send(eksikcoin);
   	let embed = new Discord.MessageEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/796351836549939220/796357536374587393/giphy.gif')
		.setDescription(`**Oynamak İçin Lütfen Bir Tepkiye Basın**
    🗻 **- Taş**
    
    📰 **- Kağıt**
    
    ✂ **- Makas**`)
		.setColor(0x7997ff)
		let msg = await message.channel.send(embed)
		await msg.react("🗻")
		await msg.react("✂")
		await msg.react("📰")

		const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
            
			await msg.edit(embed)
        		if ((me === "🗻" && reaction.emoji.name === "✂") ||
            (me === "📰" && reaction.emoji.name === "🗻") ||
            (me === "✂" && reaction.emoji.name === "📰")) 
            { money *= 2
            message.channel.send(new Discord.MessageEmbed()
            .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
            .setThumbnail('https://cdn.discordapp.com/attachments/796351836549939220/796357536374587393/giphy.gif')
            .setDescription(`**Kaybettiniz!**`)
            .setColor(0xff0b41)
        		.addField("Seçiminiz", `${reaction.emoji.name}`,true)
        		.addField("Botun Seçimi", `${me}`,true))
            db.subtract(`money_${user.id}`, money)
            } else if (me === reaction.emoji.name) {
            return message.channel.send(new Discord.MessageEmbed()
            .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
            .setThumbnail('https://cdn.discordapp.com/attachments/796351836549939220/796357536374587393/giphy.gif')
            .setDescription(`**Berabere!**`)
            .setColor(0x7997ff)
        		.addField("Seçiminiz", `${reaction.emoji.name}`,true)
        		.addField("Botun Seçimi", `${me}`,true))
            } else {
            return message.channel.send(new Discord.MessageEmbed()
            .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
            .setThumbnail('https://cdn.discordapp.com/attachments/796351836549939220/796357536374587393/giphy.gif')
            .setColor(0x06ff7b)
        		.addField("Seçimler", `> <@!${message.author.id}> - ${reaction.emoji.name} \n> <@!795694107560509461> - ${me}`,true)
            .addField("Sonuçlar",`> **Kazandınız!** \n> **${money}**`,true))
            
            db.add(`money_${user.id}`, money)
            }
        })
        .catch(collected => {
                msg.edit('Zamanında yanıt vermediğiniz için işlem iptal edildi!');
            })
}

exports.config = {
  name: "tkm",
  guildOnly: true,
  aliases: [],
};