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
 * The ListWalletTransactionsRIRecipientsInner model module.
 * @module model/ListWalletTransactionsRIRecipientsInner
 * @version 1.7.3
 */
var ListWalletTransactionsRIRecipientsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListWalletTransactionsRIRecipientsInner</code>.
   * @alias module:model/ListWalletTransactionsRIRecipientsInner
   * @param address {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
   * @param amount {String} Represents the amount received to this address.
   */
  function ListWalletTransactionsRIRecipientsInner(address, amount) {
    _classCallCheck(this, ListWalletTransactionsRIRecipientsInner);

    ListWalletTransactionsRIRecipientsInner.initialize(this, address, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListWalletTransactionsRIRecipientsInner, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount) {
      obj['address'] = address;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>ListWalletTransactionsRIRecipientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListWalletTransactionsRIRecipientsInner} obj Optional instance to populate.
     * @return {module:model/ListWalletTransactionsRIRecipientsInner} The populated <code>ListWalletTransactionsRIRecipientsInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListWalletTransactionsRIRecipientsInner();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListWalletTransactionsRIRecipientsInner;
}();
/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} address
 */


ListWalletTransactionsRIRecipientsInner.prototype['address'] = undefined;
/**
 * Represents the amount received to this address.
 * @member {String} amount
 */

ListWalletTransactionsRIRecipientsInner.prototype['amount'] = undefined;
/**
 * Defines a plain text string as a label for the recipient.
 * @member {String} label
 */

ListWalletTransactionsRIRecipientsInner.prototype['label'] = undefined;
var _default = ListWalletTransactionsRIRecipientsInner;
exports["default"] = _default;