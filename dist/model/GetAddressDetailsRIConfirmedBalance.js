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
 * The GetAddressDetailsRIConfirmedBalance model module.
 * @module model/GetAddressDetailsRIConfirmedBalance
 * @version 1.7.3
 */
var GetAddressDetailsRIConfirmedBalance = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAddressDetailsRIConfirmedBalance</code>.
   * @alias module:model/GetAddressDetailsRIConfirmedBalance
   * @param amount {String} Defines the total balance of the address that is confirmed. It doesn't include unconfirmed transactions.
   * @param unit {String} Represents the unit of the confirmed balance.
   */
  function GetAddressDetailsRIConfirmedBalance(amount, unit) {
    _classCallCheck(this, GetAddressDetailsRIConfirmedBalance);

    GetAddressDetailsRIConfirmedBalance.initialize(this, amount, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetAddressDetailsRIConfirmedBalance, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>GetAddressDetailsRIConfirmedBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddressDetailsRIConfirmedBalance} obj Optional instance to populate.
     * @return {module:model/GetAddressDetailsRIConfirmedBalance} The populated <code>GetAddressDetailsRIConfirmedBalance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAddressDetailsRIConfirmedBalance();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetAddressDetailsRIConfirmedBalance;
}();
/**
 * Defines the total balance of the address that is confirmed. It doesn't include unconfirmed transactions.
 * @member {String} amount
 */


GetAddressDetailsRIConfirmedBalance.prototype['amount'] = undefined;
/**
 * Represents the unit of the confirmed balance.
 * @member {String} unit
 */

GetAddressDetailsRIConfirmedBalance.prototype['unit'] = undefined;
var _default = GetAddressDetailsRIConfirmedBalance;
exports["default"] = _default;