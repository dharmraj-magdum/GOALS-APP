const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const colors = require("colors");
const path = require("path");
//
const port = process.env.PORT || 5000;
const { connectDB } = require("./config/connectDB");
const { errorHandler } = require("./middleware/errorHandler");
///
const app = express();
//
connectDB();
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(require("cors"));
//
// app.get("/", function (req, res) {
// 	res.send("hello world");
// });
app.use("/api/goals", require("./routes/goalRoutes"));

app.use("/api/user", require("./routes/userRoutes"));
///////

// Serve frontend
if (process.env.MODE === "production") {
	app.use(express.static(path.join(__dirname, "../frontend/build")));

	app.get("*", (req, res) =>
		res.sendFile(
			path.resolve(__dirname, "../", "frontend", "build", "index.html")
		)
	);
} else {
	//else condn not good for normal people
	app.get("/", (req, res) => res.send("Please set to production"));
}
////
app.use(errorHandler);
app.listen(port);
console.log(`server run successfully`.cyan);

// var express = require("express");
// var app = express();

// app.get("/", function (req, res) {
// 	res.send("hello world");
// });

// app.listen(5000);
