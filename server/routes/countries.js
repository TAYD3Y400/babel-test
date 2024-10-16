const express = require("express");
const router = express.Router();

const Country = require('../models/Country');

router.post("/", async (req, res) => {
    try {
        const newCountry = new Country(req.body);
        await newCountry.save();
        res.json(newCountry);
    } catch (error) {
        res.status(500).json({error: error.message});   
    }
});

router.get("/", async (req, res) => {
    try {
        const countries = await Country.find();
        res.send(countries);
    } catch (error){
        res.status(500).json({error: error.message}) 
    }
})
router.get('/:id', async (req, res) => {
    try {
        const country = await Country.findOne({ id: req.params.id }); 
        if (!country) {
            return res.status(404).json({ error: "Country not found" });
        }
        res.json(country);
    } catch (error){
        res.status(500).json({error: error.message});
    }
});

router.put("/:id", async (req, res) => {
    try {
        const country = await Country.findOneAndUpdate({id: req.params.id,}, req.body, { new: true });
        if (!country) {
            return res.status(404).json({ error: "Country not found" });
        }
        res.json(country);
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const country = await Country.findByIdAndDelete(req.params.id);
        if (!country) {
            return res.status(404).json({ error: "Country not found" });
        }
        res.json(country);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = router;