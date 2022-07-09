const express=require('express');
const datascontroller=require('../component/datas')
const datasrouter=express.Router()
datasrouter.route('/datas').get(datascontroller.datas)
module.exports=datasrouter;