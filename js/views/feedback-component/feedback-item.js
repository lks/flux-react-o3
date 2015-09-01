/**
 * Created by j.calabrese on 8/27/15.
 */
var React = require('react');

var FeedbackConstants = require('../../constants/feedback-constants');

var FeedbackItem = React.createClass({

  _onRemove: function () {
    var customEvent = new CustomEvent(FeedbackConstants.FEEDBACK_REMOVE,
      {
        detail: {feedback: this.props.feedback},
        bubbles: true
      }
    );
    window.dispatchEvent(customEvent);
  },

  render: function () {
    return (
      <div ref="removeItem" className="row">
        <div className="large-1 columns">
          <div className={this.props.feedback.adjust ? "circle adjust-feedback" : "circle positive-feedback"}></div>
        </div>
        <div className="large-10 columns list">
          <h3>{this.props.feedback.name}</h3>
          <p>{this.props.feedback.description}</p>
        </div>
        <div className="large-1 columns">
          <a ref="removeButton" href="#" onClick={this._onRemove}><i className="fa fa-remove fa-1x"></i></a>
        </div>
        <hr />
      </div>
    );
  }
});

module.exports = FeedbackItem;
