var React = require('react');
var axios = require('axios');
var secrets = require('../secrets/Secrets');


var APP_ID = secrets.open_weather_api_key;

function getWeather(cityName){
  return axios.get('http://api.openweathermap.org/data/2.5/forecast?q='+ cityName + '&appid=' + APP_ID + '&units=metric');
}

var helpers = {
  getWeatherInfo: function(cityName){
    console.log("City Name" + cityName)
    return getWeather(cityName)
      .then(function(info){
        return info.data
      })
  }
}

module.exports = helpers;
