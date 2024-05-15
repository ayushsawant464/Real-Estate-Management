const bcrypt = require("bcryptjs");
const User = require("../models/user.model.js");
const errorHandler = require("../utils/error.js");
const Property = require("../models/property.model.js");

 const test = (req, res) => {
  res.send("Test route being called!!!");
};

const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};


 const updateUser = async (req, res, next) => {
  if (req.user.userId !== req.params.id)
    return next(errorHandler(401, "You can only update your own account!"));
  try {
   

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          mobile: req.body.mobile,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

 const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only delete your own account!"));
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (error) {
    next(error);
  }
};

 const getUserListings = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    try {
      const listings = await Property.find({ userRef: req.params.id });
      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandler(401, "You can only view your own listings!"));
  }
};

 const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return next(errorHandler(404, "User not found!"));

    const { password: pass, ...rest } = user._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

module.exports = { test, updateUser, deleteUser, getUserListings, getUser,createUser };

