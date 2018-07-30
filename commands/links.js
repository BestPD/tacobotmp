const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.channel.id != '473223454628380682') return message.channel.send('This is the incorrect channel to put this command in!')
  let serverembed = new Discord.RichEmbed()

  .setDescription("Useful Links (Mineplex Staff Only)")
  .setColor("#ed960b")
  .addField("Toki's SR Form", "https://bit.ly/tacosr")
  .addField("Mineplex Staff Policy", "https://goo.gl/FhL2xa")
  .addField("Inappropriate Name Submission Form", "https://goo.gl/SYhUdy")
  .addField("Punishment Guidelines (Staff)", "https://goo.gl/q7TBVu")
  .addField("List of Filtered Words","https://goo.gl/9gAfNJ");

  return message.channel.send(serverembed);

  return;
  }

  module.exports.help = {
    name: "links"
  };
