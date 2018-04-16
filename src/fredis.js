'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rawFlushall = exports.flushall = exports.exists = exports.incr = exports.hmset = exports.deleteNamespace = exports.scanPattern = exports.scan = exports.set = exports.sadd = exports.smembers = exports.sismember = exports.srem = exports.hgetall = exports.del = exports.composeRedis = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defRedis = function defRedis(name) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return function (ctx) {
      return new _promise2.default(function (resolve, reject) {
        var cb = (0, _ramda.curry)(function (resolve, reject, e, r) {
          return (0, _ramda.isNil)(e) ? resolve(r) : reject(e);
        });
        ctx[name].apply(ctx, (0, _toConsumableArray3.default)(args.concat(cb(resolve, reject))));
      });
    };
  };
};

var composeRedis = function composeRedis(client) {
  return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var r, context;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            r = function r(ctx) {
              return function (fn) {
                return fn(ctx);
              };
            };

            context = client.multi();

            (0, _ramda.map)(r(context), args);

            return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
              var cb = (0, _ramda.curry)(function (resolve, reject, e, r) {
                return (0, _ramda.isNil)(e) ? resolve(r) : reject(e);
              });
              context.exec(cb(resolve, reject));
            }));

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));
};

var del = defRedis('del');
var srem = defRedis('srem');
var sismember = defRedis('sismember');
var smembers = defRedis('smembers');
var sadd = defRedis('sadd');
var set = defRedis('set');
var hgetall = defRedis('hgetall');
var hmset = defRedis('hmset');
var scan = defRedis('scan');
var incr = defRedis('incr');
var exists = defRedis('exists');

//
var scanPattern = function scanPattern(client) {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(pattern, pointer) {
      var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var res;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(pointer === "0")) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt('return', keys);

            case 2:
              _context2.next = 4;
              return scan(pointer || "0", 'MATCH', pattern)(client);

            case 4:
              res = _context2.sent;
              _context2.next = 7;
              return scanPattern(client)(pattern, res[0], (0, _ramda.concat)(res[1], keys));

            case 7:
              return _context2.abrupt('return', _context2.sent);

            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

//
var deleteNamespace = function deleteNamespace(client) {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(ns) {
      var keys;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return scanPattern(client)(ns + ':*');

            case 2:
              keys = _context3.sent;
              return _context3.abrupt('return', del.apply(undefined, (0, _toConsumableArray3.default)(keys))(client));

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
};

// TODO: export only method no logic
var flushall = function flushall(client) {
  return function (env) {
    return (0, _ramda.cond)([[(0, _ramda.equals)("dev"), function (env) {
      return defRedis('flushall')();
    }], [_ramda.T, function () {
      throw new Error("Can't do dat here");
    }]])(env)(client);
  };
};

var rawFlushall = defRedis('flushall');

exports.composeRedis = composeRedis;
exports.del = del;
exports.hgetall = hgetall;
exports.srem = srem;
exports.sismember = sismember;
exports.smembers = smembers;
exports.sadd = sadd;
exports.set = set;
exports.scan = scan;
exports.scanPattern = scanPattern;
exports.deleteNamespace = deleteNamespace;
exports.hmset = hmset;
exports.incr = incr;
exports.exists = exists;
exports.flushall = flushall;
exports.rawFlushall = rawFlushall;