const fs = require("fs");

const express = require('express');

const app = express();

const port = 3000;

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

app.use(express.json());

// app.get('/', (req, res) => {
//   res
//   .status(200)
//   .json({ Message: 'Hello From ServerSide!', 
//     app: "Natours" });
// });

app.get("/api/v1/tours",(req,res)=>{
    res.status(200).json({
        status : 'success',
        results : tours.length,
        data :{
            tours :tours
        }
    })
});

app.get("/api/v1/tours/:id",(req,res)=>{
    console.log(req.params);
    
    const id  = req.params.id * 1;
    
    const tour  = tours.find(el => el.id ===id)
    // if(id>tours.length){
    if(!tour){
        return res.status(404).json({
            status : 'fail',
            message: 'Invalid Id'
        }) 
    }
    
    res.status(200).json({
        status : 'success',
        data :{
            tours :tour
        }
    })
});

app.post('/api/v1/tours',(req,res)=>{
    // console.log(req.body);
    const NewId = tours[tours.length -1].id + 1;
    const newTour = Object.assign({id :NewId},req.body);
    tours.push(newTour);
    fs.writeFile((`${__dirname}/dev-data/data/tours-simple.json`),JSON.stringify(tours),err=>{
        res.status(201).json({
            status : 'success',
            data :{
                tour :newTour
            }
        })
    })
 })


app.listen(port, () => {
  console.log(`App running on port : ${port}`);
});