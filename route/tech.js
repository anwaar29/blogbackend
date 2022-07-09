const express=require('express');
const techcontroller=require('../component/tech')
const techrouter=express.Router()
techrouter.route('/tech').get(techcontroller.tech)
module.exports=techrouter;