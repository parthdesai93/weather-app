var React = require('react');
var PropTypes = React.PropTypes;

function parseData(data){
  console.log("in paerse data");
  console.log(data);
  var formattedData = data.map(function(obj){
    var weather = {};
    console.log('inmap');
    weather['humdity'] = obj.humidity;
    weather['min_temp'] = obj.temp.min;
    weather['max_temp'] = obj.temp.max;
    weather['date'] = obj.dt;
    return weather;
  })
  console.log(formattedData);
}

function Forecast(props){
  return(
    props.isLoading === true
      ? <div> Loading </div>
      : <div>
          {console.log(props)}
          {parseData(props.forecastData)}
          <h2>Data Loaded</h2>
        </div>
  )
}

Forecast.propTypes = {
  forecastData: PropTypes.array,
  isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast;
