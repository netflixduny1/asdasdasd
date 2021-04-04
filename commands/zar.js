const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

function dice() {
    var answers = ["1", "2", "3", "4", "5", "6"]
    return answers[Math.floor(Math.random()*answers.length)];
}
  
   var embed = new Discord.MessageEmbed()
    .setDescription(":game_die: Zar attın " + `${dice()}` + " Çıktı :game_die:")
    .setColor("RANDOM")
  
  message.channel.send(embed=embed);

}
exports.config = {
  name: "zar",
  guildOnly: true,
  aliases: [],
};
