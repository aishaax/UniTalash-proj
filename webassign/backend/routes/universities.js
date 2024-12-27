const express = require("express");
const router = express.Router();
const University = require(".../models/University");

// Endpoint to filter universities
router.get("/filter", async (req, res) => {
  const { city, merit, course } = req.query;

  const query = {};
  if (city) query.city = city;
  if (merit) query.merit = { $lte: parseInt(merit) }; // Merit less than or equal to
  if (course) query.courses = course;

  try {
    const results = await University.find(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
