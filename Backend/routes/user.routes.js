const express=require('express');
const { test,updateUser, deleteUser, getUserListings, getUser,createUser } = require("../controllers/user.controller.js");
const {  } = require("../utils/verifyUser.js");

const router = express.Router();


router.get('/test', test);
router.post("/create",  createUser); 
router.post("/update/:id",  updateUser);
router.delete("/delete/:id",  deleteUser);
router.get("/listings/:id",  getUserListings);
router.get("/:id",  getUser);

module.exports=router;