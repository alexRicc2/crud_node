const express = require('express')
const app = express()


app.get('/login', (req, res)=>{
    res.send('hello world');
})

app.listen(3001, ()=>{
    console.log('running on port 3001')
})