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
import CreateTokensTransactionRequestFromAddressRIRecipients from './CreateTokensTransactionRequestFromAddressRIRecipients';
import CreateTokensTransactionRequestFromAddressRIS from './CreateTokensTransactionRequestFromAddressRIS';
import CreateTokensTransactionRequestFromAddressRISenders from './CreateTokensTransactionRequestFromAddressRISenders';

/**
 * The CreateTokensTransactionRequestFromAddressRI model module.
 * @module model/CreateTokensTransactionRequestFromAddressRI
 * @version 1.3.0
 */
class CreateTokensTransactionRequestFromAddressRI {
    /**
     * Constructs a new <code>CreateTokensTransactionRequestFromAddressRI</code>.
     * @alias module:model/CreateTokensTransactionRequestFromAddressRI
     * @param callbackSecretKey {String} Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
     * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
     * @param feePriority {module:model/CreateTokensTransactionRequestFromAddressRI.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
     * @param recipients {Array.<module:model/CreateTokensTransactionRequestFromAddressRIRecipients>} Defines the destination for the transaction, i.e. the recipient(s).
     * @param senders {module:model/CreateTokensTransactionRequestFromAddressRISenders} 
     * @param tokenTypeSpecificData {module:model/CreateTokensTransactionRequestFromAddressRIS} 
     * @param transactionRequestId {String} Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
     */
    constructor(callbackSecretKey, callbackUrl, feePriority, recipients, senders, tokenTypeSpecificData, transactionRequestId) { 
        
        CreateTokensTransactionRequestFromAddressRI.initialize(this, callbackSecretKey, callbackUrl, feePriority, recipients, senders, tokenTypeSpecificData, transactionRequestId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, callbackSecretKey, callbackUrl, feePriority, recipients, senders, tokenTypeSpecificData, transactionRequestId) { 
        obj['callbackSecretKey'] = callbackSecretKey;
        obj['callbackUrl'] = callbackUrl;
        obj['feePriority'] = feePriority;
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['tokenTypeSpecificData'] = tokenTypeSpecificData;
        obj['transactionRequestId'] = transactionRequestId;
    }

    /**
     * Constructs a <code>CreateTokensTransactionRequestFromAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTokensTransactionRequestFromAddressRI} obj Optional instance to populate.
     * @return {module:model/CreateTokensTransactionRequestFromAddressRI} The populated <code>CreateTokensTransactionRequestFromAddressRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTokensTransactionRequestFromAddressRI();

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
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [CreateTokensTransactionRequestFromAddressRIRecipients]);
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = CreateTokensTransactionRequestFromAddressRISenders.constructFromObject(data['senders']);
            }
            if (data.hasOwnProperty('tokenTypeSpecificData')) {
                obj['tokenTypeSpecificData'] = CreateTokensTransactionRequestFromAddressRIS.constructFromObject(data['tokenTypeSpecificData']);
            }
            if (data.hasOwnProperty('transactionRequestId')) {
                obj['transactionRequestId'] = ApiClient.convertToType(data['transactionRequestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateTokensTransactionRequestFromAddressRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
 * @member {String} callbackUrl
 */
CreateTokensTransactionRequestFromAddressRI.prototype['callbackUrl'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateTokensTransactionRequestFromAddressRI.FeePriorityEnum} feePriority
 */
CreateTokensTransactionRequestFromAddressRI.prototype['feePriority'] = undefined;

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} note
 */
CreateTokensTransactionRequestFromAddressRI.prototype['note'] = undefined;

/**
 * Defines the destination for the transaction, i.e. the recipient(s).
 * @member {Array.<module:model/CreateTokensTransactionRequestFromAddressRIRecipients>} recipients
 */
CreateTokensTransactionRequestFromAddressRI.prototype['recipients'] = undefined;

/**
 * @member {module:model/CreateTokensTransactionRequestFromAddressRISenders} senders
 */
CreateTokensTransactionRequestFromAddressRI.prototype['senders'] = undefined;

/**
 * @member {module:model/CreateTokensTransactionRequestFromAddressRIS} tokenTypeSpecificData
 */
CreateTokensTransactionRequestFromAddressRI.prototype['tokenTypeSpecificData'] = undefined;

/**
 * Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
 * @member {String} transactionRequestId
 */
CreateTokensTransactionRequestFromAddressRI.prototype['transactionRequestId'] = undefined;





/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */
CreateTokensTransactionRequestFromAddressRI['FeePriorityEnum'] = {

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



export default CreateTokensTransactionRequestFromAddressRI;

