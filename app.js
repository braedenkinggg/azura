const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');

const { botToken, prefix } = require('./config/config.json');

const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.DIRECT_MESSAGES, 
    Intents.FLAGS.GUILD_MEMBERS, 
    Intents.FLAGS.GUILD_PRESENCES
] });

client.commands = new Collection();
client.prefix = prefix;

client.on('ready', () => {
    console.log(`Logged in as: ${client.user.tag}`);
    client.user.setActivity('.help', { type: 'PLAYING' });
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
};

client.on('guildMemberAdd', async member => member.guild.systemChannel.send(`Welcome ${member}!`));
client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (commandName.length === 0) return;

    const command = client.commands.get(commandName);

    if (!command) return;
    
    try {
        await command.execute(message, args);
    } catch(err) {
        message.channel.send('There was an error! Please try again later...');
        console.log(err);
    };
});

client.login(botToken);