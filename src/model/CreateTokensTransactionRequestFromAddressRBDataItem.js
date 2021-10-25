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
 * The CreateTokensTransactionRequestFromAddressRBDataItem model module.
 * @module model/CreateTokensTransactionRequestFromAddressRBDataItem
 * @version 1.3.0
 */
class CreateTokensTransactionRequestFromAddressRBDataItem {
    /**
     * Constructs a new <code>CreateTokensTransactionRequestFromAddressRBDataItem</code>.
     * @alias module:model/CreateTokensTransactionRequestFromAddressRBDataItem
     * @param amount {String} Represents the specific amount of the transaction.
     * @param feePriority {module:model/CreateTokensTransactionRequestFromAddressRBDataItem.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
     * @param recipientAddress {String} Defines the specific recipient address for the transaction.
     * @param tokenIdentifier {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the `propertyId` and for Ethereum-based transactions - the `contract`.
     */
    constructor(amount, feePriority, recipientAddress, tokenIdentifier) { 
        
        CreateTokensTransactionRequestFromAddressRBDataItem.initialize(this, amount, feePriority, recipientAddress, tokenIdentifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, feePriority, recipientAddress, tokenIdentifier) { 
        obj['amount'] = amount;
        obj['feePriority'] = feePriority;
        obj['recipientAddress'] = recipientAddress;
        obj['tokenIdentifier'] = tokenIdentifier;
    }

    /**
     * Constructs a <code>CreateTokensTransactionRequestFromAddressRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTokensTransactionRequestFromAddressRBDataItem} obj Optional instance to populate.
     * @return {module:model/CreateTokensTransactionRequestFromAddressRBDataItem} The populated <code>CreateTokensTransactionRequestFromAddressRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTokensTransactionRequestFromAddressRBDataItem();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('feePriority')) {
                obj['feePriority'] = ApiClient.convertToType(data['feePriority'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('recipientAddress')) {
                obj['recipientAddress'] = ApiClient.convertToType(data['recipientAddress'], 'String');
            }
            if (data.hasOwnProperty('tokenIdentifier')) {
                obj['tokenIdentifier'] = ApiClient.convertToType(data['tokenIdentifier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific amount of the transaction.
 * @member {String} amount
 */
CreateTokensTransactionRequestFromAddressRBDataItem.prototype['amount'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateTokensTransactionRequestFromAddressRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
 * @member {String} callbackUrl
 */
CreateTokensTransactionRequestFromAddressRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateTokensTransactionRequestFromAddressRBDataItem.FeePriorityEnum} feePriority
 */
CreateTokensTransactionRequestFromAddressRBDataItem.prototype['feePriority'] = undefined;

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} note
 */
CreateTokensTransactionRequestFromAddressRBDataItem.prototype['note'] = undefined;

/**
 * Defines the specific recipient address for the transaction.
 * @member {String} recipientAddress
 */
CreateTokensTransactionRequestFromAddressRBDataItem.prototype['recipientAddress'] = undefined;

/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the `propertyId` and for Ethereum-based transactions - the `contract`.
 * @member {String} tokenIdentifier
 */
CreateTokensTransactionRequestFromAddressRBDataItem.prototype['tokenIdentifier'] = undefined;





/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */
CreateTokensTransactionRequestFromAddressRBDataItem['FeePriorityEnum'] = {

    /**
     * value: "slow"
     * @const
     */
    "slow": "slow",

    /**
     * value: "standard"
     * @const
     */
    "standard": "standard",

    /**
     * value: "fast"
     * @const
     */
    "fast": "fast"
};



export default CreateTokensTransactionRequestFromAddressRBDataItem;

