const functions = require("firebase-functions");

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin: true }));
// Routes
app.get("/", (req, res) => {
    return res.status(200).send("server running ok");
});
// Get student routes
const student = require("./routes/student");  
app.use("/student", student);
// Get study routes
const study = require("./routes/study");
app.use("/study", study);
// Get assignment routes
const assignment = require("./routes/assignment");
app.use("/assignment", assignment);
exports.app = functions.https.onRequest(app);