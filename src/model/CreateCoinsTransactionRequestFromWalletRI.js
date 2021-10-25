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
import CreateCoinsTransactionRequestFromWalletRIRecipients from './CreateCoinsTransactionRequestFromWalletRIRecipients';

/**
 * The CreateCoinsTransactionRequestFromWalletRI model module.
 * @module model/CreateCoinsTransactionRequestFromWalletRI
 * @version 1.3.0
 */
class CreateCoinsTransactionRequestFromWalletRI {
    /**
     * Constructs a new <code>CreateCoinsTransactionRequestFromWalletRI</code>.
     * @alias module:model/CreateCoinsTransactionRequestFromWalletRI
     * @param feePriority {module:model/CreateCoinsTransactionRequestFromWalletRI.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
     * @param recipients {Array.<module:model/CreateCoinsTransactionRequestFromWalletRIRecipients>} Defines the destination of the transaction, whether it is incoming or outgoing.
     * @param totalTransactionAmount {String} Represents the specific amount of the transaction.
     * @param transactionRequestId {String} Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
     * @param transactionRequestStatus {module:model/CreateCoinsTransactionRequestFromWalletRI.TransactionRequestStatusEnum} Defines the status of the transaction, e.g. \"created, \"await_approval\", \"pending\", \"prepared\", \"signed\", \"broadcasted\", \"success\", \"failed\", \"rejected\", mined\".
     */
    constructor(feePriority, recipients, totalTransactionAmount, transactionRequestId, transactionRequestStatus) { 
        
        CreateCoinsTransactionRequestFromWalletRI.initialize(this, feePriority, recipients, totalTransactionAmount, transactionRequestId, transactionRequestStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, feePriority, recipients, totalTransactionAmount, transactionRequestId, transactionRequestStatus) { 
        obj['feePriority'] = feePriority;
        obj['recipients'] = recipients;
        obj['totalTransactionAmount'] = totalTransactionAmount;
        obj['transactionRequestId'] = transactionRequestId;
        obj['transactionRequestStatus'] = transactionRequestStatus;
    }

    /**
     * Constructs a <code>CreateCoinsTransactionRequestFromWalletRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromWalletRI} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromWalletRI} The populated <code>CreateCoinsTransactionRequestFromWalletRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCoinsTransactionRequestFromWalletRI();

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
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [CreateCoinsTransactionRequestFromWalletRIRecipients]);
            }
            if (data.hasOwnProperty('totalTransactionAmount')) {
                obj['totalTransactionAmount'] = ApiClient.convertToType(data['totalTransactionAmount'], 'String');
            }
            if (data.hasOwnProperty('transactionRequestId')) {
                obj['transactionRequestId'] = ApiClient.convertToType(data['transactionRequestId'], 'String');
            }
            if (data.hasOwnProperty('transactionRequestStatus')) {
                obj['transactionRequestStatus'] = ApiClient.convertToType(data['transactionRequestStatus'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs.  For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateCoinsTransactionRequestFromWalletRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
 * @member {String} callbackUrl
 */
CreateCoinsTransactionRequestFromWalletRI.prototype['callbackUrl'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateCoinsTransactionRequestFromWalletRI.FeePriorityEnum} feePriority
 */
CreateCoinsTransactionRequestFromWalletRI.prototype['feePriority'] = undefined;

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} note
 */
CreateCoinsTransactionRequestFromWalletRI.prototype['note'] = undefined;

/**
 * Defines the destination of the transaction, whether it is incoming or outgoing.
 * @member {Array.<module:model/CreateCoinsTransactionRequestFromWalletRIRecipients>} recipients
 */
CreateCoinsTransactionRequestFromWalletRI.prototype['recipients'] = undefined;

/**
 * Represents the specific amount of the transaction.
 * @member {String} totalTransactionAmount
 */
CreateCoinsTransactionRequestFromWalletRI.prototype['totalTransactionAmount'] = undefined;

/**
 * Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
 * @member {String} transactionRequestId
 */
CreateCoinsTransactionRequestFromWalletRI.prototype['transactionRequestId'] = undefined;

/**
 * Defines the status of the transaction, e.g. \"created, \"await_approval\", \"pending\", \"prepared\", \"signed\", \"broadcasted\", \"success\", \"failed\", \"rejected\", mined\".
 * @member {module:model/CreateCoinsTransactionRequestFromWalletRI.TransactionRequestStatusEnum} transactionRequestStatus
 */
CreateCoinsTransactionRequestFromWalletRI.prototype['transactionRequestStatus'] = undefined;





/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */
CreateCoinsTransactionRequestFromWalletRI['FeePriorityEnum'] = {

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


/**
 * Allowed values for the <code>transactionRequestStatus</code> property.
 * @enum {String}
 * @readonly
 */
CreateCoinsTransactionRequestFromWalletRI['TransactionRequestStatusEnum'] = {

    /**
     * value: "created"
     * @const
     */
    "created": "created",

    /**
     * value: "await-approval"
     * @const
     */
    "await-approval": "await-approval",

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "prepared"
     * @const
     */
    "prepared": "prepared",

    /**
     * value: "signed"
     * @const
     */
    "signed": "signed",

    /**
     * value: "broadcasted"
     * @const
     */
    "broadcasted": "broadcasted",

    /**
     * value: "success"
     * @const
     */
    "success": "success",

    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",

    /**
     * value: "rejected"
     * @const
     */
    "rejected": "rejected",

    /**
     * value: "mined"
     * @const
     */
    "mined": "mined"
};



export default CreateCoinsTransactionRequestFromWalletRI;

