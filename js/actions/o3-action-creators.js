var AppDispatcher = require('../dispatcher/app-dispatcher');
var Api = require('../utils/o3-api-utils');
var Promise = require('es6-promise').Promise; // jshint ignore:line

/**
 * This action creator manage all actions conserning
 * @type {{createWine: Function, getAllWine: Function}}
 */
module.exports = {

  createO3: function (o3) {
    Api
      .addO3Data(o3)
      .then(function () {
        AppDispatcher.handleViewAction({
          actionType: "CREATE_O3",
          o3: o3
        })
      })
      .catch(function () {
        AppDispatcher.handleViewAction({
          actionType: "ERROR_RECEIVE",
          error: 'Error'
        })
      });
  },

  getAllWine: function () {
    Api
      .getO3Data()
      .then(function (wines) {
        AppDispatcher.handleViewAction({
          actionType: WineActionConstants.LIST_WINES,
          wines: wines
        })
      })
      .catch(function () {
        AppDispatcher.handleViewAction({
          actionType: ActionConstants.ERROR_RECEIVE,
          error: 'There was a problem getting the wines'
        })
      });
  }
};