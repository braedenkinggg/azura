const Discord = require("discord.js");

const { MissingArg } = require("../errors/CmdErrors");

module.exports = {
    name: "warn",
    description: "warns a user",

   async execute(message) {
        const user = message.mentions.members.first();
        if (!user) throw new MissingArg("user");

        const warnEmbed = new Discord.MessageEmbed()
            .setTitle(`:warning: **Warned:** ${member.user.tag}`);

        await message.channel.send({embeds: [warnEmbed]});
    }
}