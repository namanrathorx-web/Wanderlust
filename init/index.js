const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}


const initDB = async () => {
  // Normalize seed data so `image` is always a string URL (and include `owner`)
  const seedData = initData.data.map((item) => {
    const normalized = { ...item };
    if (typeof normalized.image === "object" && normalized.image !== null) {
      normalized.image = normalized.image.url || "";
    }
    // assign a default owner for seeded records
    normalized.owner = "6943b6068a0e8b828cc7a84b";
    return normalized;
  });

  await Listing.deleteMany({});
  await Listing.insertMany(seedData);
  console.log("data was initialized");
};

initDB();