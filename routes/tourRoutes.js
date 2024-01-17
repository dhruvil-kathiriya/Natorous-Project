const express = require('express');

const tourcontroller = require('../Controllers/tourcontroller');

const router = express.Router();

router.route('/').get(tourcontroller.getAllTour).post(tourcontroller.addTour);

router.route('/:id').get(tourcontroller.getTour).put(tourcontroller.updateTour).delete(tourcontroller.deleteTour);

module.exports = router;
