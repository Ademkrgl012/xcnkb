const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:BEEhayir:519886397482729473>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  const mesaj2 = await db.fetch(`girism_${message.guild.id}`);
  
  let mesaj = args.slice(0).join(' ')
  
  if(mesaj === "sıfırla") {
    if(!mesaj2) {
      message.channel.send(`<:BEEhayir:519886397482729473>Ayarlanmayan şeyi sıfırlayamazsın.`)
      return
    }
    
    db.delete(`girism_${message.guild.id}`)
    message.channel.send(`<:BEEevet:519886383456714784>Giriş mesajı başarıyla sıfırlandı.`)
    return
  }
  
      if (!mesaj) {
        return message.channel.send(`<:BEEhayir:519886397482729473>Giriş mesajını yazmalısın.`)
    }
  
    db.set(`girism_${message.guild.id}`, mesaj)
    message.channel.send(`<:BEEevet:519886383456714784>Giriş mesajı \`${mesaj}\` olarak ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['girişm','giriş-mesaj'],
    permLevel: 3
}

exports.help = {
    name: 'girişmesaj',
    description: 'Giriş mesajını ayarlar. (Kullanıcı isminin geleceği yere "-kullanıcı-", sunucu isminin geleceği yere "-sunucu-" yazınız.)',
    usage: 'girişmesaj <yazı>'
}