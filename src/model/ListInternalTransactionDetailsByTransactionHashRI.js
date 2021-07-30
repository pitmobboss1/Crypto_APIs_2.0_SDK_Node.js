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
 * The ListInternalTransactionDetailsByTransactionHashRI model module.
 * @module model/ListInternalTransactionDetailsByTransactionHashRI
 * @version 1.2.0
 */
class ListInternalTransactionDetailsByTransactionHashRI {
    /**
     * Constructs a new <code>ListInternalTransactionDetailsByTransactionHashRI</code>.
     * @alias module:model/ListInternalTransactionDetailsByTransactionHashRI
     * @param amount {String} Defines the specific amount of the transaction.
     * @param blockHash {String} Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param blockHeight {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param operationID {String} Represents the unique internal transaction ID in regards to the parent transaction (type trace address).
     * @param operationType {String} Defines the call type of the internal transaction.
     * @param parentHash {String} Defines the specific hash of the parent transaction.
     * @param recipient {String} Represents the recipient address with the respective amount.
     * @param sender {String} Represents the sender address with the respective amount.
     * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
     */
    constructor(amount, blockHash, blockHeight, operationID, operationType, parentHash, recipient, sender, timestamp) { 
        
        ListInternalTransactionDetailsByTransactionHashRI.initialize(this, amount, blockHash, blockHeight, operationID, operationType, parentHash, recipient, sender, timestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, blockHash, blockHeight, operationID, operationType, parentHash, recipient, sender, timestamp) { 
        obj['amount'] = amount;
        obj['blockHash'] = blockHash;
        obj['blockHeight'] = blockHeight;
        obj['operationID'] = operationID;
        obj['operationType'] = operationType;
        obj['parentHash'] = parentHash;
        obj['recipient'] = recipient;
        obj['sender'] = sender;
        obj['timestamp'] = timestamp;
    }

    /**
     * Constructs a <code>ListInternalTransactionDetailsByTransactionHashRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListInternalTransactionDetailsByTransactionHashRI} obj Optional instance to populate.
     * @return {module:model/ListInternalTransactionDetailsByTransactionHashRI} The populated <code>ListInternalTransactionDetailsByTransactionHashRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListInternalTransactionDetailsByTransactionHashRI();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('blockHash')) {
                obj['blockHash'] = ApiClient.convertToType(data['blockHash'], 'String');
            }
            if (data.hasOwnProperty('blockHeight')) {
                obj['blockHeight'] = ApiClient.convertToType(data['blockHeight'], 'Number');
            }
            if (data.hasOwnProperty('operationID')) {
                obj['operationID'] = ApiClient.convertToType(data['operationID'], 'String');
            }
            if (data.hasOwnProperty('operationType')) {
                obj['operationType'] = ApiClient.convertToType(data['operationType'], 'String');
            }
            if (data.hasOwnProperty('parentHash')) {
                obj['parentHash'] = ApiClient.convertToType(data['parentHash'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Defines the specific amount of the transaction.
 * @member {String} amount
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['amount'] = undefined;

/**
 * Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} blockHash
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['blockHash'] = undefined;

/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} blockHeight
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['blockHeight'] = undefined;

/**
 * Represents the unique internal transaction ID in regards to the parent transaction (type trace address).
 * @member {String} operationID
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['operationID'] = undefined;

/**
 * Defines the call type of the internal transaction.
 * @member {String} operationType
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['operationType'] = undefined;

/**
 * Defines the specific hash of the parent transaction.
 * @member {String} parentHash
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['parentHash'] = undefined;

/**
 * Represents the recipient address with the respective amount.
 * @member {String} recipient
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['recipient'] = undefined;

/**
 * Represents the sender address with the respective amount.
 * @member {String} sender
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['sender'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['timestamp'] = undefined;






export default ListInternalTransactionDetailsByTransactionHashRI;

