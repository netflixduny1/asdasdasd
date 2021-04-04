const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
try {

const iq = Math.floor(Math.random() * 226);
const embed = new Discord.MessageEmbed()
  .setTitle(":brain: IQ Test:")
  .setDescription(":bulb: " + message.author.username + " IQ: `" + iq + "`")
  .setColor(`RANDOM`)
  .setTimestamp()
message.channel.send(embed);

} catch (err) {
    message.channel.send({embed: {
      color: 16734039,
      description: "Hata oluştu tekrar dene !"
    }})
  }
}

exports.config = {
  name: "iq",
  guildOnly: true,
  aliases: [],
};