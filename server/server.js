const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");

const bodyParser = requre('body-parser');
app.use(bodyParser.json());
app.post('/questionnaire', (req, res) => {
  const formData = req.body;
  console.log('This what we got', formData);
  res.sendStatus(200);
});


app.listen(port, async () => {
  // perform a database connection when server starts
  await dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});