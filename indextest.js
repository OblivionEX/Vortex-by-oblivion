const Discord = require("discord.js");
const client = new Discord.Client();
const token = "MzM1NjU1ODM4MjEzNzM0NDAy.DE7hBg.nr5lDTLwyLjhG7G3wi5bwfmwvKU"
const embed = new Discord.RichEmbed();
const fs = require("fs");
var prefix = "-;"
 
client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot online!`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setGame(`Use -;help for commands!`);
});
 
client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});
 
client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});
 
 
client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
 
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
 
  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if(message.content.indexOf(prefix) !== 0) return;
 
  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.split(/\s+/g);
  const command = args.shift().slice(prefix.length).toLowerCase();
 
  // Let's go with a few common example commands! Feel free to delete or change those.
 
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
 
  if(command === "say") {
   
    if(message.author.id !== "260575254907322378")
      return message.reply("You are not my master. I deny your request.");
    const sayMessage = args.join(" ");
    message.delete().catch(console.error);
    message.channel.send(sayMessage);
    message.delete();
  }
 
  if(command === "kick") {
  if(!message.member.roles.some(r=>["Staff"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
   
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
      if(!member.kickable)
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
   
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
   message.channel.send(`@${member.user.tag} has been kicked. Lolrip. `);
 }
 
 if(command === "ban") {
   // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    // Same as kick, choose the roles that can ban
  if(!message.member.roles.some(r=>["Staff"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
   
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
 
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
   
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban ${member.user.tag}because of : ${error}`));
   message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
 }
 
 if(command == "setgame") {
   
   if(message.author.id !== "260575254907322378")
     return message.reply("Yes sir");
   
   var game = args.join(" ");
   if(!game || game.length < 1) game = null;
   
   await client.user.setGame(game)
     .catch(error => message.reply(`Sorry ${message.author}, I couldn't set ${game} as game. Error: ${error}`));
   message.reply(`Game setted as: ${game}`);
 }
if(command == "youtube") {
  return message.reply("https://www.youtube.com/channel/UCfvbQlviNKE54CvQdP2M5dg")
}
if(command == "subcount") {
  return message.reply("https://socialblade.com/youtube/channel/UCfvbQlviNKE54CvQdP2M5dg/realtime")
}
if(command == "callforhelp") {
   message.channel.send("You called for help.... but nobody came")
}
if(command == "help") {
  return message.reply("Hotkey. The hotkey for this bot is `-;`./n" +
  "Commands, Say(administrator of bot only), Callforhelp(calls for help), Setgame(bot admin only), Ban kick and mute (Ususal server perms required),/n" +
  "more commands coming soon!")
}
if(command == "xena") { 
   message.channel.send("The best looking female to ever exist on the planet. Kind, caring, and hot enough to melt anything that comes near her. Is always there when you need her the most. Can not be beaten, would make great girl friend and wife. Property of Obi, Oblivion and Rjt")
}
if(command == "aboose") {
   message.channel.send("*aboooosseeeeedd*");
}
if(command == "no") {
  message.channel.send("No. Just, no.")
}
if(command == "triggered") {
  message.channel.send("***TRIGGERED***")
}
if(command == "y") {
  message.channel.send("Why tho.")
}
if(command == "leaderboard") {
  message.channel.send("Official Mee6 leaderboard for Sinbad ⚔ Knights  https://mee6.xyz/levels/257889450850254848 ")
}
if(command == "invite") {
  message.channel.send("Invite me to your server! https://discordapp.com/oauth2/authorize?client_id=335655838213734402&scope=bot&permissions=2146958591")
}
if(command == `roast ${member.user.tag}`) {
  message.channel.send(`OHHHHH GET ROASTED ${member.user.tag}`)
}
});
console.log
client.login(token);