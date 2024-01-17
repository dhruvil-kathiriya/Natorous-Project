const  express = require('express');

const usercontroller = require("../Controllers/usercontroller")

const router = express.Router();


router.route('/')
.get(usercontroller.getAllUsers)
.post(usercontroller.addUser);

router.route('/:id')
.get(usercontroller.getUser)
.put(usercontroller.updateUser)
.delete(usercontroller.deleteUser);

module.exports = router;