const processPrivate = require("../../process/processPrivate");
const cleanUpRoles = require("../../utils/cleanUpRoles");
require("dotenv").config();
var interval = 1000 * 60 * 60 * 24;

module.exports = (client) => {
  setInterval(async () => {
    let date = new Date();
    if (date.getDate() == "1") {
      await processPrivate(client);
    }
  }, interval);
};
