const { Schema, model } = require("mongoose");

//MOON SCHEMA
const moonSchema = new Schema(
  {
    img:String,
    name: String,
    sign: String,
    description: String,

  },
  { timestamps: true }
);

//DOG MODEL
const Moon = model("moon", moonSchema);

//EXPORT MODEL
module.exports = Moon;
