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
 * The BlockMinedDataItem model module.
 * @module model/BlockMinedDataItem
 * @version 1.7.3
 */
var BlockMinedDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BlockMinedDataItem</code>.
   * Defines an &#x60;item&#x60; as one result.
   * @alias module:model/BlockMinedDataItem
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
   * @param height {Number} Defines the number of blocks in the blockchain preceding this specific block.
   * @param hash {String} Represents the hash of the block's header, i.e. an output that has a fixed length.
   * @param timestamp {Number} Defines the exact date/time when this block was mined in seconds since Unix Epoch time.
   */
  function BlockMinedDataItem(blockchain, network, height, hash, timestamp) {
    _classCallCheck(this, BlockMinedDataItem);

    BlockMinedDataItem.initialize(this, blockchain, network, height, hash, timestamp);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BlockMinedDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, blockchain, network, height, hash, timestamp) {
      obj['blockchain'] = blockchain;
      obj['network'] = network;
      obj['height'] = height;
      obj['hash'] = hash;
      obj['timestamp'] = timestamp;
    }
    /**
     * Constructs a <code>BlockMinedDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockMinedDataItem} obj Optional instance to populate.
     * @return {module:model/BlockMinedDataItem} The populated <code>BlockMinedDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BlockMinedDataItem();

        if (data.hasOwnProperty('blockchain')) {
          obj['blockchain'] = _ApiClient["default"].convertToType(data['blockchain'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return BlockMinedDataItem;
}();
/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */


BlockMinedDataItem.prototype['blockchain'] = undefined;
/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */

BlockMinedDataItem.prototype['network'] = undefined;
/**
 * Defines the number of blocks in the blockchain preceding this specific block.
 * @member {Number} height
 */

BlockMinedDataItem.prototype['height'] = undefined;
/**
 * Represents the hash of the block's header, i.e. an output that has a fixed length.
 * @member {String} hash
 */

BlockMinedDataItem.prototype['hash'] = undefined;
/**
 * Defines the exact date/time when this block was mined in seconds since Unix Epoch time.
 * @member {Number} timestamp
 */

BlockMinedDataItem.prototype['timestamp'] = undefined;
var _default = BlockMinedDataItem;
exports["default"] = _default;