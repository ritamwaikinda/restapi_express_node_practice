const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () =>
	console.log(`we're up and running on http://localhost:${PORT}`)
);

app.get("/homepage", (req, res) => {
	res.status(200).send({
		pagename: "testing api",
		message: "more in development 😎",
	});
});

app.post("/homepage/signup/:username", (req, res) => {
	const { username } = req.params;
	const { name } = req.body;

	if (!name) {
		res.status(412).send({ message: "Please enter your name" });
	}

	res.status(200).send({
		message: `Hi ${name}! Your new username is ${username}. To change this, please go to account settings.`,
	});
});
