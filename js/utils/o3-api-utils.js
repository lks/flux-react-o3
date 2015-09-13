var request = require('superagent');
var FirebaseUtils = require('../utils/firebase-utils');
var Promise = require('es6-promise').Promise; // jshint ignore:line

var Api = {
  getO3Data: function () {
    return new Promise(function (resolve, reject) {
      request
        .get("https://o3.firebaseio.com/o3.json")
        .set('Content-Type', 'application/json')
        .end(function (res) {
          if (res.status === 404) {
            reject();
          } else {
            resolve(FirebaseUtils.convertToArray(res.body));
          }
        });
    });
  },

  addO3Data: function (o3) {
    return this._buildPostRequest(
      "https://o3.firebaseio.com/o3.json",
      'application/json',
      o3);
  },

  addUserData: function (user) {
    return this._buildPostRequest(
      "https://o3.firebaseio.com/users.json",
      'application/json',
      user);
  },

  listUserData: function (user) {
    return new Promise(function (resolve, reject) {
      request
        .get("https://o3.firebaseio.com/users.json")
        .set('Content-Type', 'application/json')
        .end(function (res) {
          if (res.status === 404) {
            reject();
          } else {
            resolve(FirebaseUtils.convertToArray(res.body));
          }
        });
    });
  },

  removeUserData: function(userId) {
    console.log("https://o3.firebaseio.com/users/"+ userId +"/.json");
    return new Promise(function (resolve, reject) {
      request
        .del("https://o3.firebaseio.com/users/"+ userId +"/.json")
        .end(function (res) {

          if (res.status === 404) {
            reject();
          } else {
            resolve(true);
          }
        });
    });
  },

  _buildPostRequest: function (url, contentType, param) {
    return new Promise(function (resolve, reject) {
      request
        .post(url)
        .set('Content-Type', contentType)
        .send(param)
        .end(function (res) {
          if (res.status === 404) {
            reject();
          } else {
            var result = {
              key: res.body.name,
              value:  param
            };
            resolve(result);
          }
        });
    });
  }
};

module.exports = Api;
