/**
 * Created by j.calabrese on 8/27/15.
 */
var React = require ('react');
var ActionsForm = require('./actions-form');
var UserActionCreators = require('../../actions/user-action-creators');
var UserStore = require('../../stores/user-store');

var Actions = React.createClass({
  getInitialState: function () {
    return {users: []};
  },

  componentWillMount: function () {
    UserStore.addChangeListener(this._onChange);
  },

  componentDidMount: function () {
    UserActionCreators.listUser();
  },

  _onChange: function () {
    this.setState({
      users: UserStore.getAll()
    });
  },

  render: function () {
    return (
      <div className="row">
        <div className="large-5 columns">
          <div className="row">
            <ActionsForm users={this.state.users} />
          </div>
        </div>
        <div className="large-7 columns">
          {this.props.actions}
        </div>
      </div>
    );
  }
});

module.exports = Actions;