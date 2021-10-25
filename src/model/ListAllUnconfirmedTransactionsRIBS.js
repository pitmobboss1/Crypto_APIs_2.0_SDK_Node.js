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
import ListAllUnconfirmedTransactionsRIBSB from './ListAllUnconfirmedTransactionsRIBSB';
import ListAllUnconfirmedTransactionsRIBSBC from './ListAllUnconfirmedTransactionsRIBSBC';
import ListAllUnconfirmedTransactionsRIBSBSC from './ListAllUnconfirmedTransactionsRIBSBSC';
import ListAllUnconfirmedTransactionsRIBSD from './ListAllUnconfirmedTransactionsRIBSD';
import ListAllUnconfirmedTransactionsRIBSD2 from './ListAllUnconfirmedTransactionsRIBSD2';
import ListAllUnconfirmedTransactionsRIBSE from './ListAllUnconfirmedTransactionsRIBSE';
import ListAllUnconfirmedTransactionsRIBSEC from './ListAllUnconfirmedTransactionsRIBSEC';
import ListAllUnconfirmedTransactionsRIBSECFee from './ListAllUnconfirmedTransactionsRIBSECFee';
import ListAllUnconfirmedTransactionsRIBSL from './ListAllUnconfirmedTransactionsRIBSL';
import ListAllUnconfirmedTransactionsRIBSZ from './ListAllUnconfirmedTransactionsRIBSZ';
import ListConfirmedTransactionsByAddressRIBSBSCGasPrice from './ListConfirmedTransactionsByAddressRIBSBSCGasPrice';
import ListConfirmedTransactionsByAddressRIBSZVJoinSplit from './ListConfirmedTransactionsByAddressRIBSZVJoinSplit';
import ListConfirmedTransactionsByAddressRIBSZVShieldedOutput from './ListConfirmedTransactionsByAddressRIBSZVShieldedOutput';
import ListConfirmedTransactionsByAddressRIBSZVShieldedSpend from './ListConfirmedTransactionsByAddressRIBSZVShieldedSpend';
import ListConfirmedTransactionsByAddressRIBSZVout from './ListConfirmedTransactionsByAddressRIBSZVout';
import ListUnconfirmedTransactionsByAddressRIBSZVin from './ListUnconfirmedTransactionsByAddressRIBSZVin';

/**
 * The ListAllUnconfirmedTransactionsRIBS model module.
 * @module model/ListAllUnconfirmedTransactionsRIBS
 * @version 1.3.0
 */
