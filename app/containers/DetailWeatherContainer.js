var React = require('react');
var DetailWeather = require('../components/DetailWeather');

var DetailWeatherContainer = React.createClass({
  render: function() {
    return(
      <DetailWeather
      weather={this.props.location.state.weather}
      city={this.props.location.state.city}/>
    )
  }
})

module.exports = DetailWeatherContainer;
