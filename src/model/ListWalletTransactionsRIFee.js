/**
 * CryptoAPIs
 * Crypto APIs is a complex and innovative infrastructure layer that radically simplifies the development of any Blockchain and Crypto related applications. Organized around REST, Crypto APIs can assist both novice Bitcoin/Ethereum enthusiasts and crypto experts with the development of their blockchain applications. Crypto APIs provides unified endpoints and data, raw data, automatic tokens and coins forwardings, callback functionalities, and much more.
 *
 * The version of the OpenAPI document: 2021-03-20
 * Contact: developers@cryptoapis.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ListWalletTransactionsRIFee model module.
 * @module model/ListWalletTransactionsRIFee
 * @version 1.7.3
 */
class ListWalletTransactionsRIFee {
    /**
     * Constructs a new <code>ListWalletTransactionsRIFee</code>.
     * @alias module:model/ListWalletTransactionsRIFee
     * @param amount {String} Defines the fee for the transaction.
     * @param convertedAmount {String} Defines the converted amount of the transaction's fee.
     * @param exchangeRateUnit {String} Defines the exchange rate for the transaction's unit.
     * @param symbol {String} Defines the unit of the transaction's fee.
     */
    constructor(amount, convertedAmount, exchangeRateUnit, symbol) { 
        
        ListWalletTransactionsRIFee.initialize(this, amount, convertedAmount, exchangeRateUnit, symbol);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, convertedAmount, exchangeRateUnit, symbol) { 
        obj['amount'] = amount;
        obj['convertedAmount'] = convertedAmount;
        obj['exchangeRateUnit'] = exchangeRateUnit;
        obj['symbol'] = symbol;
    }

    /**
     * Constructs a <code>ListWalletTransactionsRIFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListWalletTransactionsRIFee} obj Optional instance to populate.
     * @return {module:model/ListWalletTransactionsRIFee} The populated <code>ListWalletTransactionsRIFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListWalletTransactionsRIFee();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('convertedAmount')) {
                obj['convertedAmount'] = ApiClient.convertToType(data['convertedAmount'], 'String');
            }
            if (data.hasOwnProperty('exchangeRateUnit')) {
                obj['exchangeRateUnit'] = ApiClient.convertToType(data['exchangeRateUnit'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the fee for the transaction.
 * @member {String} amount
 */
ListWalletTransactionsRIFee.prototype['amount'] = undefined;

/**
 * Defines the converted amount of the transaction's fee.
 * @member {String} convertedAmount
 */
ListWalletTransactionsRIFee.prototype['convertedAmount'] = undefined;

/**
 * Defines the exchange rate for the transaction's unit.
 * @member {String} exchangeRateUnit
 */
ListWalletTransactionsRIFee.prototype['exchangeRateUnit'] = undefined;

/**
 * Defines the unit of the transaction's fee.
 * @member {String} symbol
 */
ListWalletTransactionsRIFee.prototype['symbol'] = undefined;






export default ListWalletTransactionsRIFee;

