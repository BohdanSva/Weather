// Homework:
// Using a HTML/JS file in the browser-
// 1. Use axios to get weather data from the API I showed at the start of the lesson
// const weather = axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=51.509865&lon=-0.118092&appid=297a1fa6711295839c4ee730d3cbac1e`);
// console.log(weather);

// 2. Wrap the axios call in an async function
// const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=51.509865&lon=-0.118092&appid=297a1fa6711295839c4ee730d3cbac1e`;     // Use your API key here

// const getWeather = async () => {
//     const weatherData = axios.get(weatherURL);
//     console.log(weatherData);
// }
// getWeather();

// 3. Use await before the axios call
// const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=51.509865&lon=-0.118092&appid=297a1fa6711295839c4ee730d3cbac1e`;     // Use your API key here

// const getWeather = async () => {
//     const weatherData = await axios.get(weatherURL);
//     console.log(weatherData);
// }
// getWeather();

// 4. Destructure the response to get the { data } part of the response
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=51.509865&lon=-0.118092&appid=297a1fa6711295839c4ee730d3cbac1e`;     // Use your API key here

const getWeather = async () => {
    const {data} = await axios.get(weatherURL);
    
    data.list.forEach(item => {
        console.log(new Date(item.dt * 1000).toLocaleString());
        console.log(Math.round(item.main.temp - 273.15));
        console.log(item.weather[0].description);
    });
}
getWeather();
// 5. Console.log the weather data (this will show you completed the above)
console.log(getWeather());