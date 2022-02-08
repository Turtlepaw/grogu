const { Client } = require("discord.js");
const fs = require("fs");
const All = [
    "940073550377795765"
];

/**
 * @param {Client} client 
 */
module.exports = async (client) => {
    let file = {};
    client.emojis.cache.forEach(e => {
        if (All.includes(e.guild.id)){
            file[e.name] = {
                name: e.name,
                url: e.url,
                id: e.id,
                show: e.toString()
            };
        }
    });

    fs.writeFileSync(`./emojis.json`, JSON.stringify(file));
};

module.exports.Emojis = require("../emojis.json");