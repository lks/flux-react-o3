/**
 * Created by j.calabrese on 8/27/15.
 */
jest.dontMock('../feedback-item.js');

CustomEvent = function(name, params){ return params;};

describe('FeedbackItem', function() {
  it('send an event when I click on the remove button', function() {
    var React = require('react/addons');
    var FeedbackItem = require('../feedback-item.js');
    var TestUtils = React.addons.TestUtils;

    var feedback = {
      name: "TEST",
      description: "TEST"
    };

    // Render a checkbox with label in the document
    var item = TestUtils.renderIntoDocument(
      <FeedbackItem feedback={feedback} />
    );

    window.dispatchEvent = jest.genMockFunction();
    TestUtils.Simulate.click(item.refs.removeButton.getDOMNode());
    expect(window.dispatchEvent.mock.calls.length).toEqual(1);
  });
});