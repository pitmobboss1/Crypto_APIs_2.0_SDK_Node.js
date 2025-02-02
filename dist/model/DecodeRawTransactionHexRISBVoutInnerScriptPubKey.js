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
 * The DecodeRawTransactionHexRISBVoutInnerScriptPubKey model module.
 * @module model/DecodeRawTransactionHexRISBVoutInnerScriptPubKey
 * @version 1.7.3
 */
var DecodeRawTransactionHexRISBVoutInnerScriptPubKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISBVoutInnerScriptPubKey</code>.
   * Script pub key of the transaction
   * @alias module:model/DecodeRawTransactionHexRISBVoutInnerScriptPubKey
   * @param address {String} Represents the address which send the amount.
   */
  function DecodeRawTransactionHexRISBVoutInnerScriptPubKey(address) {
    _classCallCheck(this, DecodeRawTransactionHexRISBVoutInnerScriptPubKey);

    DecodeRawTransactionHexRISBVoutInnerScriptPubKey.initialize(this, address);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DecodeRawTransactionHexRISBVoutInnerScriptPubKey, null, [{
    key: "initialize",
    value: function initialize(obj, address) {
      obj['address'] = address;
    }
    /**
     * Constructs a <code>DecodeRawTransactionHexRISBVoutInnerScriptPubKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISBVoutInnerScriptPubKey} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISBVoutInnerScriptPubKey} The populated <code>DecodeRawTransactionHexRISBVoutInnerScriptPubKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISBVoutInnerScriptPubKey();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('asm')) {
          obj['asm'] = _ApiClient["default"].convertToType(data['asm'], 'String');
        }

        if (data.hasOwnProperty('hex')) {
          obj['hex'] = _ApiClient["default"].convertToType(data['hex'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DecodeRawTransactionHexRISBVoutInnerScriptPubKey;
}();
/**
 * Represents the address which send the amount.
 * @member {String} address
 */


DecodeRawTransactionHexRISBVoutInnerScriptPubKey.prototype['address'] = undefined;
/**
 * Represents the assembly of the script public key of the address.
 * @member {String} asm
 */

DecodeRawTransactionHexRISBVoutInnerScriptPubKey.prototype['asm'] = undefined;
/**
 * Represents the hex of the script public key of the address.
 * @member {String} hex
 */

DecodeRawTransactionHexRISBVoutInnerScriptPubKey.prototype['hex'] = undefined;
/**
 * Represents the script type.
 * @member {String} type
 */

DecodeRawTransactionHexRISBVoutInnerScriptPubKey.prototype['type'] = undefined;
var _default = DecodeRawTransactionHexRISBVoutInnerScriptPubKey;
exports["default"] = _default;