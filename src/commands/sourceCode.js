module.exports = {
    name: "sourcecode",
    description: "Sends a link to the azura\'s source code",

    async execute(message) {
        message.channel.send("Here's my source code! https://github.com/braedenkinggg/azura");
    }
}