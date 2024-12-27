const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  merit: { type: Number, required: true },
  courses: [{ type: String, required: true }],
  officialSite: { type: String, required: true },
});

module.exports = mongoose.model("University", universitySchema);
