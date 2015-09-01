/**
 * Created by j.calabrese on 8/24/15.
 */
var React = require('react');

var Feedback = require('./feedback-component/feedback');
var Actions = require('./actions-component/actions');
var O3ActionCreators = require('../actions/o3-action-creators');
var FeedbackConstants = require('../constants/feedback-constants');

var O3From = React.createClass({
  getInitialState: function () {
    return {
      feedback: [],
      actions: []
    };
  },

  componentDidMount: function () {
    window.addEventListener(FeedbackConstants.FEEDBACK_ADD, this._onAddFeedback, false);
    window.addEventListener(FeedbackConstants.FEEDBACK_REMOVE, this._onRemoveFeedback, false);
  },

  _onAddFeedback: function (e) {
    var items = this.state.feedback;
    items.push(e.detail.feedback);
    this.setState({feedback: items});
  },

  _onRemoveFeedback: function (e) {
    var items = this.state.feedback.filter(function (itm) {
      return e.detail.feedback.value.name !== itm.value.name;
    });

    this.setState({feedback: items});

  },

  _onSubmit: function (e) {
    O3ActionCreators.createO3({
      member: this.refs.member.getDOMNode().value,
      memberWords: this.refs.memberWords.getDOMNode().value,
      myWords: this.refs.myWords.getDOMNode().value,
      feedback: this.state.feedback
    });
  },

  render: function () {
    return (
      <div className='o3-form'>
        <div className="row">
          <div className="large-12 columns">
            <label>Who
              <select ref="member">
                <option value='loic.doubinine'>Loïc</option>
                <option value='nicolas.berard'>Nicolas</option>
                <option value='francois.pezier'>François</option>
              </select>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="large-6 columns">
            <label>His feedbacks
              <textarea ref="memberWords" rows="8" />
            </label>
          </div>
          <div className="large-6 columns">
            <label>Mine
              <textarea ref="myWords" rows="8" />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <hr />
            <h3>Feedback</h3>
            <hr />
          </div>
        </div>
        <Feedback feedback={this.state.feedback} />
        <div className="row">
          <div className="large-12 columns">
            <hr />
            <h3>Actions</h3>
            <hr />
          </div>
        </div>
        <Actions actions={this.state.actions} />

        <button onClick={this._onSubmit}>Save</button>
      </div>

    );
  }
});

module.exports = O3From;