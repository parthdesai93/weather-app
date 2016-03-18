var React = require('react');


var ForecastContainer = React.createClass({

  render: function() {
    console.log(this.props.location.state);
    return(
      <p> ForecastContainer </p>

    )
  }
})

module.exports = ForecastContainer;
