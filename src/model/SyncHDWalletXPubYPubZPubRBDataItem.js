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
 * The SyncHDWalletXPubYPubZPubRBDataItem model module.
 * @module model/SyncHDWalletXPubYPubZPubRBDataItem
 * @version 1.3.0
 */
class SyncHDWalletXPubYPubZPubRBDataItem {
    /**
     * Constructs a new <code>SyncHDWalletXPubYPubZPubRBDataItem</code>.
     * @alias module:model/SyncHDWalletXPubYPubZPubRBDataItem
     * @param extendedPublicKey {String} Defines the account extended publicly known key which is used to derive all child public keys.
     */
    constructor(extendedPublicKey) { 
        
        SyncHDWalletXPubYPubZPubRBDataItem.initialize(this, extendedPublicKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, extendedPublicKey) { 
        obj['extendedPublicKey'] = extendedPublicKey;
    }

    /**
     * Constructs a <code>SyncHDWalletXPubYPubZPubRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SyncHDWalletXPubYPubZPubRBDataItem} obj Optional instance to populate.
     * @return {module:model/SyncHDWalletXPubYPubZPubRBDataItem} The populated <code>SyncHDWalletXPubYPubZPubRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SyncHDWalletXPubYPubZPubRBDataItem();

            if (data.hasOwnProperty('extendedPublicKey')) {
                obj['extendedPublicKey'] = ApiClient.convertToType(data['extendedPublicKey'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the account extended publicly known key which is used to derive all child public keys.
 * @member {String} extendedPublicKey
 */
SyncHDWalletXPubYPubZPubRBDataItem.prototype['extendedPublicKey'] = undefined;






export default SyncHDWalletXPubYPubZPubRBDataItem;

