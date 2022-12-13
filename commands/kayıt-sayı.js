const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async(client, message) => {
  let kullanıcı = message.mentions.members.first()
   
   if (!kullanıcı) return message.reply("Lütfen bir kullanıcı etiketle!")
   message.reply("Bu kullanıcı kimseyi kayıt etmemiş!");
   let puan = db.get(`normal_kayıt${kullanıcı.id}_${message.guild.id}`).length;
   const embed = new Discord.EmbedBuilder()
   .setTitle("EmreBey- Sorgu Sistemi!")
   .setDescription(`Kullanıcı: ${kullanıcı}\nKayıt Ettiği Kişi Sayısı: ${puan}\nSorgulayan: ${message.author}`)
   message.reply({embeds: [embed]})

//Çalanı Sikerim Botu Yapan Emrebey

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  perm: 0
}
exports.help = {
  name: 'kayıt-puan'
}   