class ListAllUnconfirmedTransactionsRIBS {
    /**
     * Constructs a new <code>ListAllUnconfirmedTransactionsRIBS</code>.
     * @alias module:model/ListAllUnconfirmedTransactionsRIBS
     * @implements module:model/ListAllUnconfirmedTransactionsRIBSB
     * @implements module:model/ListAllUnconfirmedTransactionsRIBSBC
     * @implements module:model/ListAllUnconfirmedTransactionsRIBSL
     * @implements module:model/ListAllUnconfirmedTransactionsRIBSD
     * @implements module:model/ListAllUnconfirmedTransactionsRIBSD2
     * @implements module:model/ListAllUnconfirmedTransactionsRIBSE
     * @implements module:model/ListAllUnconfirmedTransactionsRIBSEC
     * @implements module:model/ListAllUnconfirmedTransactionsRIBSZ
     * @implements module:model/ListAllUnconfirmedTransactionsRIBSBSC
     * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
     * @param size {Number} Represents the total size of this transaction.
     * @param vSize {Number} Represents the virtual size of this transaction.
     * @param version {Number} Defines the version of the transaction.
     * @param vin {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSZVin>} Object Array representation of transaction inputs
     * @param vout {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVout>} Object Array representation of transaction outputs
     * @param fee {module:model/ListAllUnconfirmedTransactionsRIBSECFee} 
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param gasPrice {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} 
     * @param inputData {String} Represents additional information that is required for the transaction.
     * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param transactionStatus {String} Defines the transaction status.
     * @param bindingSig {String} It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
     * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
     * @param joinSplitPubKey {String} Represents an encoding of a JoinSplitSig public validating key.
     * @param joinSplitSig {String} Is used to sign transactions that contain at least one JoinSplit description.
     * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
     * @param vJoinSplit {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplit>} Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
     * @param vShieldedOutput {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVShieldedOutput>} Object Array representation of transaction output descriptions
     * @param vShieldedSpend {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVShieldedSpend>} Object Array representation of transaction spend descriptions
     * @param valueBalance {String} Defines the transaction value balance.
     * @param versionGroupId {String} Represents the transaction version group ID.
     */
    constructor(locktime, size, vSize, version, vin, vout, fee, gasLimit, gasPrice, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) { 
        ListAllUnconfirmedTransactionsRIBSB.initialize(this, locktime, size, vSize, version, vin, vout);ListAllUnconfirmedTransactionsRIBSBC.initialize(this, locktime, size, version, vin, vout);ListAllUnconfirmedTransactionsRIBSL.initialize(this, locktime, size, vSize, version, vin, vout);ListAllUnconfirmedTransactionsRIBSD.initialize(this, locktime, size, version, vin, vout);ListAllUnconfirmedTransactionsRIBSD2.initialize(this, locktime, size, version, vin, vout);ListAllUnconfirmedTransactionsRIBSE.initialize(this, fee, gasLimit, gasPrice, inputData, nonce, transactionStatus);ListAllUnconfirmedTransactionsRIBSEC.initialize(this, fee, gasLimit, gasPrice, nonce, transactionStatus);ListAllUnconfirmedTransactionsRIBSZ.initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout);ListAllUnconfirmedTransactionsRIBSBSC.initialize(this, gasLimit, gasPrice, inputData, nonce, transactionStatus);
        ListAllUnconfirmedTransactionsRIBS.initialize(this, locktime, size, vSize, version, vin, vout, fee, gasLimit, gasPrice, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, size, vSize, version, vin, vout, fee, gasLimit, gasPrice, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) { 
        obj['locktime'] = locktime;
        obj['size'] = size;
        obj['vSize'] = vSize;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
        obj['fee'] = fee;
        obj['gasLimit'] = gasLimit;
        obj['gasPrice'] = gasPrice;
        obj['inputData'] = inputData;
        obj['nonce'] = nonce;
        obj['transactionStatus'] = transactionStatus;
        obj['bindingSig'] = bindingSig;
        obj['expiryHeight'] = expiryHeight;
        obj['joinSplitPubKey'] = joinSplitPubKey;
        obj['joinSplitSig'] = joinSplitSig;
        obj['overwintered'] = overwintered;
        obj['vJoinSplit'] = vJoinSplit;
        obj['vShieldedOutput'] = vShieldedOutput;
        obj['vShieldedSpend'] = vShieldedSpend;
        obj['valueBalance'] = valueBalance;
        obj['versionGroupId'] = versionGroupId;
    }

    /**
     * Constructs a <code>ListAllUnconfirmedTransactionsRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllUnconfirmedTransactionsRIBS} obj Optional instance to populate.
     * @return {module:model/ListAllUnconfirmedTransactionsRIBS} The populated <code>ListAllUnconfirmedTransactionsRIBS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAllUnconfirmedTransactionsRIBS();
            ListAllUnconfirmedTransactionsRIBSB.constructFromObject(data, obj);
            ListAllUnconfirmedTransactionsRIBSBC.constructFromObject(data, obj);
            ListAllUnconfirmedTransactionsRIBSL.constructFromObject(data, obj);
            ListAllUnconfirmedTransactionsRIBSD.constructFromObject(data, obj);
            ListAllUnconfirmedTransactionsRIBSD2.constructFromObject(data, obj);
            ListAllUnconfirmedTransactionsRIBSE.constructFromObject(data, obj);
            ListAllUnconfirmedTransactionsRIBSEC.constructFromObject(data, obj);
            ListAllUnconfirmedTransactionsRIBSZ.constructFromObject(data, obj);
            ListAllUnconfirmedTransactionsRIBSBSC.constructFromObject(data, obj);

            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('vSize')) {
                obj['vSize'] = ApiClient.convertToType(data['vSize'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListUnconfirmedTransactionsByAddressRIBSZVin]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [ListConfirmedTransactionsByAddressRIBSZVout]);
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ListAllUnconfirmedTransactionsRIBSECFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = ListConfirmedTransactionsByAddressRIBSBSCGasPrice.constructFromObject(data['gasPrice']);
            }
            if (data.hasOwnProperty('inputData')) {
                obj['inputData'] = ApiClient.convertToType(data['inputData'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('transactionStatus')) {
                obj['transactionStatus'] = ApiClient.convertToType(data['transactionStatus'], 'String');
            }
            if (data.hasOwnProperty('bindingSig')) {
                obj['bindingSig'] = ApiClient.convertToType(data['bindingSig'], 'String');
            }
            if (data.hasOwnProperty('expiryHeight')) {
                obj['expiryHeight'] = ApiClient.convertToType(data['expiryHeight'], 'Number');
            }
            if (data.hasOwnProperty('joinSplitPubKey')) {
                obj['joinSplitPubKey'] = ApiClient.convertToType(data['joinSplitPubKey'], 'String');
            }
            if (data.hasOwnProperty('joinSplitSig')) {
                obj['joinSplitSig'] = ApiClient.convertToType(data['joinSplitSig'], 'String');
            }
            if (data.hasOwnProperty('overwintered')) {
                obj['overwintered'] = ApiClient.convertToType(data['overwintered'], 'Boolean');
            }
            if (data.hasOwnProperty('vJoinSplit')) {
                obj['vJoinSplit'] = ApiClient.convertToType(data['vJoinSplit'], [ListConfirmedTransactionsByAddressRIBSZVJoinSplit]);
            }
            if (data.hasOwnProperty('vShieldedOutput')) {
                obj['vShieldedOutput'] = ApiClient.convertToType(data['vShieldedOutput'], [ListConfirmedTransactionsByAddressRIBSZVShieldedOutput]);
            }
            if (data.hasOwnProperty('vShieldedSpend')) {
                obj['vShieldedSpend'] = ApiClient.convertToType(data['vShieldedSpend'], [ListConfirmedTransactionsByAddressRIBSZVShieldedSpend]);
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
ListAllUnconfirmedTransactionsRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListAllUnconfirmedTransactionsRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListAllUnconfirmedTransactionsRIBS.prototype['vSize'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
ListAllUnconfirmedTransactionsRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSZVin>} vin
 */
ListAllUnconfirmedTransactionsRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVout>} vout
 */
