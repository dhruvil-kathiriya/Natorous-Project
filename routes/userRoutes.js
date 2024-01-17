const  express = require('express');

const router = express.Router();


const getAllUsers = (req,res) =>{
    res.status(500).json({
      status: 'Error',
      message: 'This Route Is not Yet Defined',
    })
  };
  
  const addUser = (req,res) =>{
    res.status(500).json({
      status: 'Error',
      message: 'This Route Is not Yet Defined',
    })
  };
  
  const getUser = (req,res) =>{
    res.status(500).json({
      status: 'Error',
      message: 'This Route Is not Yet Defined',
    })
  };
  
  const updateUser = (req,res) =>{
    res.status(500).json({
      status: 'Error',
      message: 'This Route Is not Yet Defined',
    })
  };
  
  const deleteUser = (req,res) =>{
    res.status(500).json({
      status: 'Error',
      message: 'This Route Is not Yet Defined',
    })
  };


router.route('/')
.get(getAllUsers)
.post(addUser);

router.route('/:id')
.get(getUser)
.put(updateUser)
.delete(deleteUser);

module.exports = router;