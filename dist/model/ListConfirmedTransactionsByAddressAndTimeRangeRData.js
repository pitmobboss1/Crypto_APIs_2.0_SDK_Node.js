"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListConfirmedTransactionsByAddressAndTimeRangeRI = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListConfirmedTransactionsByAddressAndTimeRangeRData model module.
 * @module model/ListConfirmedTransactionsByAddressAndTimeRangeRData
 * @version 1.7.3
 */
var ListConfirmedTransactionsByAddressAndTimeRangeRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressAndTimeRangeRData</code>.
   * @alias module:model/ListConfirmedTransactionsByAddressAndTimeRangeRData
   * @param limit {Number} Defines how many items should be returned in the response per page basis.
   * @param offset {Number} The starting index of the response items, i.e. where the response should start listing the returned items.
   * @param total {Number} Defines the total number of items returned in the response.
   * @param items {Array.<module:model/ListConfirmedTransactionsByAddressAndTimeRangeRI>} 
   */
  function ListConfirmedTransactionsByAddressAndTimeRangeRData(limit, offset, total, items) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressAndTimeRangeRData);

    ListConfirmedTransactionsByAddressAndTimeRangeRData.initialize(this, limit, offset, total, items);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListConfirmedTransactionsByAddressAndTimeRangeRData, null, [{
    key: "initialize",
    value: function initialize(obj, limit, offset, total, items) {
      obj['limit'] = limit;
      obj['offset'] = offset;
      obj['total'] = total;
      obj['items'] = items;
    }
    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressAndTimeRangeRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressAndTimeRangeRData} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressAndTimeRangeRData} The populated <code>ListConfirmedTransactionsByAddressAndTimeRangeRData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressAndTimeRangeRData();

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_ListConfirmedTransactionsByAddressAndTimeRangeRI["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListConfirmedTransactionsByAddressAndTimeRangeRData;
}();
/**
 * Defines how many items should be returned in the response per page basis.
 * @member {Number} limit
 */


ListConfirmedTransactionsByAddressAndTimeRangeRData.prototype['limit'] = undefined;
/**
 * The starting index of the response items, i.e. where the response should start listing the returned items.
 * @member {Number} offset
 */

ListConfirmedTransactionsByAddressAndTimeRangeRData.prototype['offset'] = undefined;
/**
 * Defines the total number of items returned in the response.
 * @member {Number} total
 */

ListConfirmedTransactionsByAddressAndTimeRangeRData.prototype['total'] = undefined;
/**
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressAndTimeRangeRI>} items
 */

ListConfirmedTransactionsByAddressAndTimeRangeRData.prototype['items'] = undefined;
var _default = ListConfirmedTransactionsByAddressAndTimeRangeRData;
exports["default"] = _default;