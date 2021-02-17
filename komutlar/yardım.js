const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var PREFIX = ayarlar.prefix
const db = require ('quick.db')
exports.run = async (client, message, args) => {
const merziki = new Discord.MessageEmbed()
.setColor('ORANGE')
.setTitle('Bot Nasıl Eklenir?')
.setTimestamp(30000)
.addField("• Botunuzu Eklemek İçin; \n\n `!botekle <botID> <prefix>`")
.addField("• Bot Onaylamak İçin; \n\n `!botekle <botID> <prefix>`")
.addField("• Bot Reddetmek İçin; \n\n `!botekle <botID> <prefix>`")


.setFooter('')
message.channel.send(merziki)
};


exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
