const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");

recordRoutes.route("/questionnaire").post(async function (req, res) {
  let db_connect = dbo.getDb();
  let formData = req.body;

  // Perform backend processing with formData
  // You can add your logic to filter results based on the questionnaire data
  // For example, you might query the database with formData and return filtered results

  // Here, we'll just log the formData
  console.log("Questionnaire data:", formData);

  // Send a response to the client
  res.json({ success: true, message: "Questionnaire data received successfully" });
});

module.exports = recordRoutes;
