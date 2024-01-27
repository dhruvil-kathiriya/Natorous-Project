const express = require('express');
const morgan = require('morgan');
const app = express();
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

app.use(express.json());

app.use(express.static(`${__dirname}/public`));

// MiddleWares
// app.use((req,res,next)=>{
//     console.log('Hello From MiddleWare');
//     next();
// });

app.use((req, res, next) => {
  req.requesTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
