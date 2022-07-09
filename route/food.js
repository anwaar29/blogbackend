const express=require('express');
const foodcontroller=require('../component/food')
const foodrouter=express.Router()
foodrouter.route('/food').get(foodcontroller.food)
module.exports=foodrouter;