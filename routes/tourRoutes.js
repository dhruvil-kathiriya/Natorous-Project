const express = require('express');

const tourcontroller = require('../controller/tourcontroller');

const router = express.Router();

// MiddleWare for
// router.param('id', tourcontroller.checkId);

router
  .route('/')
  .get(tourcontroller.getAllTour)
  .post(tourcontroller.createTour);

router
  .route('/:id')
  .get(tourcontroller.getTour)
  .patch(tourcontroller.updateTour)
  .delete(tourcontroller.deleteTour);

module.exports = router;
