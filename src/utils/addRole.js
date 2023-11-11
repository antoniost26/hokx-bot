const { Guild, GuildMember } = require("discord.js");
const log = require("./log");

/**
 *
 * @param {Guild} guild
 * @param {GuildMember} member
 * @param {string} roleId
 */
module.exports = async (guild, member, roleId) => {
  let roleToAdd = await guild.roles.fetch(roleId);
  if (member == undefined) return;
  await member.roles.add(roleToAdd);
  log(guild, "add", member.id, roleToAdd.name);
};
