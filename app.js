const express = require('express');
const path = require('path');
const { getWeather } = require('./templates/api'); // Import the getWeather function
const app = express();

app.use(express.static(path.join(__dirname, 'templates')));

const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.get("/weather", async (req, res) => {
    const lat = req.query.lat;  // Get latitude from query parameters
    const lon = req.query.lon;  // Get longitude from query parameters
    try {
        const data = await getWeather(lat, lon); // Call the getWeather function
        res.json(data); // Send the data as a JSON response
    } catch (err) {
        res.status(500).send("Error fetching weather data");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
