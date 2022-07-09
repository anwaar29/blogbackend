const express=require('express');
const bollycontroller=require('../component/Bolly')
const bollyrouter=express.Router()
bollyrouter.route('/bolly')
.get(bollycontroller.bolly)
module.exports=bollyrouter;