//  Ramda v1.0.0
//  https://github.com/mugos/fredis
//  (c) 2018-2018//  fRedis may be freely distributed under the MIT license.

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.R = {})));
}(this, (function (exports) { 'use strict';

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

  Object.defineProperty(exports, '__esModule', { value: true });

})));
