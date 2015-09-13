/**
 * Created by j.calabrese on 8/26/15.
 */
var React = require('react');
require('react-widgets/dist/css/react-widgets.css');
var DateTimePicker = require('react-widgets/lib/DateTimePicker');

var ActionsConstants = require('../../constants/actions-constants');

var ActionsForm = React.createClass({
  getInitialState() {
    return { action: {} };
  },

  /**
   * Build and dispatchEvent to manage the addition of a feedback in the list
   * @param e
   * @private
   */
  _onAdd: function (e) {
    var action = this.state.action;
    var owner = this.refs.actionsOwner.getDOMNode().value;
    var name = this.refs.actionsName.getDOMNode().value;
    var description = this.refs.actionsDescription.getDOMNode().value;
    action.owner = owner;
    action.name = name;
    action.description = description;

    var actionsEvent = new CustomEvent(ActionsConstants.ACTIONS_ADD,
      {
        detail: {action: action},
        bubbles: true
      }
    );
    window.dispatchEvent(actionsEvent);
  },

  onChange: function (e) {
    var action = this.state.action;
    action.dueDate = e;
    this.setState({action: action});
  },

  render: function () {
    var items = this.props.users.map(function (user) {
      return (
        <option key={user.key} value={user.value.name}>{user.value.name}</option>
      )
    });

    return (
      <div ref="actionsAdd">
        <div className="large-12 columns">
          <DateTimePicker defaultValue={new Date()} time={false} onChange={this.onChange} />
        </div>
        <div className="large-12 columns">
          <select ref="actionsOwner" >
          {items}
            <option>Me</option>
          </select>
        </div>
        <div className="large-12 columns">
          <input ref="actionsName" type="text" placeholder="Name" required />
        </div>
        <div className="large-12 columns">
          <textarea ref="actionsDescription" placeholder="Description" rows="8"/>
        </div>
        <div className="large-7 large-centered columns">
          <a className="button round" ref="actionsAdd" onClick={this._onAdd}>Add Actions</a>
        </div>
      </div>
    );
  }
});

module.exports = ActionsForm;