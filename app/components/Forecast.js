var React = require('react');
var PropTypes = React.PropTypes;


function Forecast(props){
  return(
    props.isLoading === true
      ? <div> Loading </div>
      : <div>
          {console.log(props)}
          <div className="container" >
            <div className="row">
              <h1 className="text-center">{props.cityName}</h1>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <h2> {props.forecastData[0].description}</h2>
                <h3> {props.forecastData[0].day} , {props.forecastData[0].month + ' ' + props.forecastData[0].date} </h3>
              </div>
              <div className="col-xs-4">
                <h2> {props.forecastData[1].description}</h2>
                <h3> {props.forecastData[1].day} , {props.forecastData[1].month + ' ' + props.forecastData[1].date} </h3>
              </div>
              <div className="col-xs-4">
                <h2> {props.forecastData[2].description}</h2>
                <h3> {props.forecastData[2].day} , {props.forecastData[2].month + ' ' + props.forecastData[2].date} </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <h2> {props.forecastData[3].description}</h2>
                <h3> {props.forecastData[3].day} , {props.forecastData[3].month + ' ' + props.forecastData[3].date} </h3>
              </div>
              <div className="col-xs-4 col-xs-offset-4">
                <h2> {props.forecastData[4].description}</h2>
                <h3> {props.forecastData[4].day} , {props.forecastData[4].month + ' ' + props.forecastData[4].date} </h3>
              </div>
            </div>
          </div>
      </div>
  )
}

Forecast.propTypes = {
  forecastData: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  cityName: PropTypes.string.isRequired
}

module.exports = Forecast;
