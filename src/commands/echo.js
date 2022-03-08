module.exports = {
    name: "echo",
    description: "Echo's the users message back to them",

    async execute (message, args) {
        if (!args.length) return;
        await message.channel.send(args.join(" "));
    }
}