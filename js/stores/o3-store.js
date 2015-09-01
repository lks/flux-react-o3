/**
 * Created by j.calabrese on 8/24/15.
 */
var Dispatcher = require('../dispatcher/app-dispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var feedbacks = [];


var O3Store = assign({}, EventEmitter.prototype, {});

module.exports = O3Store;