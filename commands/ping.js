module.exports = {
    name: "ping",
    description: "Replies with bot's ping",
    execute(message) {
        message.channel.send(`🏓 **Ping:** ${message.client.ws.ping}ms`);
    },
};