"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddressCoinsTransactionConfirmedDataItem = _interopRequireDefault(require("./AddressCoinsTransactionConfirmedDataItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AddressCoinsTransactionConfirmedData model module.
 * @module model/AddressCoinsTransactionConfirmedData
 * @version 1.7.3
 */
var AddressCoinsTransactionConfirmedData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressCoinsTransactionConfirmedData</code>.
   * Specifies all data, as attributes, included into the callback notification, which depends on the &#x60;event&#x60;.
   * @alias module:model/AddressCoinsTransactionConfirmedData
   * @param product {String} Represents the Crypto APIs 2.0 product which sends the callback.
   * @param event {String} Defines the specific event, for which a callback subscription is set.
   * @param item {module:model/AddressCoinsTransactionConfirmedDataItem} 
   */
  function AddressCoinsTransactionConfirmedData(product, event, item) {
    _classCallCheck(this, AddressCoinsTransactionConfirmedData);

    AddressCoinsTransactionConfirmedData.initialize(this, product, event, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddressCoinsTransactionConfirmedData, null, [{
    key: "initialize",
    value: function initialize(obj, product, event, item) {
      obj['product'] = product;
      obj['event'] = event;
      obj['item'] = item;
    }
    /**
     * Constructs a <code>AddressCoinsTransactionConfirmedData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressCoinsTransactionConfirmedData} obj Optional instance to populate.
     * @return {module:model/AddressCoinsTransactionConfirmedData} The populated <code>AddressCoinsTransactionConfirmedData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressCoinsTransactionConfirmedData();

        if (data.hasOwnProperty('product')) {
          obj['product'] = _ApiClient["default"].convertToType(data['product'], 'String');
        }

        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient["default"].convertToType(data['event'], 'String');
        }

        if (data.hasOwnProperty('item')) {
          obj['item'] = _AddressCoinsTransactionConfirmedDataItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return AddressCoinsTransactionConfirmedData;
}();
/**
 * Represents the Crypto APIs 2.0 product which sends the callback.
 * @member {String} product
 */


AddressCoinsTransactionConfirmedData.prototype['product'] = undefined;
/**
 * Defines the specific event, for which a callback subscription is set.
 * @member {String} event
 */

AddressCoinsTransactionConfirmedData.prototype['event'] = undefined;
/**
 * @member {module:model/AddressCoinsTransactionConfirmedDataItem} item
 */

AddressCoinsTransactionConfirmedData.prototype['item'] = undefined;
var _default = AddressCoinsTransactionConfirmedData;
exports["default"] = _default;