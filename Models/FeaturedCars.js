const mongoose = require('mongoose');

const featuredCarSchema = new mongoose.Schema({
       name:String,
        image:String,
        type:String,
        seats:String,
        pricePerDay:String,
        rating:Number,
        fuelType:String,
        transmission:String,
        location:String,

})

module.exports = mongoose.model('FeaturedCar',featuredCarSchema,'FeaturedCars');