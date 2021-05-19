const Moon = require("../models/moon");
const { Router } = require("express");
const router = Router();

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

// EXPORT ROUTER
module.exports = router;