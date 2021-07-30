/**
 * CryptoAPIs
 * Crypto APIs 2.0 is a complex and innovative infrastructure layer that radically simplifies the development of any Blockchain and Crypto related applications. Organized around REST, Crypto APIs 2.0 can assist both novice Bitcoin/Ethereum enthusiasts and crypto experts with the development of their blockchain applications. Crypto APIs 2.0 provides unified endpoints and data, raw data, automatic tokens and coins forwardings, callback functionalities, and much more.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: developers@cryptoapis.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ListTransactionsByBlockHeightRIBSLVin from './ListTransactionsByBlockHeightRIBSLVin';
import ListTransactionsByBlockHeightRIBSLVout from './ListTransactionsByBlockHeightRIBSLVout';

/**
 * The ListTransactionsByBlockHeightRIBSL model module.
 * @module model/ListTransactionsByBlockHeightRIBSL
 * @version 1.2.0
 */
class ListTransactionsByBlockHeightRIBSL {
    /**
     * Constructs a new <code>ListTransactionsByBlockHeightRIBSL</code>.
     * Litecoin
     * @alias module:model/ListTransactionsByBlockHeightRIBSL
     * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
     * @param size {Number} Represents the total size of this transaction.
     * @param version {Number} Represents transaction version number.
     * @param vin {Array.<module:model/ListTransactionsByBlockHeightRIBSLVin>} Represents the transaction inputs.
     * @param vout {Array.<module:model/ListTransactionsByBlockHeightRIBSLVout>} Represents the transaction outputs.
     * @param vsize {Number} Represents the virtual size of this transaction.
     */
    constructor(locktime, size, version, vin, vout, vsize) { 
        
        ListTransactionsByBlockHeightRIBSL.initialize(this, locktime, size, version, vin, vout, vsize);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, size, version, vin, vout, vsize) { 
        obj['locktime'] = locktime;
        obj['size'] = size;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
        obj['vsize'] = vsize;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBSL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSL} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSL} The populated <code>ListTransactionsByBlockHeightRIBSL</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHeightRIBSL();

            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListTransactionsByBlockHeightRIBSLVin]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [ListTransactionsByBlockHeightRIBSLVout]);
            }
            if (data.hasOwnProperty('vsize')) {
                obj['vsize'] = ApiClient.convertToType(data['vsize'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHeightRIBSL.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHeightRIBSL.prototype['size'] = undefined;

/**
 * Represents transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBSL.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSLVin>} vin
 */
ListTransactionsByBlockHeightRIBSL.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSLVout>} vout
 */
ListTransactionsByBlockHeightRIBSL.prototype['vout'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */
ListTransactionsByBlockHeightRIBSL.prototype['vsize'] = undefined;






export default ListTransactionsByBlockHeightRIBSL;

