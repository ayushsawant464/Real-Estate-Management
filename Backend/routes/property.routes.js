const express = require("express");

const { createProperty, deleteProperty, updateProperty, getProperty, getProperties } = require("../controllers/property.controller.js");
const verifyToken = require("../middleware/AuthMiddleware.js");

const router = express.Router();

router.use(verifyToken)
router.post("/create", createProperty); //used
router.delete("/delete/:id", deleteProperty);
router.post("/update/:id" , updateProperty);
router.get("/get/:id", getProperty); //used
router.get("/get", getProperties);

module.exports = router;
