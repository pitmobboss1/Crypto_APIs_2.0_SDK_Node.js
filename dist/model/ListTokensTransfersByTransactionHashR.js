"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTokensTransfersByTransactionHashRData = _interopRequireDefault(require("./ListTokensTransfersByTransactionHashRData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTokensTransfersByTransactionHashR model module.
 * @module model/ListTokensTransfersByTransactionHashR
 * @version 1.2.0
 */
var ListTokensTransfersByTransactionHashR = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTokensTransfersByTransactionHashR</code>.
   * @alias module:model/ListTokensTransfersByTransactionHashR
   * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
   * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
   * @param data {module:model/ListTokensTransfersByTransactionHashRData} 
   */
  function ListTokensTransfersByTransactionHashR(apiVersion, requestId, data) {
    _classCallCheck(this, ListTokensTransfersByTransactionHashR);

    ListTokensTransfersByTransactionHashR.initialize(this, apiVersion, requestId, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTokensTransfersByTransactionHashR, null, [{
    key: "initialize",
    value: function initialize(obj, apiVersion, requestId, data) {
      obj['apiVersion'] = apiVersion;
      obj['requestId'] = requestId;
      obj['data'] = data;
    }
    /**
     * Constructs a <code>ListTokensTransfersByTransactionHashR</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTokensTransfersByTransactionHashR} obj Optional instance to populate.
     * @return {module:model/ListTokensTransfersByTransactionHashR} The populated <code>ListTokensTransfersByTransactionHashR</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTokensTransfersByTransactionHashR();

        if (data.hasOwnProperty('apiVersion')) {
          obj['apiVersion'] = _ApiClient["default"].convertToType(data['apiVersion'], 'String');
        }

        if (data.hasOwnProperty('requestId')) {
          obj['requestId'] = _ApiClient["default"].convertToType(data['requestId'], 'String');
        }

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ListTokensTransfersByTransactionHashRData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return ListTokensTransfersByTransactionHashR;
}();
/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */


ListTokensTransfersByTransactionHashR.prototype['apiVersion'] = undefined;
/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */

ListTokensTransfersByTransactionHashR.prototype['requestId'] = undefined;
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */

ListTokensTransfersByTransactionHashR.prototype['context'] = undefined;
/**
 * @member {module:model/ListTokensTransfersByTransactionHashRData} data
 */

ListTokensTransfersByTransactionHashR.prototype['data'] = undefined;
var _default = ListTokensTransfersByTransactionHashR;
exports["default"] = _default;