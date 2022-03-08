/*
    TODO:
    1. Finish the rest of the commands
    2. Refactor code
*/
require("dotenv").config();
const { Client, Collection, Intents, MessageEmbed }= require("discord.js");
const fs = require("fs");
const path = require("path");

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES, 
        Intents.FLAGS.DIRECT_MESSAGES, 
        Intents.FLAGS.GUILD_MEMBERS, 
        Intents.FLAGS.GUILD_PRESENCES
    ]
});

client.commands = new Collection();
client.token = process.env.BOT_TOKEN;
client.prefix = "~";

const commandFiles = fs.readdirSync(path.resolve(__dirname, "commands")).filter((file) => file.endsWith(".js"));

for (const commandFile of commandFiles) {
    const command = require(`./commands/${commandFile}`);
    client.commands.set(command.name, command);
}

client.on("ready", async () => {
    console.log(`
        _______ ______ _     _  ______ _______
        |_____|  ____/ |     | |_____/ |_____|
        |     | /_____ |_____| |    \\_ |     |

                    By: Braeden King
    `);
});

client.on("guildMemberAdd", async (member) => {
    const systemChannel = member.guild.systemChannel;
    await systemChannel.send(`Welcome @${member.displayName}`);
});

client.on("messageCreate", async (message) => {
    const args = message.content.slice(client.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    if (!command) return;
    if (message.author.bot) return;
    if (commandName.length === 0) return;
    if (!message.content.startsWith(client.prefix)) return;
    
    try {
        await command.execute(message, args);
    } catch(err) {
        const errorEmbed = new MessageEmbed()
            .setTitle(err.name)
            .setDescription(err.message)
            .setColor(0xff0000);
        
        message.channel.send({embeds: [errorEmbed]});
    }
});

client.login(client.token);