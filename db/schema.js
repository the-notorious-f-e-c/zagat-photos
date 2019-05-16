const mongoose = require('mongoose');
const { generate100Records } = require('./dataGenerator.js');

mongoose.connect('mongodb://localhost/restaurantphotos');

const { Schema } = mongoose;
const photoSchema = new Schema({
  restaurantId: Number,
  name: String,
  photos: [String],
});

photoSchema.index({ restaurantId: 1 });

const Photo = mongoose.model('Photo', photoSchema);
const records = generate100Records();
const getPhotos = (id, callback) => {
  Photo.findOne({ restaurantId: id }, callback);
};

Photo.insertMany(records, (err) => {
  if (err) {
    console.log('Error inserting 100 records to database');
  } else {
    console.log('Database for photos and 100 records created!');
    mongoose.connection.close();
  }
});

module.exports.getPhotos = getPhotos;
