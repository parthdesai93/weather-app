var React = require('react');
var axios = require('axios');
var secrets = require('../secrets/Secrets');


var APP_ID = secrets.open_weather_api_key;

function getWeather(cityName){
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+ cityName + '&appid=' + APP_ID + '&units=metric&cnt=5');
}

function getDate(timestamp){
  var date = new Date(timestamp*1000);
  var day = date.getDay();
  console.log(date);
  return day;
}

function parseData(data){
  var formattedData = data.map(function(obj){
    var weather = {};
    weather['humdity'] = obj.humidity;
    weather['min_temp'] = obj.temp.min;
    weather['max_temp'] = obj.temp.max;
    weather['date'] = getDate(obj.dt);
    weather['description'] = obj.weather[0].description;
    return weather;
  })
  return formattedData;
}

var helpers = {
  getWeatherInfo: function(cityName){
    return getWeather(cityName)
      .then(function(info){
        console.log('info');
        console.log(info);
        return parseData(info.data.list)
      })
  }
}

module.exports = helpers;
