const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let replies = ["National Taco Day is October 4th!", "The heaviest taco ever was 1,654 pounds, or 750kg!", "Around half of the United States population eats Taco Bell at least once per month!", "Americans consume more than 4 billion tacos each year!", "The founder of Taco Bell originally made a restaurant called Taco Tia!", "The first taco dates back to somewhere between 1,000 and 500 B.C!", "The first ever Taco Truck was in New York!", "Hard taco shells were invented in 1947!"];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(1).join(" ");

let tacoembed = new Discord.RichEmbed()
.setColor("#ed960b")
.addField("Taco Fact :taco:", replies[result]);

message.channel.send(tacoembed);


};
  module.exports.help = {
    name: "tacofact"
  };
