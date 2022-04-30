const mongoose = require("mongoose");

const mongoURI =
  process.env.NODE_ENV === "production"
    ? process.env.DB_URL
    : process.env.DEV_DB_URL
   
    

mongoose
  .connect(mongoURI)
  .then((instance) =>
    console.log(`Successfully connected to ${instance.connections[0].name}`)
  )
  .catch((err) => console.log(err));

module.exports = mongoose;
