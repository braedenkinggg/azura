module.exports = {
    name: "help",
    description: "Help command",
    execute(message) {
        message.author.send("Check out my GitHub repository for information about me, my commands and more\nhttps://github.com/braedenkinggg/VenusBot");
        message.react("✅");
    },
};