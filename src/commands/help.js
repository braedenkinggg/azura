const discord = require("discord.js");

module.exports = {
    name: "help",
    description: "Help command",

    async execute(message, args) {
        const helpMenu = new discord.MessageEmbed()

        switch(args[0]) {
            case "mod":
                helpMenu
                    .setTitle("Moderation")
                    .addField(name="`~ban [memeber] (reason)`", value="Bans a member")
                    .addField(name="`~kick [member] (reason)`", value="Kicks a member");

                break;
            case "utils":
                helpMenu
                    .setTitle("Utilities")
                    .addField(name="`~ping`", value="Sends the bot's latency")
                    .addField(name="`~serverinfo`", value="Sends the current servers information");
    
                break;

            case "fun":
                helpMenu
                    .setTitle("Fun")
                    .addField(name="`~garfield`", value="Sends a random garfield comic")
                    .addField(name="`~goodbot`", value="Tells Azura what a good bot she is");

                break;
            default:
                helpMenu
                    .setTitle("Azura Help")
                    .setDescription("Help has arrived!")
                    .addField(name="Moderation", value="`~help mod`", inline=true)
                    .addField(name="Utilities", value="`~help utils`", inline=true)
                    .addField(name="Fun", value="`~help fun`", inline=true);
        }

        await message.channel.send({embeds: [helpMenu]});
    }
}