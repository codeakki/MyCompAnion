const functions = require("firebase-functions");

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin: true }));
// Routes
app.get("/", (req, res) => {
    return res.status(200).send("server running ok");
});
// Get study routes
const study = require("./routes/study");
app.use("/study", study);
exports.app = functions.https.onRequest(app);