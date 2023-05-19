import { WebhookClient } from "discord.js";
import Router from "next/router"; 

export default function handler(req, res) {
	const { name, phone, email, subject, message} = req.body;

	let webhook = new WebhookClient({
		id: process.env.WEBHOOK_ID,
		token: process.env.WEBHOOK_TOKEN
	});

	let messages = [];
	if (message.length > 1028) {
		let total = message.length / 1028;
		let start = 0;
		let end = 1028;
		for (let i = 0; i < total; i++) {
			messages.push(message.slice(start, end));
			start = end;
			end = end + 1028;
		};
	} else {
		messages.push(message);
	}

	const embed = {
		title: "New Contact Form Submission",
		fields:[
			{
				name: "Name",
				value: name,
				inline: false
			},
			{
				name: "Phone Number",
				value: phone,
			},
			{
				name: "Email",
				value: email,
				inline: false
			},
			{
				name: "Subject",
				value: subject,
				inline: false
			},
		]
	}

	messages.forEach((message, index) => {
		embed.fields.push({
			name: `Message (Part ${index + 1} of ${messages.length})`,
			value: message,
			inline: false
		});
	});

	try {
		webhook.send({
			content: "@here",
			embeds: [embed],
			allowedMentions: {
				parse: ["everyone", "roles", "users"]
			}
		}).catch((err) => {
			console.log(err);
		});
		return res.status(200).json({ success: true });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ success: false, error: err });
	}
};