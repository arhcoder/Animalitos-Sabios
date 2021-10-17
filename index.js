"use strict";

require("dotenv").config();
const { Client, Intents } = require("discord.js");
const { MessageEmbed } = require("discord.js");

let { michiWisdomQuoe, michiWisdomPhoto } = require("./bot-michi");
let { lomitoWisdomQuoe, lomitoWisdomPhoto } = require("./bot-lomito");
let { ajolotitoWisdomQuoe, ajolotitoWisdomPhoto } = require("./bot-ajolotito");

// Traductor //
const translate = require("@iamtraction/google-translate");

console.log("Arrancando Animalitos Sabios...");

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN = process.env.TOKEN;

// When the client is ready, run this code (only once).
client.once("ready", () =>
{
	console.log("Animalitos Sabios listos!");
	console.log("🐈");

	client.user.setActivity("🍀 Meditando...");
});

// Detecta un mensaje de Discord y reacciona.
async function createMessage(message)
{
	// Variables //
	let quoe;
	let photo;

	// LISTA DE COMANDOS //
	switch (message.content.toLowerCase())
	{
		// LLAMANDO AL GATITO //
		case "sabio michi": case "sabio michito": case "sabio gato": case "sabio gatito":
			quoe = "" + await michiWisdomQuoe();
			photo = "" + await michiWisdomPhoto();

			// Traduce la frase //
			const citagGatito = await translate(quoe, {to: "es"});

			const michiEmbed = new MessageEmbed()
			.setTitle(citagGatito.text)
			.setImage(photo)
			.setColor("#44086A")
			.setFooter("— 🐈");
			message.reply({ embeds: [michiEmbed] });
		break;

		// LLAMANDO AL LOMITO //
		case "sabio lomito": case "sabio perro": case "sabio perrito":
			quoe = "" + await lomitoWisdomQuoe();
			photo = "" + await lomitoWisdomPhoto();

			// Traduce la frase //
			const citagLomito = await translate(quoe, {to: "es"});

			const lomitoEmbed = new MessageEmbed()
			.setTitle(citagLomito.text)
			.setImage(photo)
			.setColor("#5C309E")
			.setFooter("— 🐕");
			message.reply({ embeds: [lomitoEmbed] });
		break;

		// LLAMANDO AL AJOLOTITO //
		case "sabio ajolotito": case "sabio ajolote":
			quoe = "" + await ajolotitoWisdomQuoe();
			photo = "" + await ajolotitoWisdomPhoto();

			// Traduce la frase //
			const citaAjolotito = await translate(quoe, {to: "es"});

			const ajolotitoEmbed = new MessageEmbed()
			.setTitle(citaAjolotito.text)
			.setImage(photo)
			.setColor("#B6086C")
			.setFooter("— 💜");
			message.reply({ embeds: [ajolotitoEmbed] });
		break;

		// LLAMANDO DE AYUDA //
		case "animalitos sabios": case "@animalitos sabios":
			const helpEmbed = new MessageEmbed()
			.setTitle("**Comandos de Animalitos Sabios**")
			.setColor("#300458")
			.setThumbnail(client.user.displayAvatarURL())
			.setDescription("Escribe un comando para recibir sabiduría \nde un animalito sabio.")

			.addFields(
				{ name: "\u200B", value: "\u200B" },
				{ name: "🐱 :  sabio michi", value: "Escribe \"sabio michi\" \npara reflexión.", inline: true },
				{ name: "🐶 :  sabio lomito", value: "Escribe \"sabio lomito\" \npara inspiración.", inline: true },
				{ name: "\u200B", value: "\u200B" },
				{ name: "💖 :  sabio ajolotito", value: "Escribe \"sabio ajolotito\" \npara sabiduría.", inline: true },
				{ name: "❓ :  animalitos sabios", value: "Escribe \"animalitos sabios\" \npara ver lista de comandos.", inline: true },
				{ name: "\u200B", value: "\u200B" },
			)

			.setFooter("Hecho por @arhcoder 💜", "https://github.com/arhcoder.png");
			message.channel.send({ embeds: [helpEmbed] });
		break;
	
		default:
			// console.log("\nNo se detectó nungún comando...");
		break;
	}
}

// Login to Discord with your client's token.
client.login(TOKEN);

// Escucha activa de mensajes en el servidor de Discord.
client.on("messageCreate", createMessage);