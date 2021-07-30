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
import DeleteAutomaticTokensForwardingRITS from './DeleteAutomaticTokensForwardingRITS';

/**
 * The DeleteAutomaticTokensForwardingRI model module.
 * @module model/DeleteAutomaticTokensForwardingRI
 * @version 1.2.0
 */
class DeleteAutomaticTokensForwardingRI {
    /**
     * Constructs a new <code>DeleteAutomaticTokensForwardingRI</code>.
     * @alias module:model/DeleteAutomaticTokensForwardingRI
     * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
     * @param confirmationsCount {Number} Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
     * @param createdTimestamp {Number} Defines the specific time/date when the automatic forwarding was created in Unix Timestamp.
     * @param feeAddress {String} Represents the specific fee address, which is always automatically generated. Users must fund it.
     * @param feePriority {module:model/DeleteAutomaticTokensForwardingRI.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"SLOW\", \"STANDARD\" or \"FAST\".
     * @param fromAddress {String} Represents the hash of the address that forwards the tokens.
     * @param minimumTransferAmount {String} Represents the minimum transfer amount of the tokens in the `fromAddress` that can be allowed for an automatic forwarding.
     * @param referenceId {String} Represents a unique ID used to reference the specific callback subscription.
     * @param toAddress {String} Represents the hash of the address the tokens are forwarded to.
     * @param tokenData {module:model/DeleteAutomaticTokensForwardingRITS} 
     */
    constructor(callbackUrl, confirmationsCount, createdTimestamp, feeAddress, feePriority, fromAddress, minimumTransferAmount, referenceId, toAddress, tokenData) { 
        
        DeleteAutomaticTokensForwardingRI.initialize(this, callbackUrl, confirmationsCount, createdTimestamp, feeAddress, feePriority, fromAddress, minimumTransferAmount, referenceId, toAddress, tokenData);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, callbackUrl, confirmationsCount, createdTimestamp, feeAddress, feePriority, fromAddress, minimumTransferAmount, referenceId, toAddress, tokenData) { 
        obj['callbackUrl'] = callbackUrl;
        obj['confirmationsCount'] = confirmationsCount;
        obj['createdTimestamp'] = createdTimestamp;
        obj['feeAddress'] = feeAddress;
        obj['feePriority'] = feePriority;
        obj['fromAddress'] = fromAddress;
        obj['minimumTransferAmount'] = minimumTransferAmount;
        obj['referenceId'] = referenceId;
        obj['toAddress'] = toAddress;
        obj['tokenData'] = tokenData;
    }

    /**
     * Constructs a <code>DeleteAutomaticTokensForwardingRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAutomaticTokensForwardingRI} obj Optional instance to populate.
     * @return {module:model/DeleteAutomaticTokensForwardingRI} The populated <code>DeleteAutomaticTokensForwardingRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteAutomaticTokensForwardingRI();

            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('confirmationsCount')) {
                obj['confirmationsCount'] = ApiClient.convertToType(data['confirmationsCount'], 'Number');
            }
            if (data.hasOwnProperty('createdTimestamp')) {
                obj['createdTimestamp'] = ApiClient.convertToType(data['createdTimestamp'], 'Number');
            }
            if (data.hasOwnProperty('feeAddress')) {
                obj['feeAddress'] = ApiClient.convertToType(data['feeAddress'], 'String');
            }
            if (data.hasOwnProperty('feePriority')) {
                obj['feePriority'] = ApiClient.convertToType(data['feePriority'], 'String');
            }
            if (data.hasOwnProperty('fromAddress')) {
                obj['fromAddress'] = ApiClient.convertToType(data['fromAddress'], 'String');
            }
            if (data.hasOwnProperty('minimumTransferAmount')) {
                obj['minimumTransferAmount'] = ApiClient.convertToType(data['minimumTransferAmount'], 'String');
            }
            if (data.hasOwnProperty('referenceId')) {
                obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
            }
            if (data.hasOwnProperty('toAddress')) {
                obj['toAddress'] = ApiClient.convertToType(data['toAddress'], 'String');
            }
            if (data.hasOwnProperty('tokenData')) {
                obj['tokenData'] = DeleteAutomaticTokensForwardingRITS.constructFromObject(data['tokenData']);
            }
        }
        return obj;
    }


}

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
 * @member {String} callbackUrl
 */
DeleteAutomaticTokensForwardingRI.prototype['callbackUrl'] = undefined;

/**
 * Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
 * @member {Number} confirmationsCount
 */
DeleteAutomaticTokensForwardingRI.prototype['confirmationsCount'] = undefined;

/**
 * Defines the specific time/date when the automatic forwarding was created in Unix Timestamp.
 * @member {Number} createdTimestamp
 */
DeleteAutomaticTokensForwardingRI.prototype['createdTimestamp'] = undefined;

/**
 * Represents the specific fee address, which is always automatically generated. Users must fund it.
 * @member {String} feeAddress
 */
DeleteAutomaticTokensForwardingRI.prototype['feeAddress'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"SLOW\", \"STANDARD\" or \"FAST\".
 * @member {module:model/DeleteAutomaticTokensForwardingRI.FeePriorityEnum} feePriority
 */
DeleteAutomaticTokensForwardingRI.prototype['feePriority'] = undefined;

/**
 * Represents the hash of the address that forwards the tokens.
 * @member {String} fromAddress
 */
DeleteAutomaticTokensForwardingRI.prototype['fromAddress'] = undefined;

/**
 * Represents the minimum transfer amount of the tokens in the `fromAddress` that can be allowed for an automatic forwarding.
 * @member {String} minimumTransferAmount
 */
DeleteAutomaticTokensForwardingRI.prototype['minimumTransferAmount'] = undefined;

/**
 * Represents a unique ID used to reference the specific callback subscription.
 * @member {String} referenceId
 */
DeleteAutomaticTokensForwardingRI.prototype['referenceId'] = undefined;

/**
 * Represents the hash of the address the tokens are forwarded to.
 * @member {String} toAddress
 */
DeleteAutomaticTokensForwardingRI.prototype['toAddress'] = undefined;

/**
 * @member {module:model/DeleteAutomaticTokensForwardingRITS} tokenData
 */
DeleteAutomaticTokensForwardingRI.prototype['tokenData'] = undefined;





/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */
DeleteAutomaticTokensForwardingRI['FeePriorityEnum'] = {

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



export default DeleteAutomaticTokensForwardingRI;

