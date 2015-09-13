/**
 * Created by j.calabrese on 8/31/15.
 */
var Dispatcher = require('../dispatcher/app-dispatcher');
var UserConstants = require('../constants/user-constants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var users = [];

/**
 * Manage the User data.
 */
var UserStore = assign({}, EventEmitter.prototype, {
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
    return users;
  },

  removeUser: function (user) {
    var items = users.filter(function (itm) {
      return user.key != itm.key;
    });
    users = items;
  }
});

Dispatcher.register(function (payload) {
  switch (payload.action.actionType) {
    case UserConstants.LIST_USER:
      users = payload.action.users;
      break;
    case UserConstants.ADD_USER:
      users.push(payload.action.user);
      break;
    case UserConstants.REMOVE_USER:
      UserStore.removeUser(payload.action.user);
      break;
    default:
  }
  UserStore.emitChange();
});

module.exports = UserStore;