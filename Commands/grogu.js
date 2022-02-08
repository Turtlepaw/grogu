const { CommandInteraction, Client } = require("discord.js");
const jsh = require("discordjsh");
const { GenerateInviteURL } = require("../Config/config");
const GroguImages = require("../Grogu_Images/Images");

module.exports = {
    devOnly: true,
    data: new jsh.commandBuilder()
    .setName("grogu")
    .setDescription(`Gets an Grogu image!`)
    .addStringOption(o => {
        return o.setName("type")
        .addChoices([
            ["Art", GroguImages.Types.ART],
            ["Image (Defualt)", GroguImages.Types.IMAGE]
        ])
        .setDescription(`What type of image?`);
    })
    .addBooleanOption(o => o.setName("ephemeral").setDescription(`Should the message be hidden to only you?`)),
    /**
     * 
     * @param {CommandInteraction} int 
     * @param {Client} client 
     */
    async execute(int, client){
        const Type = int.options.getString("type") || GroguImages.Types.IMAGE;
        const ephemeral = int.options.getBoolean("ephemeral") || false;

        const ImageManager = new GroguImages.Manager(GroguImages.Types[Type]);
        const Image = ImageManager.random();

        await int.reply({
            embeds: Image.generateEmbed().build(),
            ephemeral
        });
    }
}