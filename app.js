const http = require('http')
const port = 8000
const express = require('express')
const cors = require('cors')
const app = express()

const multipart = require('connect-multiparty')
const multipartMiddleware = multipart()

const bodyParser = require('body-parser')

const data = require('./data.js')

app.use(require('morgan')('dev'))
app.use(bodyParser.json())
const urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('OK').end()
})
app.post('/login', urlencodedParser, (req, res) => {
    console.log(req.body)
    // if (req.body === 'user') {
    res.status(200).json(data.userData).end()
    // } else {
    //     res.status(400).json({
    //         message: 'no way jose'
    //     })
    // }
})
app.get('/login', (req, res) => {
    res.status(200).json(data.userData).end()
})
app.get('/clinicians', (req, res) => {
    res.status(200).json({clinicians: data.clinicianData}).end()
})
app.get('/patients', (req, res) => {
    res.status(200).json({ patients: data.patientData }).end()
})



http.createServer(app).listen(port, () => console.log(`app ready on ${port}`))