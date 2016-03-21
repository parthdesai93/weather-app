var React = require('react');

var DetailWeatherContainer = React.createClass({
  render: function() {
    return(
      <div> DetailWeatherContainer
      {console.log(this.props)}</div>
    )
  }
})

module.exports = DetailWeatherContainer;
