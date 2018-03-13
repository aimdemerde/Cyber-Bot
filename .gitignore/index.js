const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Cyber Bot, !Help");
    console.log("le bot a bien ete connecte");
});

bot.login("NDIyODQ1NTI5MDM5NDM3ODI0.DYhtGg.TCwB2ecqTcT4JKtfFBiVfvZnE5A");
