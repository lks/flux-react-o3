/**
 * Created by j.calabrese on 8/31/15.
 */
var AppDispatcher = require('../dispatcher/app-dispatcher');
var UserConstants = require('../constants/user-constants');
var Api = require('../utils/o3-api-utils');
var Promise = require('es6-promise').Promise; // jshint ignore:line

module.exports = {
  createUser: function (user) {
    Api
      .addUserData(user)
      .then(function (result) {
        console.log('result' + result);
        AppDispatcher.handleViewAction({
          actionType: UserConstants.ADD_USER,
          user: result
        })
      })
      .catch(function () {
        AppDispatcher.handleViewAction({
          actionType: "ADD_ERROR_RECEIVE",
          error: 'Error'
        })
      });
  },

  listUser: function () {
    console.log("list");
    Api.listUserData()
      .then(function (result) {
        AppDispatcher.handleViewAction({
          actionType: UserConstants.LIST_USER,
          users: result
        })
      })
      .catch(function (e) {
        AppDispatcher.handleViewAction({
          actionType: "LIST_ERROR_RECEIVE",
          error: 'Error: '+ e
        })
      });
  },

  removeUser: function (user){
    Api.removeUserData(user.key)
      .then(function () {
        AppDispatcher.handleViewAction({
          actionType: UserConstants.REMOVE_USER,
          user: user
        });

      })
      .catch(function (e) {
        AppDispatcher.handleViewAction({
          actionType: "REMOVE_ERROR_RECEIVE",
          error: 'Error: '+ e
        })
      });
  }

};