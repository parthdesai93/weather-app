var React = require('react');
var PropTypes = React.PropTypes;

function DetailWeather(porps) {
  return(
    <div> DetailWeather component</div>
  )
}

DetailWeather.porpTypes = {
    cityName: PropTypes.string.isRequired;
}

module.exports = DetailWeather;
