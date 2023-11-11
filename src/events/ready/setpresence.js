const { ActivityType } = require("discord.js");

module.exports = async (client) => {
  client.user.setPresence({
    activities: [
      { name: "Drifting that EBR 105-", ActivityType: ActivityType.Watching },
    ],
    status: "dnd",
  });
};
