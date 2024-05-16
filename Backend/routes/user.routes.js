const express=require('express');
const { test,updateUser, deleteUser, getUserListings, getUser,createUser, getPropertiesR,getPropertiesS, buyProperty } = require("../controllers/user.controller.js");

const verifyToken = require('../middleware/AuthMiddleware.js');

const router = express.Router();

router.use(verifyToken);
router.post("/create",  createUser); 
router.get('/test', test);
router.post("/update/:id",  updateUser);
router.delete("/delete/:id",  deleteUser);
router.get("/listings",  getUserListings); //used
router.get("/rent",  getPropertiesR); //used
router.get("/buy",  getPropertiesS); //used
router.get("/buyProperty/:id",  buyProperty);
router.get("/:id",  getUser);
router.get("/rentProperty/:id",  rentProperty);

module.exports=router;