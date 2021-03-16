
let API_KEY = "471533faf41e1da59afa2a355f14ad55";





getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  const Full_Url=`${URL}?q=${city}&appid=${API_KEY}&units=metric`;

  const weatherPromise=fetch(Full_Url);
 
 return weatherPromise.then((response)=>{
    return response.json();
  })
 
}

searchCity = () => {


  
  const city = document.getElementById('input-text').value;
  document.getElementById('input-text').value='';

  getWeatherData(city)
  .then((res)=>{
    showWeatherData(res);
  }).catch((err)=>{
    const error="Couldn't find state";
    document.getElementById('cityname').innerText=error;
    document.getElementById('weather-type').innerText='';
    document.getElementById('temp').innerText='';
    document.getElementById('min-temp').innerText='';
    document.getElementById('max-temp').innerText='';
  });

  
}

showWeatherData = (weatherData) => {
  let city=weatherData.name;
  document.getElementById('cityname').innerText=city;
  let sky=weatherData.weather[0].main;
  document.getElementById('weather-type').innerText=sky;
  let temp=weatherData.main.feels_like;
  document.getElementById('temp').innerText=temp;
  let mintemp=weatherData.main.temp_min;
  document.getElementById('min-temp').innerText=mintemp;
  let maxtemp=weatherData.main.temp_max;
  document.getElementById('max-temp').innerText=maxtemp;
}








