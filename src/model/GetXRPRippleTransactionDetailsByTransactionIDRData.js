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
import GetXRPRippleTransactionDetailsByTransactionIDRI from './GetXRPRippleTransactionDetailsByTransactionIDRI';

/**
 * The GetXRPRippleTransactionDetailsByTransactionIDRData model module.
 * @module model/GetXRPRippleTransactionDetailsByTransactionIDRData
 * @version 1.7.3
 */
class GetXRPRippleTransactionDetailsByTransactionIDRData {
    /**
     * Constructs a new <code>GetXRPRippleTransactionDetailsByTransactionIDRData</code>.
     * @alias module:model/GetXRPRippleTransactionDetailsByTransactionIDRData
     * @param item {module:model/GetXRPRippleTransactionDetailsByTransactionIDRI} 
     */
    constructor(item) { 
        
        GetXRPRippleTransactionDetailsByTransactionIDRData.initialize(this, item);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, item) { 
        obj['item'] = item;
    }

    /**
     * Constructs a <code>GetXRPRippleTransactionDetailsByTransactionIDRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXRPRippleTransactionDetailsByTransactionIDRData} obj Optional instance to populate.
     * @return {module:model/GetXRPRippleTransactionDetailsByTransactionIDRData} The populated <code>GetXRPRippleTransactionDetailsByTransactionIDRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetXRPRippleTransactionDetailsByTransactionIDRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = GetXRPRippleTransactionDetailsByTransactionIDRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRI} item
 */
GetXRPRippleTransactionDetailsByTransactionIDRData.prototype['item'] = undefined;






export default GetXRPRippleTransactionDetailsByTransactionIDRData;

