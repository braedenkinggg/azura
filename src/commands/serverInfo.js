const Discord = require("discord.js");

module.exports = {
    name: "serverinfo",
    description: "Sends server information",

    async execute (message) {
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const roles = message.guild.roles.cache;

        const serverInfoEmbed = new Discord.MessageEmbed()
            .setTitle(`Server information for: ${message.guild.name}`)
            .setThumbnail(url=message.guild.iconURL())
            .addField(
                name="Members:",
                value=`Total: ${members.size} 
                Humans: ${members.filter(member => !member.user.bot).size} 
                Bots: ${members.filter(member => member.user.bot).size}`,
                inline=true
            )
            .addField(
                name="Channels:",
                value=`Total: ${channels.size}
                :hash:: ${channels.filter(channel => channel.type === "GUILD_TEXT").size}
                :loud_sound:: ${channels.filter(channel => channel.type === "GUILD_VOICE").size}`,
                inline=true
            )
            .addField(
                name="Roles:",
                value=roles.map(role => role).join(', ').toString()
            );

        await message.channel.send({embeds: [serverInfoEmbed]});
    }
}