require("dotenv").config({ path: "../.env" }); 
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbURL = process.env.ATLASDB_URL;



main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbURL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({ 
    ...obj,
     owner: "686d14f5b78430255ba14994"
     }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
