/**
 * Created by j.calabrese on 8/31/15.
 */
var React = require('react');

var UserActionCreators = require('../../actions/user-action-creators');
var UserStore = require('../../stores/user-store');
var UserItem = require('./user-list-item');


var UserList = React.createClass({
  getInitialState: function () {
    return {users: []};
  },

  componentWillMount: function () {
    UserStore.addChangeListener(this._onChange);
  },

  componentDidMount: function () {
    UserActionCreators.listUser();
    window.addEventListener("REMOVE_USER", this._onRemove, false);

  },

  componentWillUnmount: function () {
    UserStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      users: UserStore.getAll()
    });
  },

  _createList: function (users) {
    var items = users.map(function (user) {
      return (
        <UserItem key={user.key} user={user} />
      )
    });

    return items;
  },

  _onAdd: function() {
    var userName = this.refs.userName.getDOMNode().value;
    var user = {
      name: userName
    };

    UserActionCreators.createUser(user);
  },

  _onRemove: function (e) {
    UserActionCreators.removeUser(e.detail.user);
  },

  render: function () {
    var users = this._createList(this.state.users);
    return (
      <div>
        <div className="row">
            <h1>Add a new collaborateur</h1>
            <div className="large-10 columns">
              <input ref="userName" type="text" placeholder="Collab name" />
            </div>
            <div className="large-2 columns">
              <button className="round" onClick={this._onAdd}>Add</button>
            </div>
        </div>
        <div>
          {users}
        </div>
      </div>
    );
  }
});

module.exports = UserList;