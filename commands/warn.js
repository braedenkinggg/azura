module.exports = {
    name: "warn",
    description: "warns a user",
    execute(message) {
        const user = message.mentions.users.first();

        if (!user) {
            return message.channel.send("```Invalid command usage, try using it like:\n\n.warn <member> [reason]```");
        };

        const member = message.guild.members.cache.get(user.id);

        if (!member) {
            return message.channel.send("That user is not in this guild!");
        };

        if (member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send(":x: You can't warn moderators!");
        };

        message.channel.send(`:warning: **Warned:** ${user.tag}`);
    },
};