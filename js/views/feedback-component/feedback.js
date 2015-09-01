/**
 * Created by j.calabrese on 8/26/15.
 */
var React = require('react');

var FeedbackForm = require('./feedback-form');
var FeedbackList = require('./feedback-list');

/**
 * This component is the parent component in order to manage the feedback.
 * This component manages the following features:
 * - Create a feedback via a form
 * - List the feedback
 * - Remove a feedback
 */
var Feedback = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="large-5 columns">
          <div className="row">
            <FeedbackForm />
          </div>
        </div>
        <div className="large-7 columns">
          <FeedbackList feedback={this.props.feedback} />
        </div>
      </div>
    );
  }
});

module.exports = Feedback;