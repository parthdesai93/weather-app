var React = require('react');
var PropTypes = React.PropTypes;


function Forecast(props){
  return(
    props.isLoading === true
      ? <div> Loading </div>
      : <div>
          {console.log(props)}
          <h1>{props.cityName}</h1>
          <p> {props.forecastData[0].description}</p>
        </div>
  )
}

Forecast.propTypes = {
  forecastData: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  cityName: PropTypes.string.isRequired
}

module.exports = Forecast;
