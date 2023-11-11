const { Client, Message } = require("discord.js");
require("dotenv").config();
const processPrivate = require("../../process/processPrivate");

/**
 *
 * @param {Client} client
 * @param {Message} message
 */
module.exports = async (client, message) => {
  if (message.author.id != "535898109184573451") return;
  if (!message.content.startsWith("h-private")) return;
  await processPrivate(client);
};
