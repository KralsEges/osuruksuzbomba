const Discord = require("discord.js")
let database = require("croxydb")




exports.run = async(client, message) => {
  if(!message.member.permissions.has(`ADMINISTRATOR`)) return message.channel.send(
    "yetkin yok"
  )
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(
   "bir rol etiketle"
  )
  
  
  database.set(`normalkayıt${message.guild.id}`, rol.id)
 message.reply("Kayıtlı Rol Başarılı Bir Şekilde Ayarlandı")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  perm: 0
}
exports.help = {
  name: 'kayıtlı-rol'
}   

//Çalanı Sikerim Botu Yapan Emrebey