var React = require('react');
var PropTypes = React.PropTypes;

function Forecast(props){
  return(
    props.isLoading === true ?
    <div> Loading </div> :
    <div>Loaded data </div>
  )
}

Forecast.propTypes = {
  forecastData: PropTypes.array,
  isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast;
