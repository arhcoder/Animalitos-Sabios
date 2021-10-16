let { getAPIjson } = require("./bot-API-get");

// Regresa el mensaje de un lomito sabio //
async function lomitoWisdomQuoe()
{
    /// Regresa una frase inspiracional aleatoria; [String quoe].
    let lomitoQuoeJSON = await getAPIjson("https://api.quotable.io/random?tags=inspirational");
    let lomitoQuoe = "\"**" + lomitoQuoeJSON.content + "\"**";
    
    return lomitoQuoe;
}

async function lomitoWisdomPhoto()
{
    /// Regresa la foto de un lomito aleatorio; [String  url].
    let lomitoPhotoJSON = await getAPIjson("https://random.dog/woof.json");
    let lomitoPhoto = lomitoPhotoJSON.url;

    return lomitoPhoto;
}

module.exports = { lomitoWisdomQuoe, lomitoWisdomPhoto };