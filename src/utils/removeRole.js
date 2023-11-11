const { Guild, GuildMember } = require("discord.js");
const log = require("./log");

/**
 *
 * @param {Guild} guild
 * @param {GuildMember} member
 * @param {string} roleId
 */
module.exports = async (guild, member, roleId) => {
  let roleToRemove = await guild.roles.fetch(roleId);
  if (!member.roles.cache.some((role) => role.id == roleToRemove.id)) return;
  if (member == undefined) return;
  await member.roles.remove(roleToRemove);
  log(guild, "remove", member.id, roleToRemove.name);
};
