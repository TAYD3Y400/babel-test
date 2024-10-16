const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema(
    {
        id: {type: String, required: true, unique: true},
        name: {type: String, required: true},
        masterId: {type: String, required: true, ref: 'Country'}
    }
)

module.exports = mongoose.model("City", CitySchema)