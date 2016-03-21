var React = require('react');
var PropTypes = React.PropTypes;

function DetailWeather(props) {
  return(
    <div className="container">
      <div className="text-center">
        <h1>{props.weather.day + ', ' + props.weather.month + ' ' + props.weather.date}</h1>
        <h2>{props.city}</h2>
        <p>{props.weather.description}</p>
        <p>Min Temp: <strong>{props.weather.min_temp} </strong></p>
        <p>Max Temp: <strong>{props.weather.max_temp}</strong> </p>
        <p> Humidity: <strong>{props.weather.humdity}</strong> </p>
      </div>
    </div>
  )
}


module.exports = DetailWeather;
