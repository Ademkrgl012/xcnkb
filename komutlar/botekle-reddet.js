const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require('quick.db')
exports.run = function(client, message, args) {
  let yetkili = message.author;
   let yetkiliROL = ayarlar.yetkiliROL;
  let botisim = args[1]
  let sahip = args[0]
  let sebep = args.slice(2).join(" ") || 'Belirtilmemiล' 
  let log = ayarlar.log;
  let hata1 = new Discord.MessageEmbed()
  .setDescription(`
   Hata 01
   
   \`Bu komutu sadece <@&${yetkiliROL}> rolรผne sahip olanlar kullanabilir.\`
`)
    let hata2 = new Discord.MessageEmbed()
  .setDescription(`
   Hata 02
   
   \`Reddedeceฤin botun sahibinin ID'sini belirt.\`
`)
       let hata3 = new Discord.MessageEmbed()
  .setDescription(`
   Hata 03
   
   \`Reddedeceฤin botun ID'sini belirt.\`
`)
       

  if (!message.member.roles.cache.has(yetkiliROL)) return message.channel.send(hata1)
    if(!sahip) return message.channel.send(hata2)
  if(!botisim) return message.channel.send(hata3)
  let embed2 = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setDescription(
      `
    ๐ค **Maalesef, <@!${botisim}> adlฤฑ botun reddedildi.** 
    โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
    ๐ Sebep : ** ${sebep} **

    ๐ฎโโ๏ธ Yetkili |${message.author} **
`);

  let embed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setDescription(
      `  
      ๐ค **Bir bot reddedildi**
      **  ๐ค  Sahip Bilgisi |[ <@${sahip}> ] \`[ ${sahip} ]\`**
     โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
      **  ๐ Bot Bilgisi |[ <@!${botisim}>] \`[ ${botisim} ]\`**
      **  ๐ Red Sebebi |\`[ ${sebep} ]\`**
`
    );

  message.delete();
  client.channels.cache.get(ayarlar.redLOG).send(embed)
  client.users.cache.get(sahip).send(embed2);
  db.add(`sฤฑra_${message.guild.id}`,-1)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["red", "reddet"],
  permLevel: 0
};

exports.help = {
  name: "botreddet",
  description: "Sunucuya eklenen botu reddeder.",
  usage: "botreddet <bot ismi> - <sebep>"
};
