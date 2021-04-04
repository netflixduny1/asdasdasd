const Discord = require('discord.js')
const { ReactionPages } = require('reconlx')


module.exports.run = async (client, message, args) => {

 const petshop = new Discord.MessageEmbed()
 .setColor(0x7997ff)
 .setDescription("Hayvanlar 1")
 .addField("Kediler 1",`s`)
 const petshopp = new Discord.MessageEmbed()
 .setColor(0x7997ff)
 .setDescription("Hayvanlar 2")
 .addField("Kediler 2 ",`s`)
  const petshoppp = new Discord.MessageEmbed()
 .setColor(0x7997ff)
 .setDescription("Hayvanlar 3")
 .addField("Kediler 3 ",`s`)
   const petshopppp = new Discord.MessageEmbed()
 .setColor(0x7997ff)
 .setDescription("Hayvanlar 4")
 .addField("Kediler 4",`s`)
   
   const pages = [petshop, petshopp, petshoppp, petshopppp];
  ReactionPages(message, pages, false)
}
  
exports.config = {
  name: "mt",
  guildOnly: true,
  aliases: [],
};