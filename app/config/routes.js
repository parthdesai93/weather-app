var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var HomeContainer = require('../containers/HomeContainer');
var ForecastContainer = require('../containers/ForecastContainer');
var DetailWeatherContainer = require('../containers/DetailWeatherContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main} >
       <IndexRoute component={HomeContainer} />
       <Route path="/forecast" component={ForecastContainer} />
       <Route path="/detail" component={DetailWeatherContainer} />
    </Route>
  </Router>
);

module.exports = routes;
