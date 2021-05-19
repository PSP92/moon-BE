///////////////////////////
// Environmental Variables
///////////////////////////
// require("dotenv").config();

/////////////////////////////////////
// MONGOOSE CONNECTION
/////////////////////////////////////
// const mongoose = require("mongoose");
// const  MONGODBURI  = process.env.MONGODBURI;
// console.log(MONGODBURI)
// const config = { useUnifiedTopology: true, useNewUrlParser: true };


// mongoose.connect(MONGODBURI, config);
// const DB = mongoose.connection;
// DB.on("open", () => console.log("You are connected to Mongo"))
//   .on("close", () => console.log("You are disconnected to Mongo"))
//   .on("error", (err) => console.log(err));

// module.exports = mongoose;




// LOAD ENVIRONMENTAL VARIABLES
require("dotenv").config();

// IMPORT DEPENDENCIES
const mongoose = require("mongoose");

// PULL OUT ENVIRONMENTAL VARIABLE FROM PROCESS.ENV OBJECT
const MONGODB_URI = process.env.MONGODB_URI;

// Optional Configuration Object to Remove Mongo Deprecation Warnings
const config = { useUnifiedTopology: true, useNewUrlParser: true };

//Establish Connection to Database
mongoose.connect(MONGODB_URI, config);

// Create Database Connection message for Open, Close, Error
mongoose.connection
  .on("open", () => console.log("MONGO CONNECTION IS OPEN"))
  .on("close", () => console.log("MONGO CONNECTION IS CLOSED"))
  .on("error", (error) =>
    console.log("MONGO CONNECTION ERROR \n***************\n", error)
  );

// EXPORT MONGOOSE CONNECTION TO USE IN SERVER.JS
module.exports = mongoose;