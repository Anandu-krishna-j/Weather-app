
// Corrected function to fetch weather data based on latitude and longitude
async function getWeather(lat,lon) {
    if(lat&& lon){
        const apiKey = '3022f1d34895ed1d0074b42625dc4040'; // Replace with your actual API key
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = { getWeather };
