module.exports = {
    name: "coinflip",
    description: "Flips a coin",
    execute(message) {
        const outcomes = ["Heads", "Tails"];
        message.channel.send(`:coin: ${outcomes[Math.floor(Math.random() * outcomes.length)]}`);
    },
};