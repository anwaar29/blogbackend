const express=require('express');
const bollrouter1=require('./route/bolly')
const hollrouter1=require('./route/holly')
const datasrouter1=require('./route/datas')
const fittyrouter1=require('./route/fitty')
const foodrouter1=require('./route/food')
const techrouter1=require('./route/tech')

const cors=require('cors')
const app=express();
app.use(cors())
app.use('/api/',bollrouter1)
app.use('/api/',hollrouter1)
app.use('/api/',datasrouter1)
app.use('/api/',fittyrouter1)
app.use('/api/',foodrouter1)
app.use('/api/',techrouter1)

app.listen(process.env.PORT || 3015,()=>{
    console.log("app is running")
})