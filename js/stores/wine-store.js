/**
 * Created by j.calabrese on 8/1/15.
 */
var Dispatcher = require('../dispatcher/app-dispatcher');
var WineActionConstants = require('../constants/wine-action-constants');


var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var wines = [];


var WineStore = assign({}, EventEmitter.prototype, {

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function (callback) {
    this.on('change', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  },

  getAll: function () {
    return wines;
  }
});

Dispatcher.register(function (payload) {
  switch (payload.action.actionType) {
    case WineActionConstants.LIST_WINES:
      wines = payload.action.wines;
      break;
    case WineActionConstants.ADD_WINE:
      wines.push(payload.action.wine);
      break;
    default:
  }
  WineStore.emitChange();
});

module.exports = WineStore;