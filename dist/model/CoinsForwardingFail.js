"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CoinsForwardingFailData = _interopRequireDefault(require("./CoinsForwardingFailData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CoinsForwardingFail model module.
 * @module model/CoinsForwardingFail
 * @version 1.2.0
 */
var CoinsForwardingFail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoinsForwardingFail</code>.
   * @alias module:model/CoinsForwardingFail
   * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
   * @param referenceId {String} Represents a unique identifier that serves as reference to the specific request which prompts a callback, e.g. Blockchain Events Subscription, Blockchain Automation, etc.
   * @param idempotencyKey {String} Specifies a unique ID generated by the system and attached to each callback. It is used by the server to recognize consecutive requests with the same data with the purpose not to perform the same operation twice.
   * @param data {module:model/CoinsForwardingFailData} 
   */
  function CoinsForwardingFail(apiVersion, referenceId, idempotencyKey, data) {
    _classCallCheck(this, CoinsForwardingFail);

    CoinsForwardingFail.initialize(this, apiVersion, referenceId, idempotencyKey, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoinsForwardingFail, null, [{
    key: "initialize",
    value: function initialize(obj, apiVersion, referenceId, idempotencyKey, data) {
      obj['apiVersion'] = apiVersion;
      obj['referenceId'] = referenceId;
      obj['idempotencyKey'] = idempotencyKey;
      obj['data'] = data;
    }
    /**
     * Constructs a <code>CoinsForwardingFail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoinsForwardingFail} obj Optional instance to populate.
     * @return {module:model/CoinsForwardingFail} The populated <code>CoinsForwardingFail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoinsForwardingFail();

        if (data.hasOwnProperty('apiVersion')) {
          obj['apiVersion'] = _ApiClient["default"].convertToType(data['apiVersion'], 'String');
        }

        if (data.hasOwnProperty('referenceId')) {
          obj['referenceId'] = _ApiClient["default"].convertToType(data['referenceId'], 'String');
        }

        if (data.hasOwnProperty('idempotencyKey')) {
          obj['idempotencyKey'] = _ApiClient["default"].convertToType(data['idempotencyKey'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _CoinsForwardingFailData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return CoinsForwardingFail;
}();
/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */


CoinsForwardingFail.prototype['apiVersion'] = undefined;
/**
 * Represents a unique identifier that serves as reference to the specific request which prompts a callback, e.g. Blockchain Events Subscription, Blockchain Automation, etc.
 * @member {String} referenceId
 */

CoinsForwardingFail.prototype['referenceId'] = undefined;
/**
 * Specifies a unique ID generated by the system and attached to each callback. It is used by the server to recognize consecutive requests with the same data with the purpose not to perform the same operation twice.
 * @member {String} idempotencyKey
 */

CoinsForwardingFail.prototype['idempotencyKey'] = undefined;
/**
 * @member {module:model/CoinsForwardingFailData} data
 */

CoinsForwardingFail.prototype['data'] = undefined;
var _default = CoinsForwardingFail;
exports["default"] = _default;