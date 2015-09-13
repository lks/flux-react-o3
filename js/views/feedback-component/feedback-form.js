/**
 * Created by j.calabrese on 8/26/15.
 */
var React = require('react');

var FeedbackConstants = require('../../constants/feedback-constants');

var FeedbackForm = React.createClass({
  /**
   * Build and dispatchEvent to manage the addition of a feedback in the list
   * @param e
   * @private
   */
  _onAdd: function (e) {
    var type = this.refs.feedbackAdjust.getDOMNode().checked;
    var name = this.refs.feedbackName.getDOMNode().value;
    var description = this.refs.feedbackDescription.getDOMNode().value;
    var feedback = {
      adjust: type,
      name: name,
      description: description
    };

    var feedbackEvent = new CustomEvent(FeedbackConstants.FEEDBACK_ADD,
      {
        detail: {feedback: feedback},
        bubbles: true
      }
    );
    window.dispatchEvent(feedbackEvent);
  },

  render: function () {
    return (
      <div ref="feedbackAdd">
        <div className="large-9 columns">
          <label htmlFor="exampleCheckboxSwitch" className="label-switch">Adjustment feedback</label>
        </div>
        <div className="large-3 columns">
          <div className="switch round small">
            <input ref="feedbackAdjust" id="exampleCheckboxSwitch" type="checkbox" />
            <label htmlFor="exampleCheckboxSwitch">sqdqsdqsdqsdqsdqsdsqd</label>
          </div>
        </div>
        <div className="large-12 columns">
          <input ref="feedbackName" type="text" placeholder="Name" required />
        </div>
        <div className="large-12 columns">
          <textarea ref="feedbackDescription" placeholder="Description" rows="8"/>
        </div>
        <div className="large-7 large-centered columns">
          <a className="button round" ref="actionsAdd" onClick={this._onAdd}>Add Feedback</a>
        </div>
      </div>
    );
  }
});

module.exports = FeedbackForm;