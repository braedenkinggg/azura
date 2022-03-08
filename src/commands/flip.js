const Discord = require("discord.js");

const randChoice = require("../utils/randChoice");

module.exports = {
    name: "flip",
    description: "Flips a coin",

    async execute(message) {
        const outcomes = ["Heads", "Tails"];
        const flipEmbed = new Discord.MessageEmbed()
            .setTitle(":coin: Coin Flipped")
            .setDescription(`The Coin landed on... **${randChoice(outcomes)}**`);

        await message.channel.send({embeds: [flipEmbed]});
    }
}