require("dotenv").config();
const { ranks } = require("../../config.json");
const cleanUpRoles = require("../utils/cleanUpRoles.js");
const assignRole = require("./role/CheckAndAssign.js");

module.exports = async (client) => {
  let apiUrl = process.env.API_URL;
  const idClan = process.env.CLAN_ID;

  fetch(apiUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("API request failed");
      }
    })
    .then(async (data) => {
      let members = data.data[idClan].members;

      members.forEach(async (element) => {
        let roleName = "Recruit";
        Object.keys(ranks).forEach((day) => {
          if (
            parseInt(
              Math.floor(
                (Math.floor(Date.now() / 1000) - element.joined_at) / 86400
              )
            ) -
              parseInt(day) >
            0
          )
            roleName = ranks[day];
        });
        if (roleName != "Recruit")
          await assignRole(client, {
            accountName: element.account_name,
            roleName: roleName,
            daysInClan: Math.floor(
              (Math.floor(Date.now() / 1000) - element.joined_at) / 86400
            ).toString(),
          });
      });
    });
};
