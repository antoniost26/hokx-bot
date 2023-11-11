require("dotenv").config();
const { Guild, inlineCode } = require("discord.js");

/**
 *
 * @param {Guild} guild
 * @param {string} action
 * @param {string} memberName
 * @param {string} roleName
 */
module.exports = async (guild, action, memberId, roleName) => {
  guild.channels
    .fetch(process.env.LOGGING_CHANNEL_ID)
    .then((channel) => {
      channel.send({
        embeds: [
          {
            color: action == "add" ? 0x008000 : 0xff0000,
            title: ``,
            fields: [
              {
                name: ``,
                value: "Updated roles for <@" + memberId + ">",
              },
              {
                name: ``,
                value: `${action.charAt(0).toUpperCase() + action.slice(1)}${
                  action == "remove" ? "d role" : "ed role"
                } ${inlineCode(roleName)}`,
              },
            ],
          },
        ],
      });
    })
    .catch(console.log);
};
