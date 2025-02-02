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
import DecodeRawTransactionHexRISB from './DecodeRawTransactionHexRISB';
import DecodeRawTransactionHexRISB2 from './DecodeRawTransactionHexRISB2';
import DecodeRawTransactionHexRISB22 from './DecodeRawTransactionHexRISB22';
import DecodeRawTransactionHexRISD from './DecodeRawTransactionHexRISD';
import DecodeRawTransactionHexRISD2 from './DecodeRawTransactionHexRISD2';
import DecodeRawTransactionHexRISE from './DecodeRawTransactionHexRISE';
import DecodeRawTransactionHexRISE2 from './DecodeRawTransactionHexRISE2';
import DecodeRawTransactionHexRISL from './DecodeRawTransactionHexRISL';
import DecodeRawTransactionHexRISZ from './DecodeRawTransactionHexRISZ';
import DecodeRawTransactionHexRISZVinInner from './DecodeRawTransactionHexRISZVinInner';
import DecodeRawTransactionHexRISZVoutInner from './DecodeRawTransactionHexRISZVoutInner';

/**
 * The DecodeRawTransactionHexRIS model module.
 * @module model/DecodeRawTransactionHexRIS
 * @version 1.7.3
 */
class DecodeRawTransactionHexRIS {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRIS</code>.
     * Represents the specific transaction data according to the blockchain
     * @alias module:model/DecodeRawTransactionHexRIS
     * @implements module:model/DecodeRawTransactionHexRISB
     * @implements module:model/DecodeRawTransactionHexRISB2
     * @implements module:model/DecodeRawTransactionHexRISD
     * @implements module:model/DecodeRawTransactionHexRISD2
     * @implements module:model/DecodeRawTransactionHexRISL
     * @implements module:model/DecodeRawTransactionHexRISE
     * @implements module:model/DecodeRawTransactionHexRISE2
     * @implements module:model/DecodeRawTransactionHexRISB22
     * @implements module:model/DecodeRawTransactionHexRISZ
     * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
     * @param transactionHash {String} Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
     * @param vSize {Number} Represents the virtual size of this transaction.
     * @param version {Number} Represents the transaction version number.
     * @param vin {Array.<module:model/DecodeRawTransactionHexRISZVinInner>} Represents the Inputs of the transaction
     * @param vout {Array.<module:model/DecodeRawTransactionHexRISZVoutInner>} Represents the Inputs of the transaction
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param recipient {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
     * @param sender {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
     * @param type {Number} Specifies the transaction type as one from three options: if response returns a `\"0\"` it means the raw transaction includes legacy transaction data, if it is `\"1\"` - includes access lists for EIP2930, and if it is `\"2\"` - EIP1559 data.
     * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
     * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
     * @param saplinged {Boolean} Defines if the transaction includes sapling or not.
     * @param valueBalance {String} Defines the transaction value balance.
     * @param versionGroupId {String} Represents the transaction version group ID
     */
    constructor(locktime, transactionHash, vSize, version, vin, vout, gasLimit, nonce, recipient, sender, type, expiryHeight, overwintered, saplinged, valueBalance, versionGroupId) { 
        DecodeRawTransactionHexRISB.initialize(this, locktime, transactionHash, vSize, version, vin, vout);DecodeRawTransactionHexRISB2.initialize(this, locktime, transactionHash, vSize, version, vin, vout);DecodeRawTransactionHexRISD.initialize(this, locktime, transactionHash, vSize, version, vin, vout);DecodeRawTransactionHexRISD2.initialize(this, locktime, transactionHash, vSize, version, vin, vout);DecodeRawTransactionHexRISL.initialize(this, locktime, transactionHash, vSize, version, vin, vout);DecodeRawTransactionHexRISE.initialize(this, gasLimit, nonce, recipient, sender, type);DecodeRawTransactionHexRISE2.initialize(this, gasLimit, nonce, recipient, sender, type);DecodeRawTransactionHexRISB22.initialize(this, gasLimit, nonce, recipient, sender, type);DecodeRawTransactionHexRISZ.initialize(this, expiryHeight, locktime, overwintered, saplinged, transactionHash, valueBalance, version, versionGroupId, vin, vout);
        DecodeRawTransactionHexRIS.initialize(this, locktime, transactionHash, vSize, version, vin, vout, gasLimit, nonce, recipient, sender, type, expiryHeight, overwintered, saplinged, valueBalance, versionGroupId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, transactionHash, vSize, version, vin, vout, gasLimit, nonce, recipient, sender, type, expiryHeight, overwintered, saplinged, valueBalance, versionGroupId) { 
        obj['locktime'] = locktime;
        obj['transactionHash'] = transactionHash;
        obj['vSize'] = vSize;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
        obj['gasLimit'] = gasLimit;
        obj['nonce'] = nonce;
        obj['recipient'] = recipient;
        obj['sender'] = sender;
        obj['type'] = type;
        obj['expiryHeight'] = expiryHeight;
        obj['overwintered'] = overwintered;
        obj['saplinged'] = saplinged;
        obj['valueBalance'] = valueBalance;
        obj['versionGroupId'] = versionGroupId;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRIS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRIS} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRIS} The populated <code>DecodeRawTransactionHexRIS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRIS();
            DecodeRawTransactionHexRISB.constructFromObject(data, obj);
            DecodeRawTransactionHexRISB2.constructFromObject(data, obj);
            DecodeRawTransactionHexRISD.constructFromObject(data, obj);
            DecodeRawTransactionHexRISD2.constructFromObject(data, obj);
            DecodeRawTransactionHexRISL.constructFromObject(data, obj);
            DecodeRawTransactionHexRISE.constructFromObject(data, obj);
            DecodeRawTransactionHexRISE2.constructFromObject(data, obj);
            DecodeRawTransactionHexRISB22.constructFromObject(data, obj);
            DecodeRawTransactionHexRISZ.constructFromObject(data, obj);

            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
            }
            if (data.hasOwnProperty('vSize')) {
                obj['vSize'] = ApiClient.convertToType(data['vSize'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [DecodeRawTransactionHexRISZVinInner]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [DecodeRawTransactionHexRISZVoutInner]);
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('approximateFee')) {
                obj['approximateFee'] = ApiClient.convertToType(data['approximateFee'], 'String');
            }
            if (data.hasOwnProperty('approximateMinimumRequiredFee')) {
                obj['approximateMinimumRequiredFee'] = ApiClient.convertToType(data['approximateMinimumRequiredFee'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPaidForData')) {
                obj['gasPaidForData'] = ApiClient.convertToType(data['gasPaidForData'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = ApiClient.convertToType(data['gasPrice'], 'String');
            }
            if (data.hasOwnProperty('inputData')) {
                obj['inputData'] = ApiClient.convertToType(data['inputData'], 'String');
            }
            if (data.hasOwnProperty('maxFeePerGas')) {
                obj['maxFeePerGas'] = ApiClient.convertToType(data['maxFeePerGas'], 'String');
            }
            if (data.hasOwnProperty('maxFeePriorityPerGas')) {
                obj['maxFeePriorityPerGas'] = ApiClient.convertToType(data['maxFeePriorityPerGas'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('r')) {
                obj['r'] = ApiClient.convertToType(data['r'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('s')) {
                obj['s'] = ApiClient.convertToType(data['s'], 'String');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('v')) {
                obj['v'] = ApiClient.convertToType(data['v'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('expiryHeight')) {
                obj['expiryHeight'] = ApiClient.convertToType(data['expiryHeight'], 'Number');
            }
            if (data.hasOwnProperty('overwintered')) {
                obj['overwintered'] = ApiClient.convertToType(data['overwintered'], 'Boolean');
            }
            if (data.hasOwnProperty('saplinged')) {
                obj['saplinged'] = ApiClient.convertToType(data['saplinged'], 'Boolean');
            }
            if (data.hasOwnProperty('valueBalance')) {
                obj['valueBalance'] = ApiClient.convertToType(data['valueBalance'], 'String');
            }
            if (data.hasOwnProperty('versionGroupId')) {
                obj['versionGroupId'] = ApiClient.convertToType(data['versionGroupId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
DecodeRawTransactionHexRIS.prototype['locktime'] = undefined;

/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
DecodeRawTransactionHexRIS.prototype['transactionHash'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
DecodeRawTransactionHexRIS.prototype['vSize'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
DecodeRawTransactionHexRIS.prototype['version'] = undefined;

/**
 * Represents the Inputs of the transaction
 * @member {Array.<module:model/DecodeRawTransactionHexRISZVinInner>} vin
 */
DecodeRawTransactionHexRIS.prototype['vin'] = undefined;

/**
 * Represents the Inputs of the transaction
 * @member {Array.<module:model/DecodeRawTransactionHexRISZVoutInner>} vout
 */
DecodeRawTransactionHexRIS.prototype['vout'] = undefined;

/**
 * Represents the size of a block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */
DecodeRawTransactionHexRIS.prototype['weight'] = undefined;

/**
 * Defines the approximate fee value. When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
 * @member {String} approximateFee
 */
DecodeRawTransactionHexRIS.prototype['approximateFee'] = undefined;

/**
 * Defines the approximate minimum fee that is required for the transaction.
 * @member {String} approximateMinimumRequiredFee
 */
DecodeRawTransactionHexRIS.prototype['approximateMinimumRequiredFee'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
DecodeRawTransactionHexRIS.prototype['gasLimit'] = undefined;

/**
 * Represents the amount of gas paid for the data in the transaction.
 * @member {String} gasPaidForData
 */
DecodeRawTransactionHexRIS.prototype['gasPaidForData'] = undefined;

/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */
DecodeRawTransactionHexRIS.prototype['gasPrice'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
DecodeRawTransactionHexRIS.prototype['inputData'] = undefined;

/**
 * Defines the maximum amount that customer is willing to pay per unit of gas to get his transaction included in a block.
 * @member {String} maxFeePerGas
 */
DecodeRawTransactionHexRIS.prototype['maxFeePerGas'] = undefined;

/**
 * Represents determined by the user value that is paid directly to miners.
 * @member {String} maxFeePriorityPerGas
 */
DecodeRawTransactionHexRIS.prototype['maxFeePriorityPerGas'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
DecodeRawTransactionHexRIS.prototype['nonce'] = undefined;

/**
 * Represents output of an ECDSA signature.
 * @member {String} r
 */
DecodeRawTransactionHexRIS.prototype['r'] = undefined;

/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
DecodeRawTransactionHexRIS.prototype['recipient'] = undefined;

/**
 * Represents output of an ECDSA signature.
 * @member {String} s
 */
DecodeRawTransactionHexRIS.prototype['s'] = undefined;

/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
DecodeRawTransactionHexRIS.prototype['sender'] = undefined;

/**
 * Specifies the transaction type as one from three options: if response returns a `\"0\"` it means the raw transaction includes legacy transaction data, if it is `\"1\"` - includes access lists for EIP2930, and if it is `\"2\"` - EIP1559 data.
 * @member {Number} type
 */
DecodeRawTransactionHexRIS.prototype['type'] = undefined;

/**
 * Defines the the recovery id.
 * @member {String} v
 */
DecodeRawTransactionHexRIS.prototype['v'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
DecodeRawTransactionHexRIS.prototype['value'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
DecodeRawTransactionHexRIS.prototype['expiryHeight'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
DecodeRawTransactionHexRIS.prototype['overwintered'] = undefined;

/**
 * Defines if the transaction includes sapling or not.
 * @member {Boolean} saplinged
 */
DecodeRawTransactionHexRIS.prototype['saplinged'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
DecodeRawTransactionHexRIS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID
 * @member {String} versionGroupId
 */
DecodeRawTransactionHexRIS.prototype['versionGroupId'] = undefined;


// Implement DecodeRawTransactionHexRISB interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
DecodeRawTransactionHexRISB.prototype['locktime'] = undefined;
/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
DecodeRawTransactionHexRISB.prototype['transactionHash'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
DecodeRawTransactionHexRISB.prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
DecodeRawTransactionHexRISB.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISBVinInner>} vin
 */
DecodeRawTransactionHexRISB.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISBVoutInner>} vout
 */
DecodeRawTransactionHexRISB.prototype['vout'] = undefined;
/**
 * Represents the size of Bitcoin block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */
DecodeRawTransactionHexRISB.prototype['weight'] = undefined;
// Implement DecodeRawTransactionHexRISB2 interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
DecodeRawTransactionHexRISB2.prototype['locktime'] = undefined;
/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
DecodeRawTransactionHexRISB2.prototype['transactionHash'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
DecodeRawTransactionHexRISB2.prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
DecodeRawTransactionHexRISB2.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISB2VinInner>} vin
 */
DecodeRawTransactionHexRISB2.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISB2VoutInner>} vout
 */
DecodeRawTransactionHexRISB2.prototype['vout'] = undefined;
/**
 * Represents the size of a block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */
DecodeRawTransactionHexRISB2.prototype['weight'] = undefined;
// Implement DecodeRawTransactionHexRISD interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
DecodeRawTransactionHexRISD.prototype['locktime'] = undefined;
/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
DecodeRawTransactionHexRISD.prototype['transactionHash'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
DecodeRawTransactionHexRISD.prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
DecodeRawTransactionHexRISD.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISDVinInner>} vin
 */
DecodeRawTransactionHexRISD.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISDVoutInner>} vout
 */
DecodeRawTransactionHexRISD.prototype['vout'] = undefined;
/**
 * Represents the size of a block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */
DecodeRawTransactionHexRISD.prototype['weight'] = undefined;
// Implement DecodeRawTransactionHexRISD2 interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
DecodeRawTransactionHexRISD2.prototype['locktime'] = undefined;
/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
DecodeRawTransactionHexRISD2.prototype['transactionHash'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
DecodeRawTransactionHexRISD2.prototype['vSize'] = undefined;
/**
 * Represents transaction version number
 * @member {Number} version
 */
DecodeRawTransactionHexRISD2.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISD2VinInner>} vin
 */
DecodeRawTransactionHexRISD2.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISD2VoutInner>} vout
 */
DecodeRawTransactionHexRISD2.prototype['vout'] = undefined;
/**
 * Represents the size of a block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */
DecodeRawTransactionHexRISD2.prototype['weight'] = undefined;
// Implement DecodeRawTransactionHexRISL interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain
 * @member {Number} locktime
 */
DecodeRawTransactionHexRISL.prototype['locktime'] = undefined;
/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
DecodeRawTransactionHexRISL.prototype['transactionHash'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
DecodeRawTransactionHexRISL.prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
DecodeRawTransactionHexRISL.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISLVinInner>} vin
 */
DecodeRawTransactionHexRISL.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISLVoutInner>} vout
 */
DecodeRawTransactionHexRISL.prototype['vout'] = undefined;
/**
 * Represents the size of a block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */
DecodeRawTransactionHexRISL.prototype['weight'] = undefined;
// Implement DecodeRawTransactionHexRISE interface:
/**
 * Defines the approximate fee value. When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
 * @member {String} approximateFee
 */
DecodeRawTransactionHexRISE.prototype['approximateFee'] = undefined;
/**
 * Defines the approximate minimum fee that is required for the transaction.
 * @member {String} approximateMinimumRequiredFee
 */
DecodeRawTransactionHexRISE.prototype['approximateMinimumRequiredFee'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
DecodeRawTransactionHexRISE.prototype['gasLimit'] = undefined;
/**
 * Represents the amount of gas paid for the data in the transaction.
 * @member {String} gasPaidForData
 */
DecodeRawTransactionHexRISE.prototype['gasPaidForData'] = undefined;
/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */
DecodeRawTransactionHexRISE.prototype['gasPrice'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
DecodeRawTransactionHexRISE.prototype['inputData'] = undefined;
/**
 * Defines the maximum amount that customer is willing to pay per unit of gas to get his transaction included in a block.
 * @member {String} maxFeePerGas
 */
DecodeRawTransactionHexRISE.prototype['maxFeePerGas'] = undefined;
/**
 * Represents determined by the user value that is paid directly to miners.
 * @member {String} maxFeePriorityPerGas
 */
DecodeRawTransactionHexRISE.prototype['maxFeePriorityPerGas'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
DecodeRawTransactionHexRISE.prototype['nonce'] = undefined;
/**
 * Represents output of an ECDSA signature.
 * @member {String} r
 */
DecodeRawTransactionHexRISE.prototype['r'] = undefined;
/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
DecodeRawTransactionHexRISE.prototype['recipient'] = undefined;
/**
 * Represents output of an ECDSA signature.
 * @member {String} s
 */
DecodeRawTransactionHexRISE.prototype['s'] = undefined;
/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
DecodeRawTransactionHexRISE.prototype['sender'] = undefined;
/**
 * Specifies the transaction type as one from three options: if response returns a `\"0\"` it means the raw transaction includes legacy transaction data, if it is `\"1\"` - includes access lists for EIP2930, and if it is `\"2\"` - EIP1559 data.
 * @member {Number} type
 */
DecodeRawTransactionHexRISE.prototype['type'] = undefined;
/**
 * Defines the the recovery id.
 * @member {String} v
 */
DecodeRawTransactionHexRISE.prototype['v'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */
DecodeRawTransactionHexRISE.prototype['value'] = undefined;
// Implement DecodeRawTransactionHexRISE2 interface:
/**
 * Defines the approximate fee value. When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
 * @member {String} approximateFee
 */
DecodeRawTransactionHexRISE2.prototype['approximateFee'] = undefined;
/**
 * Defines the approximate minimum fee that is required for the transaction.
 * @member {String} approximateMinimumRequiredFee
 */
DecodeRawTransactionHexRISE2.prototype['approximateMinimumRequiredFee'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
DecodeRawTransactionHexRISE2.prototype['gasLimit'] = undefined;
/**
 * Represents the amount of gas paid for the data in the transaction.
 * @member {String} gasPaidForData
 */
DecodeRawTransactionHexRISE2.prototype['gasPaidForData'] = undefined;
/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */
DecodeRawTransactionHexRISE2.prototype['gasPrice'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
DecodeRawTransactionHexRISE2.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
DecodeRawTransactionHexRISE2.prototype['nonce'] = undefined;
/**
 * Represents output of an ECDSA signature.
 * @member {String} r
 */
DecodeRawTransactionHexRISE2.prototype['r'] = undefined;
/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
DecodeRawTransactionHexRISE2.prototype['recipient'] = undefined;
/**
 * Represents output of an ECDSA signature.
 * @member {String} s
 */
DecodeRawTransactionHexRISE2.prototype['s'] = undefined;
/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
DecodeRawTransactionHexRISE2.prototype['sender'] = undefined;
/**
 * Specifies the transaction type as one from three options: if response returns a `\"0\"` it means the raw transaction includes legacy transaction data, if it is `\"1\"` - includes access lists for EIP2930, and if it is `\"2\"` - EIP1559 data.
 * @member {Number} type
 */
DecodeRawTransactionHexRISE2.prototype['type'] = undefined;
/**
 * Defines the the recovery id.
 * @member {String} v
 */
DecodeRawTransactionHexRISE2.prototype['v'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */
DecodeRawTransactionHexRISE2.prototype['value'] = undefined;
// Implement DecodeRawTransactionHexRISB22 interface:
/**
 * Defines the approximate fee value. When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
 * @member {String} approximateFee
 */
DecodeRawTransactionHexRISB22.prototype['approximateFee'] = undefined;
/**
 * Defines the approximate minimum fee that is required for the transaction.
 * @member {String} approximateMinimumRequiredFee
 */
DecodeRawTransactionHexRISB22.prototype['approximateMinimumRequiredFee'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
DecodeRawTransactionHexRISB22.prototype['gasLimit'] = undefined;
/**
 * Represents the amount of gas paid for the data in the transaction.
 * @member {String} gasPaidForData
 */
DecodeRawTransactionHexRISB22.prototype['gasPaidForData'] = undefined;
/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */
DecodeRawTransactionHexRISB22.prototype['gasPrice'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
DecodeRawTransactionHexRISB22.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
DecodeRawTransactionHexRISB22.prototype['nonce'] = undefined;
/**
 * Represents output of an ECDSA signature.
 * @member {String} r
 */
DecodeRawTransactionHexRISB22.prototype['r'] = undefined;
/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
DecodeRawTransactionHexRISB22.prototype['recipient'] = undefined;
/**
 * Represents output of an ECDSA signature.
 * @member {String} s
 */
DecodeRawTransactionHexRISB22.prototype['s'] = undefined;
/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
DecodeRawTransactionHexRISB22.prototype['sender'] = undefined;
/**
 * Specifies the transaction type as one from three options: if response returns a `\"0\"` it means the raw transaction includes legacy transaction data, if it is `\"1\"` - includes access lists for EIP2930, and if it is `\"2\"` - EIP1559 data.
 * @member {Number} type
 */
DecodeRawTransactionHexRISB22.prototype['type'] = undefined;
/**
 * Defines the the recovery id.
 * @member {String} v
 */
DecodeRawTransactionHexRISB22.prototype['v'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */
DecodeRawTransactionHexRISB22.prototype['value'] = undefined;
// Implement DecodeRawTransactionHexRISZ interface:
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
DecodeRawTransactionHexRISZ.prototype['expiryHeight'] = undefined;
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
DecodeRawTransactionHexRISZ.prototype['locktime'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
DecodeRawTransactionHexRISZ.prototype['overwintered'] = undefined;
/**
 * Defines if the transaction includes sapling or not.
 * @member {Boolean} saplinged
 */
DecodeRawTransactionHexRISZ.prototype['saplinged'] = undefined;
/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
DecodeRawTransactionHexRISZ.prototype['transactionHash'] = undefined;
/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
DecodeRawTransactionHexRISZ.prototype['valueBalance'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
DecodeRawTransactionHexRISZ.prototype['version'] = undefined;
/**
 * Represents the transaction version group ID
 * @member {String} versionGroupId
 */
DecodeRawTransactionHexRISZ.prototype['versionGroupId'] = undefined;
/**
 * Represents the Inputs of the transaction
 * @member {Array.<module:model/DecodeRawTransactionHexRISZVinInner>} vin
 */
DecodeRawTransactionHexRISZ.prototype['vin'] = undefined;
/**
 * Represents the Inputs of the transaction
 * @member {Array.<module:model/DecodeRawTransactionHexRISZVoutInner>} vout
 */
DecodeRawTransactionHexRISZ.prototype['vout'] = undefined;




export default DecodeRawTransactionHexRIS;

