var React = require('react');
var PorpTypes = React.PropTypes;
var ForecastHelper = require('../utils/ForecastHelper');
var Forecast = require('../components/Forecast');


var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      cityName : this.props.location.state.cityName,
      isLoading: true,
      forecastData: []
    }
  },
  componentDidMount: function() {
    var that = this;
    ForecastHelper.getWeatherInfo(this.state.cityName)
      .then(function(data){
        that.setState({
          isLoading: false,
          forecastData: data
        })
      })
  },
  render: function() {
    return(
      <Forecast
        forecastData={this.state.forecastData.list}
        isLoading={this.state.isLoading}/>

    )
  }
})

module.exports = ForecastContainer;