ListAllUnconfirmedTransactionsRIBS.prototype['vout'] = undefined;

/**
 * @member {module:model/ListAllUnconfirmedTransactionsRIBSECFee} fee
 */
ListAllUnconfirmedTransactionsRIBS.prototype['fee'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListAllUnconfirmedTransactionsRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} gasPrice
 */
ListAllUnconfirmedTransactionsRIBS.prototype['gasPrice'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListAllUnconfirmedTransactionsRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListAllUnconfirmedTransactionsRIBS.prototype['nonce'] = undefined;

/**
 * Defines the transaction status.
 * @member {String} transactionStatus
 */
ListAllUnconfirmedTransactionsRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListAllUnconfirmedTransactionsRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListAllUnconfirmedTransactionsRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListAllUnconfirmedTransactionsRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListAllUnconfirmedTransactionsRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListAllUnconfirmedTransactionsRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplit>} vJoinSplit
 */
ListAllUnconfirmedTransactionsRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVShieldedOutput>} vShieldedOutput
 */
ListAllUnconfirmedTransactionsRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVShieldedSpend>} vShieldedSpend
 */
ListAllUnconfirmedTransactionsRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListAllUnconfirmedTransactionsRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListAllUnconfirmedTransactionsRIBS.prototype['versionGroupId'] = undefined;


// Implement ListAllUnconfirmedTransactionsRIBSB interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListAllUnconfirmedTransactionsRIBSB.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListAllUnconfirmedTransactionsRIBSB.prototype['size'] = undefined;
/**
 * Defines the transaction's virtual size.
 * @member {Number} vSize
 */
ListAllUnconfirmedTransactionsRIBSB.prototype['vSize'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
ListAllUnconfirmedTransactionsRIBSB.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSBVin>} vin
 */
ListAllUnconfirmedTransactionsRIBSB.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSBVout>} vout
 */
ListAllUnconfirmedTransactionsRIBSB.prototype['vout'] = undefined;
// Implement ListAllUnconfirmedTransactionsRIBSBC interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListAllUnconfirmedTransactionsRIBSBC.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListAllUnconfirmedTransactionsRIBSBC.prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
ListAllUnconfirmedTransactionsRIBSBC.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSBCVin>} vin
 */
ListAllUnconfirmedTransactionsRIBSBC.prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSBCVout>} vout
 */
ListAllUnconfirmedTransactionsRIBSBC.prototype['vout'] = undefined;
// Implement ListAllUnconfirmedTransactionsRIBSL interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListAllUnconfirmedTransactionsRIBSL.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListAllUnconfirmedTransactionsRIBSL.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListAllUnconfirmedTransactionsRIBSL.prototype['vSize'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
ListAllUnconfirmedTransactionsRIBSL.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSLVin>} vin
 */
ListAllUnconfirmedTransactionsRIBSL.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSLVout>} vout
 */
ListAllUnconfirmedTransactionsRIBSL.prototype['vout'] = undefined;
// Implement ListAllUnconfirmedTransactionsRIBSD interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListAllUnconfirmedTransactionsRIBSD.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListAllUnconfirmedTransactionsRIBSD.prototype['size'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
ListAllUnconfirmedTransactionsRIBSD.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSDVin>} vin
 */
