"use strict";

require("dotenv").config();
const { Client, Intents } = require("discord.js");
const { MessageEmbed } = require("discord.js");

let { michiWisdomQuoe, michiWisdomPhoto } = require("./bot-michi");
let { lomitoWisdomQuoe, lomitoWisdomPhoto } = require("./bot-lomito");
let { ajolotitoWisdomQuoe, ajolotitoWisdomPhoto } = require("./bot-ajolotito");

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
		case "sabio michi":
			quoe = "" + await michiWisdomQuoe();
			photo = "" + await michiWisdomPhoto();

			const michiEmbed = new MessageEmbed()
			.setTitle(quoe)
			.setImage(photo)
			.setColor("#44086A")
			.setFooter("— 🐈");
			message.reply({ embeds: [michiEmbed] });
		break;

		// LLAMANDO AL LOMITO //
		case "sabio lomito":
			quoe = "" + await lomitoWisdomQuoe();
			photo = "" + await lomitoWisdomPhoto();

			const lomitoEmbed = new MessageEmbed()
			.setTitle(quoe)
			.setImage(photo)
			.setColor("#5C309E")
			.setFooter("— 🐕");
			message.reply({ embeds: [lomitoEmbed] });
		break;

		// LLAMANDO AL AJOLOTITO //
		case "sabio ajolotito":
			quoe = "" + await ajolotitoWisdomQuoe();
			photo = "" + await ajolotitoWisdomPhoto();

			const ajolotitoEmbed = new MessageEmbed()
			.setTitle(quoe)
			.setImage(photo)
			.setColor("#B6086C")
			.setFooter("— 💜");
			message.reply({ embeds: [ajolotitoEmbed] });
		break;

		// LLAMANDO DE AYUDA //
		case "animalitos sabios": case "help":
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