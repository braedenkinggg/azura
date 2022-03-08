const Discord = require('discord.js');

const { MissingArg, MissingPerm } = require("../errors/CmdErrors");

module.exports = {
    name: "ban",
    description: "Ban's a user",

    async execute(message, args) {
        const member = message.mentions.members.first();
        const reason = args.slice(1).join(" ");

        if (!member) throw new MissingArg("member");
        if (!message.member.permissions.has("BAN_MEMBERS")) throw new MissingPerm();

        const banEmbed = new Discord.MessageEmbed()
            .setTitle(`:hammer: Banned ${member.user.tag}`);

        await member.ban({ reason: reason })
            .then(() => message.channel.send({embeds: [banEmbed]}))
            .catch(() => message.channel.send("I need permission to ban members!"));
    },
}