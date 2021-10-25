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
import ListConfirmedTransactionsByAddressRIBSLScriptSig from './ListConfirmedTransactionsByAddressRIBSLScriptSig';

/**
 * The ListAllUnconfirmedTransactionsRIBSLVin model module.
 * @module model/ListAllUnconfirmedTransactionsRIBSLVin
 * @version 1.3.0
 */
class ListAllUnconfirmedTransactionsRIBSLVin {
    /**
     * Constructs a new <code>ListAllUnconfirmedTransactionsRIBSLVin</code>.
     * @alias module:model/ListAllUnconfirmedTransactionsRIBSLVin
     * @param addresses {Array.<String>} 
     * @param scriptSig {module:model/ListConfirmedTransactionsByAddressRIBSLScriptSig} 
     * @param sequence {String} Represents the script sequence number.
     * @param txid {String} Represents the reference transaction identifier.
     * @param txinwitness {Array.<String>} 
     * @param value {String} Represents the sent/received amount.
     * @param vout {Number} Defines the vout of the transaction output, i.e. which output to spend.
     */
    constructor(addresses, scriptSig, sequence, txid, txinwitness, value, vout) { 
        
        ListAllUnconfirmedTransactionsRIBSLVin.initialize(this, addresses, scriptSig, sequence, txid, txinwitness, value, vout);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addresses, scriptSig, sequence, txid, txinwitness, value, vout) { 
        obj['addresses'] = addresses;
        obj['scriptSig'] = scriptSig;
        obj['sequence'] = sequence;
        obj['txid'] = txid;
        obj['txinwitness'] = txinwitness;
        obj['value'] = value;
        obj['vout'] = vout;
    }

    /**
     * Constructs a <code>ListAllUnconfirmedTransactionsRIBSLVin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllUnconfirmedTransactionsRIBSLVin} obj Optional instance to populate.
     * @return {module:model/ListAllUnconfirmedTransactionsRIBSLVin} The populated <code>ListAllUnconfirmedTransactionsRIBSLVin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAllUnconfirmedTransactionsRIBSLVin();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('scriptSig')) {
                obj['scriptSig'] = ListConfirmedTransactionsByAddressRIBSLScriptSig.constructFromObject(data['scriptSig']);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'String');
            }
            if (data.hasOwnProperty('txid')) {
                obj['txid'] = ApiClient.convertToType(data['txid'], 'String');
            }
            if (data.hasOwnProperty('txinwitness')) {
                obj['txinwitness'] = ApiClient.convertToType(data['txinwitness'], ['String']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} addresses
 */
ListAllUnconfirmedTransactionsRIBSLVin.prototype['addresses'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSLScriptSig} scriptSig
 */
ListAllUnconfirmedTransactionsRIBSLVin.prototype['scriptSig'] = undefined;

/**
 * Represents the script sequence number.
 * @member {String} sequence
 */
ListAllUnconfirmedTransactionsRIBSLVin.prototype['sequence'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} txid
 */
ListAllUnconfirmedTransactionsRIBSLVin.prototype['txid'] = undefined;

/**
 * @member {Array.<String>} txinwitness
 */
ListAllUnconfirmedTransactionsRIBSLVin.prototype['txinwitness'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListAllUnconfirmedTransactionsRIBSLVin.prototype['value'] = undefined;

/**
 * Defines the vout of the transaction output, i.e. which output to spend.
 * @member {Number} vout
 */
ListAllUnconfirmedTransactionsRIBSLVin.prototype['vout'] = undefined;






export default ListAllUnconfirmedTransactionsRIBSLVin;

