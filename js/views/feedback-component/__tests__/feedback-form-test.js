/**
 * Created by j.calabrese on 8/27/15.
 */
jest.dontMock('../feedback-form.js');

CustomEvent = function(name, params){ return params;};

describe('FeedbackForm', function() {
  it('send an event with the new feedback', function() {
    var React = require('react/addons');
    var FeedbackForm = require('../feedback-form.js');
    var TestUtils = React.addons.TestUtils;

    var feedback = {
      type: null,
      name: "Test",
      description: "Test description"
    };

    // Render a checkbox with label in the document
    var item = TestUtils.renderIntoDocument(
      <FeedbackForm />
    );

    var name = item.refs.feedbackName.getDOMNode();
    name.value = "Test";
    React.addons.TestUtils.Simulate.change(name);

    var description = item.refs.feedbackDescription.getDOMNode();
    description.value = "Test description";
    React.addons.TestUtils.Simulate.change(description);

    window.dispatchEvent = jest.genMockFunction();
    TestUtils.Simulate.click(item.refs.feedbackAdd.getDOMNode());
    expect(window.dispatchEvent.mock.calls.length).toEqual(1);
    expect(window.dispatchEvent.mock.calls[0][0].detail.feedback).toEqual(feedback);

  });
});