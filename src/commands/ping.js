module.exports = {
    name: "ping",
    description: "Replies with bot's ping",

    async execute(message) {
        await message.channel.send(`:ping_pong: **Ping:** ${message.client.ws.ping}ms`);
    }
}