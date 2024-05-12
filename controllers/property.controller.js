
const Property = require('../models/property.model.js');
const { errorHandler } = require('../utils/errorHandler.js');
 const createProperty = async (req, res, next) => {
  try {
    const property = await Property.create(req.body);
    return res.status(201).json(property);
  } catch (error) {
    next(error);
  }
};

 const deleteProperty = async (req, res, next) => {
  const property = await Property.findById(req.params.id);

  if (!property) {
    return next(errorHandler(404, 'Property not found!'));
  }

  if (req.user.id !== property.userRef) {
    return next(errorHandler(401, 'You can only delete your own listing!'));
  }

  try {
    await property.findByIdAndDelete(req.params.id);
    res.status(200).json('Property has been deleted!');
  } catch (error) {
    next(error);
  }
};

 const updateProperty = async (req, res, next) => {
  const property = await Property.findById(req.params.id);
  if (!property) {
    return next(errorHandler(404, 'Property not found!'));
  }
  if (req.user.id !== property.userRef) {
    return next(errorHandler(401, 'You can only update your own listing!'));
  }

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

 const getProperties = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;
    let offer = req.query.offer;

    if (offer === undefined || offer === 'false') {
      offer = { $in: [false, true] };
    }

    let furnished = req.query.furnished;

    if (furnished === undefined || furnished === 'false') {
      furnished = { $in: [false, true] };
    }

    let parking = req.query.parking;

    if (parking === undefined || parking === 'false') {
      parking = { $in: [false, true] };
    }

    let type = req.query.type;

    if (type === undefined || type === 'all') {
      type = { $in: ['sale', 'rent'] };
    }

    const searchTerm = req.query.searchTerm || '';

    const sort = req.query.sort || 'createdAt';

    const order = req.query.order || 'desc';

    const listing = await Property.find({
      name: { $regex: searchTerm, $options: 'i' },
      offer,
      furnished,
      parking,
      type,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

module.exports = { createProperty, deleteProperty, updateProperty, getProperty, getProperties };