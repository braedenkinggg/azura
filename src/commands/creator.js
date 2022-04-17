module.exports = {
    name: "creator",
    description: "Sends information regarding the creator of Azura",

    async execute(message) {
        message.channel.send("I was created by Braeden King with Discord.JS under the GPL 3.0 License");
    }
}