const {EmbedBuilder} = require("discord.js"); //Burayı Elleme Bot Çalışmaz
const Discord = require("discord.js") //Burayı Elleme Bot Çalışmaz
const config = require("../config.js") //Burayı Elleme Bot Çalışmaz
exports.run = async (client, message, args) => { //Burayı Elleme Bot Çalışmaz
  //Burayı Elleme Bot Çalışmaz
  if (!message.member.permissions.has("MANAGE_GUILD")) //Burayı Elleme Bot Çalışmaz
    return message.channel.send("Gerekli Yetkin Yok!") //Burayı Elleme Bot Çalışmaz
let kullanıcı = message.mentions.members.first() //Burayı Elleme Bot Çalışmaz
if (!kullanıcı) return message.reply("Lütfen bir kullanıcı etiketle!") //Burayı Elleme Bot Çalışmaz
let isim = args.slice(1).join(" ") //Burayı Elleme Bot Çalışmaz
if (!isim) message.reply("Lütfen bir isim girin!") //Burayı Elleme Bot Çalışmaz
kullanıcı.setNickname(isim) //Burayı Elleme Bot Çalışmaz
message.reply("Başarıyla kullanıcının adı değiştirildi") //Burayı Elleme Bot Çalışmaz
//Burayı Elleme Bot Çalışmaz
}; //Burayı Elleme Bot Çalışmaz
exports.conf = { //Burayı Elleme Bot Çalışmaz
  aliases: [] //Burayı Elleme Bot Çalışmaz
}; //Burayı Elleme Bot Çalışmaz

exports.help = { //Burayı Elleme Bot Çalışmaz
  name: "isimdeğiştir" //Burayı Elleme Bot Çalışmaz
}; //Burayı Elleme Bot Çalışmaz


//Çalanı Sikerim Botu Yapan Emrebey