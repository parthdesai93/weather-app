var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;

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
              <div onClick={props.handleClick.bind(null,0)}>
                <div className="col-xs-12 col-sm-4">
                  <h2> {props.forecastData[0].description}</h2>
                  <h3> {props.forecastData[0].day} , {props.forecastData[0].month + ' ' + props.forecastData[0].date} </h3>
                </div>
              </div>
              <div onClick={props.handleClick.bind(null,1)}>
                <div className="col-xs-12 col-sm-4">
                  <h2> {props.forecastData[1].description}</h2>
                  <h3> {props.forecastData[1].day} , {props.forecastData[1].month + ' ' + props.forecastData[1].date} </h3>
                </div>
              </div>
              <div onClick={props.handleClick.bind(null,2)}>
                <div className="col-xs-12 col-sm-4">
                  <h2> {props.forecastData[2].description}</h2>
                  <h3> {props.forecastData[2].day} , {props.forecastData[2].month + ' ' + props.forecastData[2].date} </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div onClick={props.handleClick.bind(null,4)}>
                <div className="col-xs-12 col-sm-4">
                  <h2> {props.forecastData[3].description}</h2>
                  <h3> {props.forecastData[3].day} , {props.forecastData[3].month + ' ' + props.forecastData[3].date} </h3>
                </div>
              </div>
              <div onClick={props.handleClick.bind(null,5)}>
                <div className="col-xs-12 col-sm-4 col-sm-offset-4">
                  <h2> {props.forecastData[4].description}</h2>
                  <h3> {props.forecastData[4].day} , {props.forecastData[4].month + ' ' + props.forecastData[4].date} </h3>
                </div>
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
