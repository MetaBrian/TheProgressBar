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

app.get('/getBars', async(req, res, next) => {
    try {
        const bars = await Bar.find({});
        await res.json(bars)
    }
    catch(err){return next (err)}
})

app.post('/newBar', async (req, res, next)=>{
    const {title, startValue, endValue} = req.body;

    try {
        Bar.create({title:title, startValue:startValue, endValue:endValue})
    }
    catch (err){
        return next(err)
    }

    })

app.use('*', (err, res) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});