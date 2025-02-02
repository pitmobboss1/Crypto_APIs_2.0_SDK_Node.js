"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListTokensForwardingAutomationsRITSET model module.
 * @module model/ListTokensForwardingAutomationsRITSET
 * @version 1.7.3
 */
var ListTokensForwardingAutomationsRITSET = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTokensForwardingAutomationsRITSET</code>.
   * Ethereum Token
   * @alias module:model/ListTokensForwardingAutomationsRITSET
   * @param contractAddress {String} Defines the token contract address.
   */
  function ListTokensForwardingAutomationsRITSET(contractAddress) {
    _classCallCheck(this, ListTokensForwardingAutomationsRITSET);

    ListTokensForwardingAutomationsRITSET.initialize(this, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTokensForwardingAutomationsRITSET, null, [{
    key: "initialize",
    value: function initialize(obj, contractAddress) {
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>ListTokensForwardingAutomationsRITSET</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTokensForwardingAutomationsRITSET} obj Optional instance to populate.
     * @return {module:model/ListTokensForwardingAutomationsRITSET} The populated <code>ListTokensForwardingAutomationsRITSET</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTokensForwardingAutomationsRITSET();

        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListTokensForwardingAutomationsRITSET;
}();
/**
 * Defines the token contract address.
 * @member {String} contractAddress
 */


ListTokensForwardingAutomationsRITSET.prototype['contractAddress'] = undefined;
var _default = ListTokensForwardingAutomationsRITSET;
exports["default"] = _default;