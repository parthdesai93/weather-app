var React = require('react');
var PorpTypes = React.PropTypes;
var ForecastHelper = require('../utils/ForecastHelper');
var Forecast = require('../components/Forecast');


var ForecastContainer = React.createClass({
  contextTypes: {
		router: React.PropTypes.object.isRequired
	},
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
  handleClick: function(index) {
    this.context.router.push({
      pathname: '/detail',
      state: {
        weather : this.state.forecastData[index],
        city: this.state.cityName
      }
    })
  },
  render: function() {
    return(
      <Forecast
        forecastData={this.state.forecastData}
        isLoading={this.state.isLoading}
        cityName={this.state.cityName}
        handleClick={this.handleClick}/>

    )
  }
})

module.exports = ForecastContainer;
