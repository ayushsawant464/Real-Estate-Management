const express = require("express");

const { createProperty, deleteProperty, updateProperty, getProperty, getPropertiesA } = require("../controllers/property.controller.js");
const verifyToken = require("../middleware/AuthMiddleware.js");

const router = express.Router();

router.use(verifyToken)
router.post("/create", createProperty); //used
router.delete("/delete/:id", deleteProperty); //used
router.post("/update/:id" , updateProperty); //used
router.get("/get/:id", getProperty); //used
router.get("/get", getPropertiesA); //used

module.exports = router;

