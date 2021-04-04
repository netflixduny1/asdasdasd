const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
const yardım = new Discord.MessageEmbed()
.setColor("RANDOM")
        .setTitle("Warrior Bot Destek Sunucusu")
 .setURL("https://discord.gg/Guf9XMNNd5")
.setDescription(`
〈－－－－－－－－－－－－－－－－－－－－－－〉
:bricks: **Genel**
-rep ( wrw rep )
-profil ( wrw profile )
〈－－－－－－－－－－－－－－－－－－－－－－〉
:rofl: **Eğlence** 
-zar ( wrw zar )
-iq ( wrw iq )
〈－－－－－－－－－－－－－－－－－－－－－－〉
:moneybag: **Economy system**
-banka ( wrw banka 1000 ) - **bankanıza para atarsınız**
-banka para çekme ( wrw para.çek 1000 ) 
-para ( wrw para ) - **kendi paranızı gösterir**
-para gönderme ( wrw para.gönder @etiket 1000 ) 
-market ( wrw market )
-günlük ( wrw günlük )
-haftalık ( wrw haftalık )
----------------------------------------------
-yazı-tura ( wrw coin tura / yazı 1000 )
-rulet ( wrw rulet kırmızı 1000 )
-slots ( wrw slots 1000 )
-Dükkan soyma ( wrw soy )
〈－－－－－－－－－－－－－－－－－－－－－－〉
`)
   .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
message.channel.send(yardım)
};

exports.config = {
  name: "yardım",
  guildOnly: true,
  aliases: [],
};
