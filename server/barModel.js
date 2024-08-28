const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//consider db maximum value of 1 million 
const barSchema  = new Schema({
    title: {type: String, required: true},
    startValue: {type: Number, required: true, minimum:0 },
    endValue: {type: Number, required: true, minimum: 1}
})

const Bar = mongoose.model("Bar", barSchema);

module.exports = Bar;