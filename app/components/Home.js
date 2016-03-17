var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;

function Home (props){
  return(
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" >
      <h2> Enter a City and State</h2>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitCity}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder = "Toronto,On"
              onChange={props.onUpdateCity}
						  value= {props.cityName}
              type="text" />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit" >
                Get Weather
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Home.PropTypes ={
  cityName: PropTypes.string.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  onSubmitCity: PropTypes.func.isRequired
}

module.exports = Home;
