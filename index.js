// console.log("hello")
require('dotenv').config()


const express = require('express');
const app = express()
const PORT = 4000

app.get('/', (req, res) => {
    res.send("Hello bro")
})

app.get('/twitter', (req, res) => {
    res.send("twitter is now X")
})

app.get('/login', (req, res) => {
    res.send('<h1> Please Login! </h1>')
})

app.listen(process.env.PORT, () => {
    console.log("example app on port: ", PORT);
})
