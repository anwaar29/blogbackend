const express=require('express');
const fittycontroller=require('../component/fitty')
const fittyrouter=express.Router()
fittyrouter.route('/fitty').get(fittycontroller.fitty)
module.exports=fittyrouter;