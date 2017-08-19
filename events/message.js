module.exports = async client => {
  client.on("message", message => {

    if (message.author.bot) return;
    if (message.content.substring(0,client.prefix.length)!=client.prefix) return;

    const rgPre = _.escapeRegExp(client.prefix);
    const noP = message.content.replace(new RegExp(`^${rgPre}`), '');

    let words = noP.split(/\s+/);
    let args = _.drop(words);
    switch (words[0].toLowerCase()) {
      case "ping": {
        return message.channel.send("Pong!"); }

      case "info": {
        return message.channel.send("Basic Command: ``play``"); }

      case "play": {
        return message.channel.send("Fite/Bag/Pokement"); }

      case "help": {
        return message.channel.send("Ping, Play, Info, Embed "); }

      case "embed": {
        const embed = new Discord.RichEmbed().setTitle('Hello!').setDescription('this is an awesome rich embed');
        return message.channel.send('', { embed }); }

      case "removerole": {
        if(!message.author.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have ``MANAGE_ROLES`` permissions!');
        if(!args[0]) return message.channel.send('No role given');
        else{
          const queryRNm = _.drop(args).join(' ');
          const queryR = message.guild.roles.find('name',queryRNm);
          if(queryR)
            return message.member.removeRole();
          else
            return message.channel.send(`Could not find a role named \`\`${queryRNm}\`\` to remove!`);
        }}

      default: {
        return message.channel.send("Error 404 Invalid Command!"); }
    }
  });
}
