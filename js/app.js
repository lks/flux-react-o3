var React = require('react');

var Wines = require('./views/wines');
var O3Home = require('./views/o3-home');

/**
 * Created by j.calabrese on 8/31/15.
 */
var Router = require('react-router');
var Route = Router.Route;

var O3Form  = require('./views/o3-form');

// declare our routes and their hierarchy
var routes = (
  <Route handler={App}>

    <Route path="/" handler={O3Home}/>
    <Route path="/create" handler={O3Form}/>
  </Route>
);

Router.run(routes, Router.HashLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});

var App = React.createClass({

  render: function () {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
});

