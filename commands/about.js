const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let serverembed = new Discord.RichEmbed()
  .setDescription("Welcome to Taco Bot, the best assistant that offers various commands!")
  .setColor("#ed960b")
  .addField("Who's who?", "Toki is the mentor, and Pizzaman319 + BestPD are the mentoring assistants.")
  .addField("Who should I reach out to regarding a mentee?", "You can contact Toki for any questions or concerns.")
  .addField("How can I see a full list of commands?", "Do !commands for more information.")
  .addField("_ _","Bot created by BestPD")

  return message.channel.send(serverembed);

  return;
  }

  module.exports.help = {
    name: "about"
  };
