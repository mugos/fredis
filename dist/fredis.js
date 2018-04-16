//  Ramda v0.0.0
//  https://github.com/mugos/fredis
//  (c) 2018-2018//  fRedis may be freely distributed under the MIT license.

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ramda'), require('redis')) :
  typeof define === 'function' && define.amd ? define(['exports', 'ramda', 'redis'], factory) :
  (factory((global.R = {}),global.ramda,global.redis));
}(this, (function (exports,ramda,redis) { 'use strict';

  redis = redis && redis.hasOwnProperty('default') ? redis['default'] : redis;

  const defRedis = name => (...args) => ctx => {
    return new Promise((resolve, reject) => {
      const cb = ramda.curry((resolve, reject, e, r) => ramda.isNil(e) ? resolve(r) : reject(e));
      ctx[name](...args.concat(cb(resolve, reject)));
    })
  };

  // TODO: export only method no logic
  const flushall = client => env => ramda.cond([
    [ramda.equals("dev"), env => defRedis('flushall')()],
    [ramda.T, () => { throw new Error("Can't do dat here") }]
  ])(env)(client);

  //

  // Start client
  const client = redis.createClient({ host: 'redis' });

  const flushall$1 = flushall(client);

  exports.flushall = flushall$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
