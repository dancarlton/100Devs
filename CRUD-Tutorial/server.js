console.log('May Node be with you');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen(3000, function() {
    console.log('listening on 3000')
})

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})

const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb-connection-string', (err, client) => {
    //  ... do something here
})

// Could not get mongoDB working on the atlas website
