module.exports = {
    name: "ban",
    description: "Ban's a user",
    execute(message, args) {
        const user = message.mentions.users.first();
        const banReason = args.slice(1).join(" ");

        if (!user) {
            return message.channel.send(```Invalid command usage, try using it like this instead:\n\n.ban <member> [reason]```);
        };

        const member = message.guild.members.cache.get(user.id);

        if (!member) {
            return message.channel.send("That user is not in this guild!");
        };

        if (!message.member.permissions.has("BAN_MEMBERS")) {
            return message.channel.send(":x: You don't have permission to ban users!");
        };

        if (member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send(":x: You can't ban moderators!");
        };
        
        member.ban({ reason: banReason }).then(() => {
            message.channel.send(`:hammer: **Banned:** ${user.tag}`);
        }), err => {
            message.channel.send("I was unable to ban the user at this time");
            console.error(err);
        };
    },
};