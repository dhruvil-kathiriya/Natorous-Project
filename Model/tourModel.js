const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a Name'],
        unique: true,
        trim: true
    },
    duration: {
        type: Number,
        required: [true, 'A tour must have a duration']
    },
    maxGroupSize: {
        type: Number,
        default: 4.5
    },
    difficulty: {
        type: String,
        required: [true, 'A tour must have a Difficulty']
    },
    ratingsAverage: {
        type: Number,
        default: 0
    },
    ratingsQuantity: {
        type: Number,
        required: [true, 'A tour must have a Difficulty']
    },
    price: {
        type: Number,
        required: [true, 'A Tour must have a Price']
    },
    priceDiscount: Number,
    summary: {
        type: String,
        trim: true,
        required: [true, 'A Tour must have a description']
    },
    description: {
        type: String,
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, "a Tour must have a Cover Image"]
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDates: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
