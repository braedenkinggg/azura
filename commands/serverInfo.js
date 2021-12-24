const { MessageEmbed, BaseGuildVoiceChannel } = require("discord.js");

module.exports = {
    name: "serverinfo",
    description: "Sends server information",
    execute(message) {
        const guild = message.guild;
        const serverInfo = new MessageEmbed()
            .setColor('#EED053')
            .setTitle (`Information for ${message.guild.name}`)
            .setThumbnail(guild.iconURL())
            .setFields (
                { 
                    name: "Members",
                    value: `Total: ${guild.memberCount}\n` +
                        `Humans: ${guild.members.cache.filter(member => !member.user.bot).size}\n` +
                        `Bots: ${guild.members.cache.filter(member => member.user.bot).size}`,
                    inline: true
                },
                { 
                    name: "Channels", 
                    value: `:hash:: ${guild.channels.cache.filter(c => c.type === "GUILD_TEXT").size}\n` +
                        `:loud_sound:: ${guild.channels.cache.filter(c => c.type === "GUILD_VOICE").size}`,
                    inline: true
                },
                {
                    name: "Info",
                    value: `Verification Level: ${guild.verificationLevel.toLowerCase()}\n` +
                        `[Icon Link](${guild.iconURL()})`,
                },
                {
                    name: "Roles",
                    value: guild.roles.cache.sort((a, b) => b.position - a.position).map(r => r).join(', ').toString()
                }
            )
            .setFooter(`ID: ${message.id}`);

        message.channel.send({ embeds: [ serverInfo ] });
    },
};