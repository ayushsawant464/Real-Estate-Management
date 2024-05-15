const express = require("express");
const {  } = require("../utils/verifyUser.js");
const { createProperty, deleteProperty, updateProperty, getProperty, getProperties } = require("../controllers/property.controller.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from property routes");
});
router.post("/create", createProperty);
router.delete("/delete/:id", deleteProperty);
router.post("/update/:id" , updateProperty);
router.get("/get/:id", getProperty);
router.get("/get", getProperties);

module.exports = router;

