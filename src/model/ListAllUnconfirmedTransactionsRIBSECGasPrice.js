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
 * The ListAllUnconfirmedTransactionsRIBSECGasPrice model module.
 * @module model/ListAllUnconfirmedTransactionsRIBSECGasPrice
 * @version 1.3.0
 */
class ListAllUnconfirmedTransactionsRIBSECGasPrice {
    /**
     * Constructs a new <code>ListAllUnconfirmedTransactionsRIBSECGasPrice</code>.
     * @alias module:model/ListAllUnconfirmedTransactionsRIBSECGasPrice
     * @param amount {String} Represents the price offered to the miner to purchase this amount of gas.
     */
    constructor(amount) { 
        
        ListAllUnconfirmedTransactionsRIBSECGasPrice.initialize(this, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount) { 
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>ListAllUnconfirmedTransactionsRIBSECGasPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllUnconfirmedTransactionsRIBSECGasPrice} obj Optional instance to populate.
     * @return {module:model/ListAllUnconfirmedTransactionsRIBSECGasPrice} The populated <code>ListAllUnconfirmedTransactionsRIBSECGasPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAllUnconfirmedTransactionsRIBSECGasPrice();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} amount
 */
ListAllUnconfirmedTransactionsRIBSECGasPrice.prototype['amount'] = undefined;






export default ListAllUnconfirmedTransactionsRIBSECGasPrice;

