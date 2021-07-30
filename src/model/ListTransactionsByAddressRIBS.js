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
import ListTransactionsByAddressRIBSB from './ListTransactionsByAddressRIBSB';
import ListTransactionsByAddressRIBSBC from './ListTransactionsByAddressRIBSBC';
import ListTransactionsByAddressRIBSD from './ListTransactionsByAddressRIBSD';
import ListTransactionsByAddressRIBSD2 from './ListTransactionsByAddressRIBSD2';
import ListTransactionsByAddressRIBSD2Vin from './ListTransactionsByAddressRIBSD2Vin';
import ListTransactionsByAddressRIBSD2Vout from './ListTransactionsByAddressRIBSD2Vout';
import ListTransactionsByAddressRIBSE from './ListTransactionsByAddressRIBSE';
import ListTransactionsByAddressRIBSEC from './ListTransactionsByAddressRIBSEC';
import ListTransactionsByAddressRIBSEGasPrice from './ListTransactionsByAddressRIBSEGasPrice';
import ListTransactionsByAddressRIBSL from './ListTransactionsByAddressRIBSL';

/**
 * The ListTransactionsByAddressRIBS model module.
 * @module model/ListTransactionsByAddressRIBS
 * @version 1.2.0
 */
class ListTransactionsByAddressRIBS {
    /**
     * Constructs a new <code>ListTransactionsByAddressRIBS</code>.
     * @alias module:model/ListTransactionsByAddressRIBS
     * @implements module:model/ListTransactionsByAddressRIBSB
     * @implements module:model/ListTransactionsByAddressRIBSBC
     * @implements module:model/ListTransactionsByAddressRIBSL
     * @implements module:model/ListTransactionsByAddressRIBSD
     * @implements module:model/ListTransactionsByAddressRIBSD2
     * @implements module:model/ListTransactionsByAddressRIBSEC
     * @implements module:model/ListTransactionsByAddressRIBSE
     * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
     * @param size {Number} Represents the total size of this transaction.
     * @param vSize {Number} Represents the virtual size of this transaction.
     * @param version {Number} Represents the transaction's version number.
     * @param vin {Array.<module:model/ListTransactionsByAddressRIBSD2Vin>} Represents the transaction inputs.
     * @param vout {Array.<module:model/ListTransactionsByAddressRIBSD2Vout>} Represents the transaction outputs.
     * @param contract {String} Represents the specific transaction contract.
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param gasPrice {module:model/ListTransactionsByAddressRIBSEGasPrice} 
     * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
     * @param inputData {String} Represents additional information that is required for the transaction.
     * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param transactionStatus {String} String representation of the transaction status
     */
    constructor(locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) { 
        ListTransactionsByAddressRIBSB.initialize(this, locktime, size, vSize, version, vin, vout);ListTransactionsByAddressRIBSBC.initialize(this, locktime, size, version, vin, vout);ListTransactionsByAddressRIBSL.initialize(this, locktime, size, vSize, version, vin, vout);ListTransactionsByAddressRIBSD.initialize(this, locktime, size, version, vin, vout);ListTransactionsByAddressRIBSD2.initialize(this, locktime, size, version, vin, vout);ListTransactionsByAddressRIBSEC.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);ListTransactionsByAddressRIBSE.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
        ListTransactionsByAddressRIBS.initialize(this, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) { 
        obj['locktime'] = locktime;
        obj['size'] = size;
        obj['vSize'] = vSize;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
        obj['contract'] = contract;
        obj['gasLimit'] = gasLimit;
        obj['gasPrice'] = gasPrice;
        obj['gasUsed'] = gasUsed;
        obj['inputData'] = inputData;
        obj['nonce'] = nonce;
        obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>ListTransactionsByAddressRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByAddressRIBS} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByAddressRIBS} The populated <code>ListTransactionsByAddressRIBS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByAddressRIBS();
            ListTransactionsByAddressRIBSB.constructFromObject(data, obj);
            ListTransactionsByAddressRIBSBC.constructFromObject(data, obj);
            ListTransactionsByAddressRIBSL.constructFromObject(data, obj);
            ListTransactionsByAddressRIBSD.constructFromObject(data, obj);
            ListTransactionsByAddressRIBSD2.constructFromObject(data, obj);
            ListTransactionsByAddressRIBSEC.constructFromObject(data, obj);
            ListTransactionsByAddressRIBSE.constructFromObject(data, obj);

            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('vSize')) {
                obj['vSize'] = ApiClient.convertToType(data['vSize'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListTransactionsByAddressRIBSD2Vin]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [ListTransactionsByAddressRIBSD2Vout]);
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = ListTransactionsByAddressRIBSEGasPrice.constructFromObject(data['gasPrice']);
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'String');
            }
            if (data.hasOwnProperty('inputData')) {
                obj['inputData'] = ApiClient.convertToType(data['inputData'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('transactionStatus')) {
                obj['transactionStatus'] = ApiClient.convertToType(data['transactionStatus'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListTransactionsByAddressRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByAddressRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListTransactionsByAddressRIBS.prototype['vSize'] = undefined;

/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
ListTransactionsByAddressRIBS.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSD2Vin>} vin
 */
ListTransactionsByAddressRIBS.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSD2Vout>} vout
 */
ListTransactionsByAddressRIBS.prototype['vout'] = undefined;

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListTransactionsByAddressRIBS.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListTransactionsByAddressRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListTransactionsByAddressRIBSEGasPrice} gasPrice
 */
ListTransactionsByAddressRIBS.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListTransactionsByAddressRIBS.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListTransactionsByAddressRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListTransactionsByAddressRIBS.prototype['nonce'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListTransactionsByAddressRIBS.prototype['transactionStatus'] = undefined;


// Implement ListTransactionsByAddressRIBSB interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListTransactionsByAddressRIBSB.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByAddressRIBSB.prototype['size'] = undefined;
/**
 * Defines the transaction's virtual size.
 * @member {Number} vSize
 */
ListTransactionsByAddressRIBSB.prototype['vSize'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
ListTransactionsByAddressRIBSB.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSBVin>} vin
 */
ListTransactionsByAddressRIBSB.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSBVout>} vout
 */
ListTransactionsByAddressRIBSB.prototype['vout'] = undefined;
// Implement ListTransactionsByAddressRIBSBC interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListTransactionsByAddressRIBSBC.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByAddressRIBSBC.prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
ListTransactionsByAddressRIBSBC.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSBCVin>} vin
 */
ListTransactionsByAddressRIBSBC.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBCVout>} vout
 */
