const { Client, Message } = require("discord.js");
const cleanUpRoles = require("../../utils/cleanUpRoles");
require("dotenv").config();

/**
 *
 * @param {Client} client
 * @param {Message} message
 */
module.exports = async (client, message) => {
  if (message.author.id != "535898109184573451") return;
  if (!message.content.startsWith("h-cleanup")) return;
  fetch(process.env.API_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("API request failed");
      }
    })
    .then(async (data) => {
      let members = data.data[process.env.CLAN_ID].members;
      await cleanUpRoles(client, members);
    });
};
