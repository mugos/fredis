'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flushall = undefined;

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

var _fredis = require('./fredis');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Start client
var client = _redis2.default.createClient({ host: 'redis' });

//
//


var flushall = (0, _fredis.flushall)(client);

exports.flushall = flushall;