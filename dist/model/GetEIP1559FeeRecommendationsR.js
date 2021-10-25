"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetEIP1559FeeRecommendationsRData = _interopRequireDefault(require("./GetEIP1559FeeRecommendationsRData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetEIP1559FeeRecommendationsR model module.
 * @module model/GetEIP1559FeeRecommendationsR
 * @version 1.3.0
 */
var GetEIP1559FeeRecommendationsR = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetEIP1559FeeRecommendationsR</code>.
   * @alias module:model/GetEIP1559FeeRecommendationsR
   * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
   * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
   * @param data {module:model/GetEIP1559FeeRecommendationsRData} 
   */
  function GetEIP1559FeeRecommendationsR(apiVersion, requestId, data) {
    _classCallCheck(this, GetEIP1559FeeRecommendationsR);

    GetEIP1559FeeRecommendationsR.initialize(this, apiVersion, requestId, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetEIP1559FeeRecommendationsR, null, [{
    key: "initialize",
    value: function initialize(obj, apiVersion, requestId, data) {
      obj['apiVersion'] = apiVersion;
      obj['requestId'] = requestId;
      obj['data'] = data;
    }
    /**
     * Constructs a <code>GetEIP1559FeeRecommendationsR</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEIP1559FeeRecommendationsR} obj Optional instance to populate.
     * @return {module:model/GetEIP1559FeeRecommendationsR} The populated <code>GetEIP1559FeeRecommendationsR</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetEIP1559FeeRecommendationsR();

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
          obj['data'] = _GetEIP1559FeeRecommendationsRData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return GetEIP1559FeeRecommendationsR;
}();
/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */


GetEIP1559FeeRecommendationsR.prototype['apiVersion'] = undefined;
/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */

GetEIP1559FeeRecommendationsR.prototype['requestId'] = undefined;
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */

GetEIP1559FeeRecommendationsR.prototype['context'] = undefined;
/**
 * @member {module:model/GetEIP1559FeeRecommendationsRData} data
 */

GetEIP1559FeeRecommendationsR.prototype['data'] = undefined;
var _default = GetEIP1559FeeRecommendationsR;
exports["default"] = _default;