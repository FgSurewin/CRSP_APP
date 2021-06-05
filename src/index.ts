import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import imageRoute from "./routes/image";
import mongoose from "mongoose";
import cors from "cors";
import nunjucks from "nunjucks";
import { logger, loggerMiddleware } from "./config/logger";
import { config } from "./database";

(async function () {
	const app = express();
	const PORT = process.env.PORT || 8080;

	// Read static files
	app.use(express.static("./src/public"));

	// Template engine
	nunjucks.configure("src/views", {
		autoescape: true,
		express: app,
	});

	// Initialize Middleware
	dotenv.config();
	app.use(cors());
	app.use(loggerMiddleware);
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	// Initialize Routes
	app.use("/api/image", imageRoute);

	// MongoDB Connection
	try {
		await mongoose.connect(config.link, config.options);
		logger("DATABASE", "Connect to the MongoDB successfully!");
	} catch (error) {
		console.log(new Error(error));
	}

	// Render HTML
	app.use(async (req, res, next) => {
		await next();
		res.render("index.html");
	});

	// Handle Error
	// app.use(async (req, res, next) => {
	// 	const error = new Error("NOT FOUND");

	// 	return res.status(404).json({
	// 		code: 404,
	// 		message: error.message,
	// 	});
	// });

	app.listen(PORT, () =>
		logger("SERVER", `Server is running on http://localhost:${PORT}`)
	);
})();
