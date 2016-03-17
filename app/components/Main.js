var React = require('react');

var Main = React.createClass({
  render: function() {
    return(
      <div> 
      <span> {this.props.children}</span>
      </div>
    )
  }
})

module.exports = Main;
