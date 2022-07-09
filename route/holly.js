const express=require('express');
const hollycontroller=require('../component/holly')
const hollyrouter=express.Router()
hollyrouter.route('/holly').get(hollycontroller.holly)
module.exports=hollyrouter;