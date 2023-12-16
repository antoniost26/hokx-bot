require("dotenv").config();
const { rankIds, ranksArray } = require("../../../config.json");
const { Client } = require("discord.js");
const assignRole = require("../../utils/addRole.js");
const removeRole = require("../../utils/removeRole.js");
const announcement = require("../../utils/announcement.js");
const log = require("../../utils/log.js");

/**
 *
 * @param {Client} client
 * @param {JSON} processingData
 */
module.exports = async (client, processingData) => {
  let guild = await client.guilds.fetch(process.env.GUILD_ID);
  await guild.members
    .fetch({ query: processingData["accountName"], limit: 1 })
    .then(async (member) => {
      // check and remove old role
      ranksArray
        .filter(
          (id) =>
            id != rankIds[processingData["roleName"]] &&
            id != rankIds["Private"]
        )
        .forEach(async (roleId) => {
          if (member.first()?.roles.cache.some((role) => role.id == roleId)) {
            await removeRole(guild, member.first(), roleId);
          }
        });
      // check and assign correct role
      if (
        !member
          .first()
          ?.roles.cache.some(
            (role) => role.id == rankIds[processingData["roleName"]]
          )
      ) {
        await assignRole(
          guild,
          member.first(),
          rankIds[processingData["roleName"]],
          processingData["accountName"]
        );
        await announcement(guild, {
          daysInClan: processingData["daysInClan"],
          roleId: rankIds[processingData["roleName"]],
          accountId: member.first()?.id,
        });
      }
      // check and assign private role
      if (
        !member
          .first()
          ?.roles.cache.some((role) => role.id == rankIds["Private"])
      ) {
        await assignRole(guild, member.first(), rankIds["Private"]);
      }
    })
    .catch((error) => log(guild, "error", null, null, error));
};
