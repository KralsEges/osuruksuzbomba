const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

message.reply(`${client.ws.ping} Anlık Pingim`)

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ping"
};


//Çalanı Sikerim Botu Yapan Emrebey