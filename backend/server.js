const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios"); // To call Python API
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/predict", async (req, res) => {
    try {
        const response = await axios.post("http://127.0.0.1:5000/predict", req.body);
        res.json(response.data);
    } catch (error) {
        console.error("Error predicting PCOS:", error);
        res.status(500).json({ error: "Failed to predict PCOS" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
