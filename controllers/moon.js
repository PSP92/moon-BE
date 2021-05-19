const Moon = require("../models/moon");
const { Router } = require("express");
const router = Router();
const seedData = require("../db/seedData.json")
//index route
router.get("/", async (req, res) => {
  res.json(await Moon.find({}));
});


//create route
router.post("/", async (req, res) => {
  res.json(await Moon.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await Moon.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Moon.findByIdAndRemove(req.params.id));
});

router.get("/seed", async (req, res) => {
    // try block for catching errors
    try {
      // remove all places from database
      await Moon.remove({});
      // add the seed data to the database
      await Moon.create(placeSeedData);
      // get full list of places to confirm seeding worked
      const moons = await Moon.find({});
      // return full list of places as JSON
      res.json(moons);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
// EXPORT ROUTER
module.exports = router;