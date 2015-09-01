/**
 * Created by j.calabrese on 8/31/15.
 */
var React = require('react');

var UserListItem = React.createClass({
  getDefaultProps: function () {
    return {user: {}};
  },

  _onRemove: function () {
    var customEvent = new CustomEvent("REMOVE_USER",
      {
        detail: {
          user: this.props.user
        },
        bubbles: true
      }
    );
    window.dispatchEvent(customEvent);
  },

  render: function () {
    return (
      <div className="row">
        <div className="large-9 columns">
          <h3>{this.props.user.value.name}</h3>
        </div>
        <div className="large-2 columns">
          <a href="/#/create/:id">Create O3</a>
        </div>
        <div className="large-1 columns">
          <a ref="removeButton" href="#" onClick={this._onRemove}><i className="fa fa-remove fa-1x"></i></a>
        </div>
      </div>
    );
  }
});

module.exports = UserListItem;