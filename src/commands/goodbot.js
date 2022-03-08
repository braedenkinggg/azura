const randChoice = require("../utils/randChoice");

module.exports = {
    name: "goodbot",
    description: "Tell's Azura what a good bot she is",

    async execute(message) {
        const replies = [
            ":D",
            "Thank you!",
            "No you're a good bot... wait a minute"
        ];

        await message.channel.send(randChoice(replies));
    }
}