ListTransactionsByAddressRIBSBC.prototype['vout'] = undefined;
// Implement ListTransactionsByAddressRIBSL interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListTransactionsByAddressRIBSL.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByAddressRIBSL.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListTransactionsByAddressRIBSL.prototype['vSize'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
ListTransactionsByAddressRIBSL.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSLVin>} vin
 */
ListTransactionsByAddressRIBSL.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVout>} vout
 */
ListTransactionsByAddressRIBSL.prototype['vout'] = undefined;
// Implement ListTransactionsByAddressRIBSD interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListTransactionsByAddressRIBSD.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByAddressRIBSD.prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
ListTransactionsByAddressRIBSD.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSDVin>} vin
 */
ListTransactionsByAddressRIBSD.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVout>} vout
 */
ListTransactionsByAddressRIBSD.prototype['vout'] = undefined;
// Implement ListTransactionsByAddressRIBSD2 interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListTransactionsByAddressRIBSD2.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByAddressRIBSD2.prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
ListTransactionsByAddressRIBSD2.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSD2Vin>} vin
 */
ListTransactionsByAddressRIBSD2.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSD2Vout>} vout
 */
ListTransactionsByAddressRIBSD2.prototype['vout'] = undefined;
// Implement ListTransactionsByAddressRIBSEC interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListTransactionsByAddressRIBSEC.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListTransactionsByAddressRIBSEC.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByAddressRIBSECGasPrice} gasPrice
 */
ListTransactionsByAddressRIBSEC.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListTransactionsByAddressRIBSEC.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListTransactionsByAddressRIBSEC.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListTransactionsByAddressRIBSEC.prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListTransactionsByAddressRIBSEC.prototype['transactionStatus'] = undefined;
// Implement ListTransactionsByAddressRIBSE interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListTransactionsByAddressRIBSE.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListTransactionsByAddressRIBSE.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByAddressRIBSEGasPrice} gasPrice
 */
ListTransactionsByAddressRIBSE.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListTransactionsByAddressRIBSE.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListTransactionsByAddressRIBSE.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListTransactionsByAddressRIBSE.prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListTransactionsByAddressRIBSE.prototype['transactionStatus'] = undefined;




export default ListTransactionsByAddressRIBS;

