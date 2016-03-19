var React = require('react');
var PropTypes = React.PropTypes;
var Home = require('../components/Home');


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
  handleSubmitCity: function(){
    this.context.router.push({
      pathname: '/forecast',
      state: {
        cityName: this.state.cityName
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
