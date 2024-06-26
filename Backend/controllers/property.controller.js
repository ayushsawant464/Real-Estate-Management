
const Property = require('../models/property.model.js');
const { errorHandler } = require('../utils/error.js');
 

const createProperty = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    const property = await Property.create({...req.body,user_id});
    return res.status(201).json(property);
  } catch (error) {
    console.log(error);
    res.status(400).json({error:error.message})
  }
};

 const deleteProperty = async (req, res, next) => {
  const property = await Property.findById(req.params.id);

  if (!property) {
    return next(errorHandler(404, 'Property not found!'));
  }

  // if (req.user_id !== property.user_id) {
  //   return next(errorHandler(401, 'You can only delete your own listing!'));
  // }

  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json('Property has been deleted!');
  } catch (error) {
    res.status(400).json({error:error.message})
    console.log(error)
  }
};


 const updateProperty = async (req, res, next) => {
  const property = await Property.findById(req.params.id);
  if (!property) {
    return next(errorHandler(404, 'Property not found!'));
  }
  // if (req.user_id !== property.user_id) {
  //   return next(errorHandler(401, 'You can only update your own listing!'));
  // }

  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedProperty);
  } catch (error) {
    next(error);
  }
};



 const getProperty = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return next(errorHandler(404, 'Property not found!'));
    }
    res.status(200).json(property);
  } catch (error) {
    next(error);
  }
};
const getPropertiesA = async (req, res, next) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    console.log(error);
    res.status(400).json({error:error.message})
  }
};

 const getProperties = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;
   
    let size = req.query.size ;
    let status = req.query.status;
    let location =req.query.location;
    if (status === undefined ) {
      status = { $in: ["sold", "unsold"] };
    }

    let type = req.query.type;

    if(size===undefined ){
      size =  { $gt: 0 };
    }

    if (type === undefined || type === 'all') {
      type = { $in: ['sale', 'rent'] };
    }

    if(location === undefined)[
      location = { $regex: '/./', $options: 'i'}
    ]
    const searchTerm = req.query.searchTerm || '';

    const sort = req.query.sort || 'createdAt';

    const price = req.query.price || 'desc';

    const listing = await Property.find({
      name: { $regex: searchTerm, $options: 'i' },
      location,
      type,
      size,
      status
    })
      .sort({ [sort]: price })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};


module.exports = { createProperty, deleteProperty, updateProperty, getProperty, getProperties ,getPropertiesA};