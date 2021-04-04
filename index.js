const Discord = require("discord.js")     
const client = new Discord.Client();       
const ayarlar = require("./ayarlar.js")    
const db = require("quick.db")
const fs = require("fs");                
require('./util/Loader.js')(client);     

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} Komut Yüklenecek.`);
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    console.log(`${props.config.name} Komutu Yüklendi.`);  
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
})



//EMOJİ SİSTEMİ

client.emoji = function(x) {
  return client.emojis.cache.get(client.emojiler[x]);
};
const emoji = global.emoji;



client.emojiler = {
  coin: "<a:coin:795711621120131105>",
  zar: ""
};

global.emoji = client.emoji = function(x) {
  return client.emojis.cache.get(client.emojiler[x]);
};




client.login(ayarlar.token)
