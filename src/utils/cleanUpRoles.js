const { ranksArray } = require("../../config.json");
const removeRole = require("./removeRole");

function find(name, members) {
  let found = false;
  members.forEach((member) => {
    if (
      name.includes(member.account_name) &&
      parseInt(
        Math.floor((Math.floor(Date.now() / 1000) - member.joined_at) / 86400)
      ) -
        parseInt(100) >
        0
    ) {
      found = true;
    }
  });
  return found;
}

/**
 *
 * @param {Array} clanMembers
 */
module.exports = async (client, clanMembers) => {
  let guild = await client.guilds.fetch(process.env.GUILD_ID);
  guild.members.fetch().then((members) => {
    members.forEach((member) => {
      if (!find(member.displayName, clanMembers)) {
        ranksArray.forEach((roleId) => {
          removeRole(guild, member, roleId);
        });
      }
    });
  });
};
