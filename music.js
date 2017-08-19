const Discord = require('discord.js');
const music = require('discord.js-music-v11');
const Bot = new Discord.Client();
const token = "MzM1NjU1ODM4MjEzNzM0NDAy.DE7hBg.nr5lDTLwyLjhG7G3wi5bwfmwvKU" // Recommended to load from json file. 
 
Bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});
 
music(Bot);
Bot.login(token);