"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListWalletTransactionsRIFee = _interopRequireDefault(require("./ListWalletTransactionsRIFee"));

var _ListWalletTransactionsRIRecipients = _interopRequireDefault(require("./ListWalletTransactionsRIRecipients"));

var _ListWalletTransactionsRISenders = _interopRequireDefault(require("./ListWalletTransactionsRISenders"));

var _ListWalletTransactionsRIValue = _interopRequireDefault(require("./ListWalletTransactionsRIValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListWalletTransactionsRI model module.
 * @module model/ListWalletTransactionsRI
 * @version 1.3.0
 */
var ListWalletTransactionsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListWalletTransactionsRI</code>.
   * @alias module:model/ListWalletTransactionsRI
   * @param direction {String} Defines the direction of the transaction, e.g. incoming.
   * @param fee {module:model/ListWalletTransactionsRIFee} 
   * @param recipients {Array.<module:model/ListWalletTransactionsRIRecipients>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param senders {Array.<module:model/ListWalletTransactionsRISenders>} Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param status {String} Defines the status of the transaction, if it is confirmed or unconfirmed.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionId {String} Represents the unique TD of the transaction.
   * @param value {module:model/ListWalletTransactionsRIValue} 
   */
  function ListWalletTransactionsRI(direction, fee, recipients, senders, status, timestamp, transactionId, value) {
    _classCallCheck(this, ListWalletTransactionsRI);

    ListWalletTransactionsRI.initialize(this, direction, fee, recipients, senders, status, timestamp, transactionId, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListWalletTransactionsRI, null, [{
    key: "initialize",
    value: function initialize(obj, direction, fee, recipients, senders, status, timestamp, transactionId, value) {
      obj['direction'] = direction;
      obj['fee'] = fee;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['status'] = status;
      obj['timestamp'] = timestamp;
      obj['transactionId'] = transactionId;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ListWalletTransactionsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListWalletTransactionsRI} obj Optional instance to populate.
     * @return {module:model/ListWalletTransactionsRI} The populated <code>ListWalletTransactionsRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListWalletTransactionsRI();

        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ListWalletTransactionsRIFee["default"].constructFromObject(data['fee']);
        }

        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_ListWalletTransactionsRIRecipients["default"]]);
        }

        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_ListWalletTransactionsRISenders["default"]]);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }

        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ListWalletTransactionsRIValue["default"].constructFromObject(data['value']);
        }
      }

      return obj;
    }
  }]);

  return ListWalletTransactionsRI;
}();
/**
 * Defines the direction of the transaction, e.g. incoming.
 * @member {String} direction
 */


ListWalletTransactionsRI.prototype['direction'] = undefined;
/**
 * @member {module:model/ListWalletTransactionsRIFee} fee
 */

ListWalletTransactionsRI.prototype['fee'] = undefined;
/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/ListWalletTransactionsRIRecipients>} recipients
 */

ListWalletTransactionsRI.prototype['recipients'] = undefined;
/**
 * Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/ListWalletTransactionsRISenders>} senders
 */

ListWalletTransactionsRI.prototype['senders'] = undefined;
/**
 * Defines the status of the transaction, if it is confirmed or unconfirmed.
 * @member {String} status
 */

ListWalletTransactionsRI.prototype['status'] = undefined;
/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */

ListWalletTransactionsRI.prototype['timestamp'] = undefined;
/**
 * Represents the unique TD of the transaction.
 * @member {String} transactionId
 */

ListWalletTransactionsRI.prototype['transactionId'] = undefined;
/**
 * @member {module:model/ListWalletTransactionsRIValue} value
 */

ListWalletTransactionsRI.prototype['value'] = undefined;
var _default = ListWalletTransactionsRI;
exports["default"] = _default;