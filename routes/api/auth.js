const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
// @route GET api/auth
// @desc Test route
// @access Public
router.get('/',auth,async(req,res)=>{
  try{
    const user = await User.findById(req.user.id).select('-password -__v -_id -date');
    res.json(user)
  }catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  res.send("Auth Route");
});

module.exports = router;