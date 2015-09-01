var AppDispatcher = require('../dispatcher/app-dispatcher');
var Api = require('../utils/o3-api-utils');
var Promise = require('es6-promise').Promise; // jshint ignore:line
var ActionConstants = require('../constants/global-constants');
var WineActionConstants = require('../constants/wine-action-constants');

/**
 * This action creator manage all actions conserning
 * @type {{createWine: Function, getAllWine: Function}}
 */
module.exports = {

  /**
   * Called by the WineStore in order to add the given wine to our collection.
   * Promise is used to manage the asynchronous call of the API.
   * When the request is resolved, an action "ADD_WINE" is dispatched with the list of the added wine.
   *
   * @param wine
   */
  createWine: function (wine) {
    Api
      .addWineData(wine)
      .then(function () {
        AppDispatcher.handleViewAction({
          actionType: WineActionConstants.ADD_WINE,
          wine: wine
        })
      })
      .catch(function () {
        AppDispatcher.handleViewAction({
          actionType: WineActionConstants.ERROR_ADD_WINE_RECEIVE,
          error: 'There was a problem getting the wines'
        })
      });
  },
  /**
   * Called by the WineStore in order to get all wines via the API module
   * Promise is used to manage the asynchronous call of the API.
   * When the request is resolved, an action "GET_ALL_WINES" is dispatched with the list of the wines as parameters.
   */
  getAllWine: function () {
    Api
      .getAllWineData()
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