var React = require('react');
var PorpTypes = React.PropTypes;
var ForecastHelper = require('../utils/ForecastHelper');


var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      cityName : this.props.location.state.cityName,
      forecastData: []
    }
  },
  componentDidMount: function() {
    var that = this;
    ForecastHelper.getWeatherInfo(this.state.cityName)
      .then(function(data){
        that.setState({
          forecastData: data
        })
      })
      .then(function(){
        console.log(that.state.forecastData)
      })
  },
  render: function() {
    return(
      <p> ForecastContainer </p>

    )
  }
})

module.exports = ForecastContainer;
