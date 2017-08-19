//==================================================================//
global._ = require ('discord.js');
//==================================================================//
const commando = require('discord.js-commando');
const fs = require('fs');
//==================================================================//
const bot = new commando.Client();
bot.prefix = "-;";

const TOKEN = "MzM1NjU1ODM4MjEzNzM0NDAy.DE7hBg.nr5lDTLwyLjhG7G3wi5bwfmwvKU";
const fortunes = [
    "Yes",
    "No",
    "Maybe",
    "I think so"
];
//==================================================================//
fs.readdir('./events/', (err, events) => {
  if (err) throw(err);
  events.forEach(async e => {
    await require(`./events/${e}`)(bot);
  });
});
//==================================================================//
bot.login(TOKEN);
