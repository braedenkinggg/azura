module.exports = {
    name: "kick",
    description: "Kicks a user",
    execute(message, args) {
        const user = message.mentions.users.first();
        const kickReason = args.slice(1).join(" ");

        if (!user) {
            return message.channel.send("```Invalid command usage, try using it like:\n\n.kick <member> [reason]```");
        };

        const member = message.guild.members.cache.get(user.id);

        if (!member) {
            return message.channel.send("That user is not in this guild!");
        };

        if (!message.member.permissions.has("KICK_MEMBERS")) {
            return message.channel.send(":x: You don't have permission to kick users!");
        };

        if (member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send(":x: You can't kick a moderator");
        };

        member.kick({ reason: kickReason }).then(() => {
            message.channel.send(`:boot: **Kicked:** ${user.tag}`);
        }), (err) => {
            message.channel.send("I was unable to kick the user at this time");
            console.error(err);
        };
    },
};
