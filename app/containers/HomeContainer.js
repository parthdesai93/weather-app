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
      cityName:''
    }
  },
  handleUpdateCity: function(e){
    this.setState({
      cityName: e.target.value
    })
  },
  handleSubmitCity: function(e){
    ForecastHelper.getWeatherInfo(this.state.cityName);
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
