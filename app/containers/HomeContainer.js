var React = require('react');
var PropTypes = React.PropTypes;
var Home = require('../components/Home');
var ForecastHelper = require('../utils/ForecastHelper');

var HomeContainer = React.createClass({
  contextTypes: {
		router: React.PropTypes.object.isRequired
	},
  getInitialState: function() {
    return {
      cityName:'',
      foercastData: []
    }
  },
  handleUpdateCity: function(e){
    this.setState({
      cityName: e.target.value
    })
  },
  componentDidMount: function() {
    ForecastHelper.getWeatherInfo(this.state.cityName)
      .then(function(data){
        this.setState({
          forecastData: data
        })
      }.bind(this))
  },
  handleSubmitCity: function(){
    this.context.router.push({
      pathname: '/forecast',
      state: {
        forecastData: this.state.forecastData
      }
    })
  },
  render: function(){
    return(
      <Home
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
        cityName={this.state.cityName}  />
    )
  }
});

module.exports = HomeContainer;
