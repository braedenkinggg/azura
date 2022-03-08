const Discord = require("discord.js");

const { InvalidUsage } = require("../errors/CmdErrors");

module.exports = {
    name: "userinfo",
    description: "Gets information about the mentioned user",

    async execute(message) {
        const member = message.mentions.members.first();
        if (!member) throw new InvalidUsage("member");

        const userInfoEmbed = new Discord.MessageEmbed()
            .setTitle(`Information For: @${member.user.tag}`)
            .setThumbnail(member.user.avatarURL())
            .addField(name="ID:", value=`\`${member.id}\``)
            .addField(name="Tag:", value=`@${member.user.tag}`)
            

        await message.channel.send({embeds: [userInfoEmbed]});
    }
}