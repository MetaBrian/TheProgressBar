const dotenv = require('dotenv/config');
const URI = process.env.MONGO_URI;
const mongoose = require('mongoose');

const express = require('express');
const cors = require('cors');
const Bar = require('./barModel');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(URI)
    .then( () => {
        console.log('Connected to MongoDB successfully')
    })
    .catch((err) => {
        console.log(err)
    });

app.get('/', async(req, res, next) => {
    try {
        const bars = await Bar.find({});
        await res.json(bars)
    }
    catch(err){return next (err)}
})

