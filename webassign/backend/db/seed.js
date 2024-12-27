const mongoose = require("mongoose");
const University = require(".../models/University");

mongoose.connect("mongodb://localhost:27017/uniFilterDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const universities = [
  {
    name: "COMSATS University Islamabad",
    city: "Islamabad",
    merit: 82,
    courses: ["Computer Science", "Engineering", "Arts", "Management Sciences"],
    officialSite: "https://www.comsats.edu.pk",
  },
  {
    name: "LUMS",
    city: "Lahore",
    merit: 92,
    courses: ["Business", "Law", "Computer Science"],
    officialSite: "https://www.lums.edu.pk",
  },
  {
    name: "NUST",
    city: "Islamabad",
    merit: 85,
    courses: ["Engineering", "Computer Science", "Management Sciences"],
    officialSite: "https://www.nust.edu.pk",
  },
  {
    name: "FAST",
    city: "Karachi",
    merit: 88,
    courses: ["Computer Science", "Engineering"],
    officialSite: "https://www.nu.edu.pk",
  },
  {
    name: "University of Punjab",
    city: "Lahore",
    merit: 84,
    courses: ["Law", "Arts", "Engineering", "Business"],
    officialSite: "http://pu.edu.pk"
},
{
    name: "IBA Karachi",
    city: "Karachi",
    merit: 89,
    courses: ["Business", "Computer Science", "Economics"],
    officialSite: "https://www.iba.edu.pk"
},
{
    name: "University of Karachi",
    city: "Karachi",
    merit: 78,
    courses: ["Arts", "Science", "Law"],
    officialSite: "https://www.uok.edu.pk"
},
{
    name: "GIKI",
    city: "Topi",
    merit: 86,
    courses: ["Engineering", "Computer Science"],
    officialSite: "https://www.giki.edu.pk"
},
{
    name: "Aga Khan University",
    city: "Karachi",
    merit: 92,
    courses: ["Medical", "Nursing"],
    officialSite: "https://www.aku.edu"
},
{
    name: "FAST NUCES",
    city: "Lahore",
    merit: 88,
    courses: ["Computer Science", "Engineering"],
    officialSite: "https://www.nu.edu.pk"
},
{
    name: "UET Lahore",
    city: "Lahore",
    merit: 83,
    courses: ["Engineering", "Architecture"],
    officialSite: "https://www.uet.edu.pk"
},
{
    name: "Quaid-i-Azam University",
    city: "Islamabad",
    merit: 94,
    courses: ["Science", "Business", "Law"],
    officialSite: "http://www.qau.edu.pk"
},
{
    name: "Air University",
    city: "Islamabad",
    merit: 88,
    courses: ["Engineering", "Computer Science", "Management"],
    officialSite: "https://www.au.edu.pk"
},
{
    name: "National Textile University",
    city: "Faisalabad",
    merit: 75,
    courses: ["Textile Engineering", "Business"],
    officialSite: "https://www.ntu.edu.pk"
},
{
    name: "University of Peshawar",
    city: "Peshawar",
    merit: 77,
    courses: ["Arts", "Law", "Sciences"],
    officialSite: "http://www.uop.edu.pk"
},
{
    name: "University of Sindh",
    city: "Jamshoro",
    merit: 67,
    courses: ["Business", "Arts", "Education"],
    officialSite: "https://usindh.edu.pk"
},
{
    name: "Bahria University",
    city: "Karachi",
    merit: 66,
    courses: ["Computer Science", "Engineering", "Business"],
    officialSite: "https://www.bahria.edu.pk"
},
{
    name: "University of Agriculture Faisalabad",
    city: "Faisalabad",
    merit: 74,
    courses: ["Agriculture", "Food Sciences"],
    officialSite: "http://www.uaf.edu.pk"
},
{
    name: "PMAS Arid Agriculture University",
    city: "Rawalpindi",
    merit: 77,
    courses: ["Agriculture", "Management"],
    officialSite: "https://www.uaar.edu.pk"
},
{
    name: "SZABIST",
    city: "Karachi",
    merit: 69,
    courses: ["Business", "Media Studies", "Computer Science"],
    officialSite: "https://www.szabist.edu.pk"
},
{
    name: "Abdul Wali Khan University",
    city: "Mardan",
    merit: 68,
    courses: ["Education", "Arts"],
    officialSite: "http://www.awkum.edu.pk"
}

];

const seedDatabase = async () => {
  try {
    await University.deleteMany(); // Clear existing data
    await University.insertMany(universities); // Insert new data
    console.log("Database seeded!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close(); // Close connection
  }
};

seedDatabase();
