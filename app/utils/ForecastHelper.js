var React = require('react');
var axios = require('axios');
var secrets = require('../secrets/Secrets');


var APP_ID = secrets.open_weather_api_key;

function getWeather(cityName){
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&appid=' + APP_ID);
}

var helpers = {
  getWeatherInfo: function(cityName){
    return getWeather(cityName)
      .then(function(info){
        console.log(info.data)
      })
  }
}

module.exports = helpers;
