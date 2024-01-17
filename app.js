const express = require('express');
const morgan = require('morgan'); 
const app = express();
const port = 3000;

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');


app.use(morgan('dev'));

app.use(express.json());

// MiddleWares
// app.use((req,res,next)=>{
//     console.log('Hello From MiddleWare');
//     next();
// });

app.use((req,res,next)=>{
    req.requesTime = new Date().toISOString();
    next();
})






// Routes

// app.get("/api/v1/tours",getAllTour);
// app.get("/api/v1/tours/:id",getTour);
// app.post("/api/v1/tours/:id",addTour);
// app.patch("/api/v1/tours/:id",updateTour);
// app.delete("/api/v1/tours/:id",deleteTour);


app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);


// START SERVER
app.listen(port, () => {
  console.log(`App running on port : ${port}`);
});
