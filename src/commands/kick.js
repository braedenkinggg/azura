const Discord = require("discord.js");

const { InvalidUsage, MissingPerm } = require("../errors/CmdErrors");

module.exports = {
    name: "kick",
    description: "Kicks a user",

    async execute(message, args) {
        const member = message.mentions.members.first();
        const reason = args.slice(1).join(" ");

        if (!member) throw new InvalidUsage("member");
        if (!message.member.permissions.has("KICK_MEMBERS")) throw new MissingPerm();

        const kickEmbed = new Discord.MessageEmbed()
            .setTitle(`:boot: Kicked @${member.user.tag}`);

        await member.kick(reason)
            .then(() => message.channel.send({embeds: [kickEmbed]}))
            .catch(() => message.channel.send("I need permission to kick members!"));
    }
}
