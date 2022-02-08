const Embed = require("../Util/Embed");
const { Emojis } = require("../Util/EmojiManager");

class ImageManager {
    constructor(url){
        this.ImageURL = url;
    }

    generateEmbed(){
        return new Embed()
        .setTitle(`${Emojis.grogu.show} Here's a Grogu!`)
        .setImage(this.ImageURL);
    }

    toURL(){
        return this.ImageURL;
    }
}

const AllImages = require("./Images.json");

class ImagesManager {
    constructor(type){
        this.Type = type;

        this.RawImages = AllImages;

        this.Images = [];

        for(const Image of this.RawImages[type]){
            this.Images.push(new ImageManager(Image, Types[type]));
        }
    }

    random(){
        const RandomImage = this.Images[Math.round(Math.random() * this.Images.length-1)];

        return RandomImage;
    }

    first(){
        return this.Images[0];
    }
    
    last(){
        return this.Images[this.Images.length];
    }
}

const Types = module.exports.Types = {
    "ART": "ART",
    "IMAGE": "IMAGE"
};

module.exports.Manager = ImagesManager;