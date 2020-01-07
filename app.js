const http = require('http')
const port = 8000
const express = require('express')
const cors = require('cors')
const app = express()

const data = require('./data.js')

app.use(require('morgan')('dev'))

app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('OK').end()
})
app.get('/login', (req, res) => {
    res.status(200).json(data.userData).end()
})
app.get('/clinicians', (req, res) => {
    console.log(data.data)
    res.status(200).json({clinicians: data.data}).end()
})



http.createServer(app).listen(port, () => console.log(`app ready on ${port}`))