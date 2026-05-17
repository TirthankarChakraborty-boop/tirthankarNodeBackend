require('dotenv').config()
const express = require("express")

const app = express()

const port = 4000

app.get('/', (req,res)=>{

    res.send("<h1>Tirthankar Chakraborty</h1>")

})

app.get('/about',(req,res)=>{
    res.send('I am Tirthankar Chakraborty')
})

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`)
})