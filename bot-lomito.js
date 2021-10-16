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
    let lomitoPhotoJSON;
    let lomitoPhoto;

    /// Regresa la foto de un lomito aleatorio; [String  url].
    do
    {
        lomitoPhotoJSON = await getAPIjson("https://random.dog/woof.json");
        lomitoPhoto = lomitoPhotoJSON.url;
    }
    // Valida que la API no regrese un .mp4 //
    while (lomitoPhoto.endsWith(".mp4"));

    return lomitoPhoto;
}

module.exports = { lomitoWisdomQuoe, lomitoWisdomPhoto };