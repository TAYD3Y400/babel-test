const express = require("express");
const router = express.Router();

const City = require('../models/City');

router.post("/", async (req, res ) => {
    try {
        const newCity = new City(req.body);
        await newCity.save();
        res.json(newCity)
    } catch (error) {
        res.status(500).json({error: error.message})   
    }
});

router.get("/", async (req, res) => {
    try {
        const cities = await City.find();
        res.json(cities);
    } catch (error){
        res.status(500).json({error: error.message}) 
    }
})

router.get("/:masterId", async (req, res) => {
    try {
        const cities = await City.find({ masterId: req.params.masterId });
        res.json(cities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:masterId/:cityId", async (req, res) => {
    try {
        const city = await City.findOne(
            { id: req.params.cityId, masterId: req.params.masterId } );
        if (!city) {
            return res.status(404).json({ error: "City not found" });
        }
        res.json(city);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.put("/:masterId/:cityId", async (req, res) => {
    try {
        const city = await City.findOneAndUpdate(
            { id: req.params.cityId, masterId: req.params.masterId }, req.body, { new: true } 
        );
        if (!city) {
            return res.status(404).json({ error: "City not found" });
        }
        res.json(city);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete("/:masterId/:cityId", async (req, res) => {
    try {
        const city = await City.findOneAndDelete({
            id: req.params.cityId, masterId: req.params.masterId });
        if (!city) {
            return res.status(404).json({ error: "City not found" });
        }
        res.json({ message: "City has been deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;