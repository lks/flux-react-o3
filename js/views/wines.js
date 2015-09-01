var React = require('react');

var WineStore = require('../stores/wine-store');
var WineActionCreators = require('../actions/wine-action-creators');


var Wines = React.createClass({

  handleChange: function (e) {
    //this.transitionTo('/products/' + e.target.value);
  },

  getInitialState: function () {
    return {
      wines: []
    };
  },

  componentWillMount: function () {
    WineStore.addChangeListener(this._onChange);
  },

  componentDidMount: function () {
    WineActionCreators.getAllWine();
  },

  componentWillUnmount: function () {
    WineStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      wines: WineStore.getAll()
    });
  },

  render: function () {
    var wines = this.state.wines.map(function (wine, index) {
      return (
        <div className='wine' key={'wine-' + index}>
          Domain: {wine.domain}
          <br />
          <br />
          Year: {wine.year}
          <br />
          <br />
          Number: {wine.number}
          <br />
          <br />
          {wine.text}
        </div>
      )
    });

    return (
      <div className='wines'>
        {wines}
      </div>
    );
  }
});

module.exports = Wines;
