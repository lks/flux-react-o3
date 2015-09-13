/**
 * Created by j.calabrese on 8/26/15.
 */
var React = require('react');

var FeedbackItem = require('./feedback-item');

var FeedbackList = React.createClass({

  getDefaultProps: function () {
    return {feedback: []};
  },

  _createList: function (feedback) {
    var items = feedback.map(function (feedback) {
      return (
        <FeedbackItem key={feedback.name} feedback={feedback} />
      )
    });
    return items;
  },

  render: function () {
    var feedback = this._createList(this.props.feedback);
    return (
      <div>
        {feedback}
      </div>
    );
  }
});

module.exports = FeedbackList;