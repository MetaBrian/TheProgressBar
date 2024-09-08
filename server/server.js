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
    const {title, startValue, endValue, category} = req.body;

    try {
        Bar.create({title:title, startValue:startValue, endValue:endValue, category:category})
    }
    catch (err){
        return next(err)
    }

    })

  app.post('/editBar', async (req, res, next)=>{
    const {_id, title, startValue, endValue, category} = req.body;
    console.log (_id, title, startValue, endValue, category, 'this is editBar')

    try {
      await Bar.updateOne({_id}, {title, startValue, endValue, category})
    }
    catch (err){
      return next(err)
    }

  })
    
app.post('/incrementBar', async (req, res, next) => {
        const {_id, incrementedValue }= await req.body
      
        try {
          console.log(incrementedValue,'this is backend value')
          await Bar.updateOne({"_id": _id}, { $set: {"startValue": incrementedValue}})

        }
        catch (err){
          return next(err)
        }
      
      })

app.post ('/deleteBar', async (req, res, next) =>{
  const _id = await req.body
  
  try {
    await console.log(_id, 'this is delete backend id')
    await Bar.deleteOne({
      "_id": _id
    })
  }
    catch(err){
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