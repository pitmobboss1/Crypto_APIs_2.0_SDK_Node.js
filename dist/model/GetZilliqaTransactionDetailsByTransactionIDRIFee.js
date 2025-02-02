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
 * The GetZilliqaTransactionDetailsByTransactionIDRIFee model module.
 * @module model/GetZilliqaTransactionDetailsByTransactionIDRIFee
 * @version 1.7.3
 */
var GetZilliqaTransactionDetailsByTransactionIDRIFee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetZilliqaTransactionDetailsByTransactionIDRIFee</code>.
   * Represents the transaction fee.
   * @alias module:model/GetZilliqaTransactionDetailsByTransactionIDRIFee
   * @param amount {String} Represents the amount of the transaction fee.
   * @param unit {String} Represents the unit of the transaction fee.
   */
  function GetZilliqaTransactionDetailsByTransactionIDRIFee(amount, unit) {
    _classCallCheck(this, GetZilliqaTransactionDetailsByTransactionIDRIFee);

    GetZilliqaTransactionDetailsByTransactionIDRIFee.initialize(this, amount, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetZilliqaTransactionDetailsByTransactionIDRIFee, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>GetZilliqaTransactionDetailsByTransactionIDRIFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetZilliqaTransactionDetailsByTransactionIDRIFee} obj Optional instance to populate.
     * @return {module:model/GetZilliqaTransactionDetailsByTransactionIDRIFee} The populated <code>GetZilliqaTransactionDetailsByTransactionIDRIFee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetZilliqaTransactionDetailsByTransactionIDRIFee();

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

  return GetZilliqaTransactionDetailsByTransactionIDRIFee;
}();
/**
 * Represents the amount of the transaction fee.
 * @member {String} amount
 */


GetZilliqaTransactionDetailsByTransactionIDRIFee.prototype['amount'] = undefined;
/**
 * Represents the unit of the transaction fee.
 * @member {String} unit
 */

GetZilliqaTransactionDetailsByTransactionIDRIFee.prototype['unit'] = undefined;
var _default = GetZilliqaTransactionDetailsByTransactionIDRIFee;
exports["default"] = _default;