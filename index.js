const app = require("express")();
const PORT = 8080;

app.listen(PORT, () =>
	console.log(`we're up and running on http://localhost:${PORT}`)
);

app.get("/homepage", (req, res) => {
	res.status(200).send({
		pagename: "testing api",
		message: "more in development 😎",
	});
});
