/**
 * Created by j.calabrese on 8/30/15.
 */
var React = require('react');

var UserList = require('./user-list-component/user-list');

var O3Home = React.createClass({
  render: function () {
    return (
      <div className="row">
        <UserList />
      </div>
    );
  }
});

module.exports = O3Home;