const express=require('express');
const { test,updateUser, deleteUser, getUserListings, getUser,createUser } = require("../controllers/user.controller.js");
const {  } = require("../utils/verifyUser.js");
const verifyToken = require('../middleware/AuthMiddleware.js');

const router = express.Router();

router.use(verifyToken);
router.post("/create",  createUser); 
router.get('/test', test);
router.post("/update/:id",  updateUser);
router.delete("/delete/:id",  deleteUser);
router.get("/listings/:id",  getUserListings);
router.get("/:id",  getUser);

module.exports=router;