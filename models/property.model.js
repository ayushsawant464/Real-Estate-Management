const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    imageUrls: {
        type: Array,
        required: true,
      },
      userRef: {
        type: String,
        required: true,
      },
},
{ timestamps: true });


const Property = mongoose.model("Property", propertySchema);

module.exports = Property;