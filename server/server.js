const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json()); // Express already includes JSON parsing

// Require your routes file
app.use(bodyParser.json());

// get driver connection
const dbo = require("./db/conn");

// Handle POST request for /questionnaire
app.post('/questionnaire', (req, res) => {
  // Here, you can perform database operations or other processing with formData
  res.json({ success: true });
});

app.listen(port, async () => {
  // Perform a database connection when the server starts
  await dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
