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
 * The NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem model module.
 * @module model/NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem
 * @version 1.7.3
 */
class NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem {
    /**
     * Constructs a new <code>NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem</code>.
     * @alias module:model/NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem
     * @param address {String} Defines the specific address of the internal transaction.
     * @param allowDuplicates {Boolean} Specifies a flag that permits or denies the creation of duplicate addresses.
     * @param callbackSecretKey {String} Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
     * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
     * @param confirmationsCount {Number} Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
     */
    constructor(address, allowDuplicates, callbackSecretKey, callbackUrl, confirmationsCount) { 
        
        NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem.initialize(this, address, allowDuplicates, callbackSecretKey, callbackUrl, confirmationsCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, allowDuplicates, callbackSecretKey, callbackUrl, confirmationsCount) { 
        obj['address'] = address;
        obj['allowDuplicates'] = allowDuplicates || false;
        obj['callbackSecretKey'] = callbackSecretKey;
        obj['callbackUrl'] = callbackUrl;
        obj['confirmationsCount'] = confirmationsCount;
    }

    /**
     * Constructs a <code>NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem} obj Optional instance to populate.
     * @return {module:model/NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem} The populated <code>NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('allowDuplicates')) {
                obj['allowDuplicates'] = ApiClient.convertToType(data['allowDuplicates'], 'Boolean');
            }
            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('confirmationsCount')) {
                obj['confirmationsCount'] = ApiClient.convertToType(data['confirmationsCount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Defines the specific address of the internal transaction.
 * @member {String} address
 */
NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem.prototype['address'] = undefined;

/**
 * Specifies a flag that permits or denies the creation of duplicate addresses.
 * @member {Boolean} allowDuplicates
 * @default false
 */
NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem.prototype['allowDuplicates'] = false;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
 * @member {Number} confirmationsCount
 */
NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem.prototype['confirmationsCount'] = undefined;






export default NewConfirmedInternalTransactionsAndEachConfirmationRBDataItem;

