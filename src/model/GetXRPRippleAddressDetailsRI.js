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
import GetXRPRippleAddressDetailsRIBalance from './GetXRPRippleAddressDetailsRIBalance';

/**
 * The GetXRPRippleAddressDetailsRI model module.
 * @module model/GetXRPRippleAddressDetailsRI
 * @version 1.3.0
 */
class GetXRPRippleAddressDetailsRI {
    /**
     * Constructs a new <code>GetXRPRippleAddressDetailsRI</code>.
     * @alias module:model/GetXRPRippleAddressDetailsRI
     * @param balance {module:model/GetXRPRippleAddressDetailsRIBalance} 
     * @param incomingTransactionsCount {Number} Defines the count of all confirmed incoming transactions from the address for coins. This applies to coins only, not to tokens transfers
     * @param outgoingTransactionsCount {Number} Defines the count of all confirmed outgoing transactions for coins. This applies to coins only, not to tokens transfers
     * @param sequence {Number} Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
     * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
     */
    constructor(balance, incomingTransactionsCount, outgoingTransactionsCount, sequence, transactionsCount) { 
        
        GetXRPRippleAddressDetailsRI.initialize(this, balance, incomingTransactionsCount, outgoingTransactionsCount, sequence, transactionsCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, balance, incomingTransactionsCount, outgoingTransactionsCount, sequence, transactionsCount) { 
        obj['balance'] = balance;
        obj['incomingTransactionsCount'] = incomingTransactionsCount;
        obj['outgoingTransactionsCount'] = outgoingTransactionsCount;
        obj['sequence'] = sequence;
        obj['transactionsCount'] = transactionsCount;
    }

    /**
     * Constructs a <code>GetXRPRippleAddressDetailsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXRPRippleAddressDetailsRI} obj Optional instance to populate.
     * @return {module:model/GetXRPRippleAddressDetailsRI} The populated <code>GetXRPRippleAddressDetailsRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetXRPRippleAddressDetailsRI();

            if (data.hasOwnProperty('balance')) {
                obj['balance'] = GetXRPRippleAddressDetailsRIBalance.constructFromObject(data['balance']);
            }
            if (data.hasOwnProperty('incomingTransactionsCount')) {
                obj['incomingTransactionsCount'] = ApiClient.convertToType(data['incomingTransactionsCount'], 'Number');
            }
            if (data.hasOwnProperty('outgoingTransactionsCount')) {
                obj['outgoingTransactionsCount'] = ApiClient.convertToType(data['outgoingTransactionsCount'], 'Number');
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
            }
            if (data.hasOwnProperty('transactionsCount')) {
                obj['transactionsCount'] = ApiClient.convertToType(data['transactionsCount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetXRPRippleAddressDetailsRIBalance} balance
 */
GetXRPRippleAddressDetailsRI.prototype['balance'] = undefined;

/**
 * Defines the count of all confirmed incoming transactions from the address for coins. This applies to coins only, not to tokens transfers
 * @member {Number} incomingTransactionsCount
 */
GetXRPRippleAddressDetailsRI.prototype['incomingTransactionsCount'] = undefined;

/**
 * Defines the count of all confirmed outgoing transactions for coins. This applies to coins only, not to tokens transfers
 * @member {Number} outgoingTransactionsCount
 */
GetXRPRippleAddressDetailsRI.prototype['outgoingTransactionsCount'] = undefined;

/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */
GetXRPRippleAddressDetailsRI.prototype['sequence'] = undefined;

/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */
GetXRPRippleAddressDetailsRI.prototype['transactionsCount'] = undefined;






export default GetXRPRippleAddressDetailsRI;

