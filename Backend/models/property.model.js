const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: {
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
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
      },
    user_id: {
        type: String,
        required: true,
      },
    isRent :{
        type:Boolean,
        required :true,
    },
},
{ timestamps: true });


const Property = mongoose.model("Property", propertySchema);

module.exports = Property;