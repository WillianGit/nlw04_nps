import "reflect-metadata";
import "./database";
import { router } from './routes';
const express = require('express');
const app = new express();
const port = 8080;

app.use(express.json());
app.use(router);

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});