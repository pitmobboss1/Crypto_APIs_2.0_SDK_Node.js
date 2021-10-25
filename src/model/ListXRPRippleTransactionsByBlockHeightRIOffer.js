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

/**
 * The ListXRPRippleTransactionsByBlockHeightRIOffer model module.
 * @module model/ListXRPRippleTransactionsByBlockHeightRIOffer
 * @version 1.3.0
 */
class ListXRPRippleTransactionsByBlockHeightRIOffer {
    /**
     * Constructs a new <code>ListXRPRippleTransactionsByBlockHeightRIOffer</code>.
     * @alias module:model/ListXRPRippleTransactionsByBlockHeightRIOffer
     * @param amount {String} 
     * @param unit {String} 
     */
    constructor(amount, unit) { 
        
        ListXRPRippleTransactionsByBlockHeightRIOffer.initialize(this, amount, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, unit) { 
        obj['amount'] = amount;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>ListXRPRippleTransactionsByBlockHeightRIOffer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByBlockHeightRIOffer} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByBlockHeightRIOffer} The populated <code>ListXRPRippleTransactionsByBlockHeightRIOffer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListXRPRippleTransactionsByBlockHeightRIOffer();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} amount
 */
ListXRPRippleTransactionsByBlockHeightRIOffer.prototype['amount'] = undefined;

/**
 * @member {String} unit
 */
ListXRPRippleTransactionsByBlockHeightRIOffer.prototype['unit'] = undefined;






export default ListXRPRippleTransactionsByBlockHeightRIOffer;

