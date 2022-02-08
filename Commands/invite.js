const { CommandInteraction, Client } = require("discord.js");
const jsh = require("discordjsh");
const { GenerateInviteURL } = require("../Config/config");

module.exports = {
    data: new jsh.commandBuilder()
    .setName("invite")
    .setDescription(`Generates an InviteURL for the bot.`),
    /**
     * 
     * @param {CommandInteraction} int 
     * @param {Client} client 
     */
    async execute(int, client){
        await int.reply({
            content: `Invite me: [(click here)](${GenerateInviteURL(client)})`,
            ephemeral: true
        });
    }
}