var React = require('react');
var axios = require('axios');
var secrets = require('../secrets/Secrets');


var APP_ID = secrets.open_weather_api_key;

function getWeather(cityName){
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+ cityName + '&appid=' + APP_ID + '&units=metric&cnt=5');
}

function getDay(timestamp){
  var date = new Date(timestamp*1000);
  var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return week[date.getDay()];
}

function getMonth(timestamp){
  var date = new Date(timestamp*1000);
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  return monthNames[date.getMonth()];
}

function getDate(timestamp){
  var date = new Date(timestamp*1000);
  return date.getDate();

}

function parseData(data){
  var formattedData = data.map(function(obj){
    var weather = {};
    weather['humdity'] = obj.humidity;
    weather['min_temp'] = obj.temp.min;
    weather['max_temp'] = obj.temp.max;
    weather['day'] = getDay(obj.dt);
    weather['date'] = getDate(obj.dt);
    weather['month'] = getMonth(obj.dt);
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
