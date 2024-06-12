const bcrypt = require("bcryptjs");
const User = require("../models/user.model.js");
const errorHandler = require("../utils/error.js");
const Property = require("../models/property.model.js");
const stripe = require("stripe")('sk_test_51PHKTHSI2nJpaMLDgxQtoKcH7zMCeAN8Z2hxV1Nzy3k01oAwYoWVlsr9yZ6oKk5xGa2onz22D8OKfjYURWeDYRwb0056umNa4q');

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

    try {
      const listings = await Property.find({ user_id: req.user_id });
      res.status(200).json(listings);
    } catch (error) {
      next(error);
      res.status(400).json({error:error.message})
    }
  
};

const getPropertiesS = async (req, res, next) => {
  try {
    const properties = await Property.find({ isRent: false });
    res.status(200).json(properties);
  } catch (error) {
    console.log(error);
    res.status(400).json({error:error.message})
  }
};
const getPropertiesR = async (req, res, next) => {
  try {
    const properties = await Property.find({ isRent: true});
    res.status(200).json(properties);
  } catch (error) {
    console.log(error);
    res.status(400).json({error:error.message})
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


const buyProperty = async (req, res, next) => {
  const user_id = req.user_id;
  const price =req.body.price;
  const status ="Sold Out";
  const property = await Property.findById(req.params.id);
  if (!property) {
    res.status(401).json({error:'Property not found!'});

  }
  else if (req.user_id == property.user_id) {
    res.status(402).json({error:'You cannot buy  your own listing!'});

  }
  else {

  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      {status , user_id},
      { new: true }
    );
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: price * 100,
    //   currency: "inr",
    //   automatic_payment_methods: {
    //     enabled: true,
    //   },
    // });
    
    res.status(200).json(updatedProperty);
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  


  } catch (error) {
    res.status(403).json({error:error.message})
    
  }
}
};

const rentProperty = async (req, res, next) => {
  const user_id = req.user_id;
  const status ="Sold Out";
  const property = await Property.findById(req.params.id);
  if (!property) {
    res.status(401).json({error:'Property not found!'});

  }
  if (req.user_id == property.user_id) {
    res.status(402).json({error:'You cannot buy  your own listing!'});

  }

  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      {status},
      { new: true }
    );
    res.status(200).json(updatedProperty);
  } catch (error) {
    res.status(403).json({error:error.message})
    
  }
};


module.exports = { rentProperty,buyProperty,test, updateUser, deleteUser, getUserListings, getUser,createUser, getPropertiesR,getPropertiesS };

