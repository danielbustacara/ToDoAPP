const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema and model

const MarioChartSchema = new Schema({
  name: String,
  weight: Number
});

const MarioChart = mongoose.model('mariochar', MarioChartSchema);

module.exports = MarioChart;
