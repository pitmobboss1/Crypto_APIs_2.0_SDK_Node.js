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
import GetXRPRippleTransactionDetailsByTransactionIDRIFee from './GetXRPRippleTransactionDetailsByTransactionIDRIFee';
import GetXRPRippleTransactionDetailsByTransactionIDRIOffer from './GetXRPRippleTransactionDetailsByTransactionIDRIOffer';
import GetXRPRippleTransactionDetailsByTransactionIDRIReceive from './GetXRPRippleTransactionDetailsByTransactionIDRIReceive';
import GetXRPRippleTransactionDetailsByTransactionIDRIRecipients from './GetXRPRippleTransactionDetailsByTransactionIDRIRecipients';
import GetXRPRippleTransactionDetailsByTransactionIDRISenders from './GetXRPRippleTransactionDetailsByTransactionIDRISenders';
import GetXRPRippleTransactionDetailsByTransactionIDRIValue from './GetXRPRippleTransactionDetailsByTransactionIDRIValue';

/**
 * The GetXRPRippleTransactionDetailsByTransactionIDRI model module.
 * @module model/GetXRPRippleTransactionDetailsByTransactionIDRI
 * @version 1.3.0
 */
class GetXRPRippleTransactionDetailsByTransactionIDRI {
    /**
     * Constructs a new <code>GetXRPRippleTransactionDetailsByTransactionIDRI</code>.
     * @alias module:model/GetXRPRippleTransactionDetailsByTransactionIDRI
     * @param additionalData {String} Represents additional data that may be needed.
     * @param index {String} Defines the index of the transaction, i.e. the consecutive place it takes in the blockchain.
     * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param minedInBlockHeight {String} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
     * @param offer {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIOffer} 
     * @param receive {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIReceive} 
     * @param recipients {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDRIRecipients>} Represents an object of addresses that receive the transactions.
     * @param senders {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDRISenders>} Represents an object of addresses that provide the funds.
     * @param sequence {Number} Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
     * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
     * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
     * @param type {String} Defines the type of the transaction.
     * @param fee {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIFee} 
     * @param value {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIValue} 
     */
    constructor(additionalData, index, minedInBlockHash, minedInBlockHeight, offer, receive, recipients, senders, sequence, timestamp, transactionHash, type, fee, value) { 
        
        GetXRPRippleTransactionDetailsByTransactionIDRI.initialize(this, additionalData, index, minedInBlockHash, minedInBlockHeight, offer, receive, recipients, senders, sequence, timestamp, transactionHash, type, fee, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, additionalData, index, minedInBlockHash, minedInBlockHeight, offer, receive, recipients, senders, sequence, timestamp, transactionHash, type, fee, value) { 
        obj['additionalData'] = additionalData;
        obj['index'] = index;
        obj['minedInBlockHash'] = minedInBlockHash;
        obj['minedInBlockHeight'] = minedInBlockHeight;
        obj['offer'] = offer;
        obj['receive'] = receive;
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['sequence'] = sequence;
        obj['timestamp'] = timestamp;
        obj['transactionHash'] = transactionHash;
        obj['type'] = type;
        obj['fee'] = fee;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>GetXRPRippleTransactionDetailsByTransactionIDRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXRPRippleTransactionDetailsByTransactionIDRI} obj Optional instance to populate.
     * @return {module:model/GetXRPRippleTransactionDetailsByTransactionIDRI} The populated <code>GetXRPRippleTransactionDetailsByTransactionIDRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetXRPRippleTransactionDetailsByTransactionIDRI();

            if (data.hasOwnProperty('additionalData')) {
                obj['additionalData'] = ApiClient.convertToType(data['additionalData'], 'String');
            }
            if (data.hasOwnProperty('destinationTag')) {
                obj['destinationTag'] = ApiClient.convertToType(data['destinationTag'], 'Number');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'String');
            }
            if (data.hasOwnProperty('minedInBlockHash')) {
                obj['minedInBlockHash'] = ApiClient.convertToType(data['minedInBlockHash'], 'String');
            }
            if (data.hasOwnProperty('minedInBlockHeight')) {
                obj['minedInBlockHeight'] = ApiClient.convertToType(data['minedInBlockHeight'], 'String');
            }
            if (data.hasOwnProperty('offer')) {
                obj['offer'] = GetXRPRippleTransactionDetailsByTransactionIDRIOffer.constructFromObject(data['offer']);
            }
            if (data.hasOwnProperty('receive')) {
                obj['receive'] = GetXRPRippleTransactionDetailsByTransactionIDRIReceive.constructFromObject(data['receive']);
            }
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [GetXRPRippleTransactionDetailsByTransactionIDRIRecipients]);
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = ApiClient.convertToType(data['senders'], [GetXRPRippleTransactionDetailsByTransactionIDRISenders]);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = GetXRPRippleTransactionDetailsByTransactionIDRIFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = GetXRPRippleTransactionDetailsByTransactionIDRIValue.constructFromObject(data['value']);
            }
        }
        return obj;
    }


}

/**
 * Represents additional data that may be needed.
 * @member {String} additionalData
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['additionalData'] = undefined;

/**
 * @member {Number} destinationTag
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['destinationTag'] = undefined;

/**
 * Defines the index of the transaction, i.e. the consecutive place it takes in the blockchain.
 * @member {String} index
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['index'] = undefined;

/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['minedInBlockHash'] = undefined;

/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {String} minedInBlockHeight
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['minedInBlockHeight'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIOffer} offer
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['offer'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIReceive} receive
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['receive'] = undefined;

/**
 * Represents an object of addresses that receive the transactions.
 * @member {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDRIRecipients>} recipients
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['recipients'] = undefined;

/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDRISenders>} senders
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['senders'] = undefined;

/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['sequence'] = undefined;

/**
 * Defines the status of the transaction.
 * @member {String} status
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['status'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['timestamp'] = undefined;

/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['transactionHash'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} type
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['type'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIFee} fee
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['fee'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIValue} value
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['value'] = undefined;






export default GetXRPRippleTransactionDetailsByTransactionIDRI;