ListAllUnconfirmedTransactionsRIBSD.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVout>} vout
 */
ListAllUnconfirmedTransactionsRIBSD.prototype['vout'] = undefined;
// Implement ListAllUnconfirmedTransactionsRIBSD2 interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListAllUnconfirmedTransactionsRIBSD2.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListAllUnconfirmedTransactionsRIBSD2.prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
ListAllUnconfirmedTransactionsRIBSD2.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSD2Vin>} vin
 */
ListAllUnconfirmedTransactionsRIBSD2.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSD2Vout>} vout
 */
ListAllUnconfirmedTransactionsRIBSD2.prototype['vout'] = undefined;
// Implement ListAllUnconfirmedTransactionsRIBSE interface:
/**
 * @member {module:model/ListAllUnconfirmedTransactionsRIBSEFee} fee
 */
ListAllUnconfirmedTransactionsRIBSE.prototype['fee'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListAllUnconfirmedTransactionsRIBSE.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListAllUnconfirmedTransactionsRIBSEGasPrice} gasPrice
 */
ListAllUnconfirmedTransactionsRIBSE.prototype['gasPrice'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListAllUnconfirmedTransactionsRIBSE.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListAllUnconfirmedTransactionsRIBSE.prototype['nonce'] = undefined;
/**
 * Defines the transaction status.
 * @member {String} transactionStatus
 */
ListAllUnconfirmedTransactionsRIBSE.prototype['transactionStatus'] = undefined;
// Implement ListAllUnconfirmedTransactionsRIBSEC interface:
/**
 * @member {module:model/ListAllUnconfirmedTransactionsRIBSECFee} fee
 */
ListAllUnconfirmedTransactionsRIBSEC.prototype['fee'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListAllUnconfirmedTransactionsRIBSEC.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListAllUnconfirmedTransactionsRIBSECGasPrice} gasPrice
 */
ListAllUnconfirmedTransactionsRIBSEC.prototype['gasPrice'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListAllUnconfirmedTransactionsRIBSEC.prototype['nonce'] = undefined;
/**
 * Defines the transaction status.
 * @member {String} transactionStatus
 */
ListAllUnconfirmedTransactionsRIBSEC.prototype['transactionStatus'] = undefined;
// Implement ListAllUnconfirmedTransactionsRIBSZ interface:
/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListAllUnconfirmedTransactionsRIBSZ.prototype['bindingSig'] = undefined;
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListAllUnconfirmedTransactionsRIBSZ.prototype['expiryHeight'] = undefined;
/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListAllUnconfirmedTransactionsRIBSZ.prototype['joinSplitPubKey'] = undefined;
/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListAllUnconfirmedTransactionsRIBSZ.prototype['joinSplitSig'] = undefined;
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListAllUnconfirmedTransactionsRIBSZ.prototype['locktime'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListAllUnconfirmedTransactionsRIBSZ.prototype['overwintered'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListAllUnconfirmedTransactionsRIBSZ.prototype['size'] = undefined;
/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplit>} vJoinSplit
 */
ListAllUnconfirmedTransactionsRIBSZ.prototype['vJoinSplit'] = undefined;
/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVShieldedOutput>} vShieldedOutput
 */
ListAllUnconfirmedTransactionsRIBSZ.prototype['vShieldedOutput'] = undefined;
/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVShieldedSpend>} vShieldedSpend
 */
ListAllUnconfirmedTransactionsRIBSZ.prototype['vShieldedSpend'] = undefined;
/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListAllUnconfirmedTransactionsRIBSZ.prototype['valueBalance'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
ListAllUnconfirmedTransactionsRIBSZ.prototype['version'] = undefined;
/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListAllUnconfirmedTransactionsRIBSZ.prototype['versionGroupId'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSZVin>} vin
 */
ListAllUnconfirmedTransactionsRIBSZ.prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVout>} vout
 */
ListAllUnconfirmedTransactionsRIBSZ.prototype['vout'] = undefined;
// Implement ListAllUnconfirmedTransactionsRIBSBSC interface:
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListAllUnconfirmedTransactionsRIBSBSC.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} gasPrice
 */
ListAllUnconfirmedTransactionsRIBSBSC.prototype['gasPrice'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListAllUnconfirmedTransactionsRIBSBSC.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListAllUnconfirmedTransactionsRIBSBSC.prototype['nonce'] = undefined;
/**
 * Defines the transaction status.
 * @member {String} transactionStatus
 */
ListAllUnconfirmedTransactionsRIBSBSC.prototype['transactionStatus'] = undefined;




export default ListAllUnconfirmedTransactionsRIBS;

