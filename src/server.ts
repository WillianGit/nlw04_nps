const express = require('express');
const app = new express();
const port = 8080;

app.get('/', (req, res) => {
	res.json({"message": "Hello World!"});
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});