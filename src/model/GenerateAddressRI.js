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
import GenerateAddressRIAddresses from './GenerateAddressRIAddresses';

/**
 * The GenerateAddressRI model module.
 * @module model/GenerateAddressRI
 * @version 1.3.0
 */
class GenerateAddressRI {
    /**
     * Constructs a new <code>GenerateAddressRI</code>.
     * @alias module:model/GenerateAddressRI
     * @param addresses {Array.<module:model/GenerateAddressRIAddresses>} 
     * @param privateKey {String} Represents the privately known secret key used for authentication and encryption of the address.
     * @param publicKey {String} Represents the publicly known key used for identification of the address.
     * @param wif {String} Represents the Wallet Import Format which dictates the encoding that allows the copy of the private ECDSA key easily.
     */
    constructor(addresses, privateKey, publicKey, wif) { 
        
        GenerateAddressRI.initialize(this, addresses, privateKey, publicKey, wif);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addresses, privateKey, publicKey, wif) { 
        obj['addresses'] = addresses;
        obj['privateKey'] = privateKey;
        obj['publicKey'] = publicKey;
        obj['wif'] = wif;
    }

    /**
     * Constructs a <code>GenerateAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateAddressRI} obj Optional instance to populate.
     * @return {module:model/GenerateAddressRI} The populated <code>GenerateAddressRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenerateAddressRI();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], [GenerateAddressRIAddresses]);
            }
            if (data.hasOwnProperty('privateKey')) {
                obj['privateKey'] = ApiClient.convertToType(data['privateKey'], 'String');
            }
            if (data.hasOwnProperty('publicKey')) {
                obj['publicKey'] = ApiClient.convertToType(data['publicKey'], 'String');
            }
            if (data.hasOwnProperty('wif')) {
                obj['wif'] = ApiClient.convertToType(data['wif'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GenerateAddressRIAddresses>} addresses
 */
GenerateAddressRI.prototype['addresses'] = undefined;

/**
 * Represents the privately known secret key used for authentication and encryption of the address.
 * @member {String} privateKey
 */
GenerateAddressRI.prototype['privateKey'] = undefined;

/**
 * Represents the publicly known key used for identification of the address.
 * @member {String} publicKey
 */
GenerateAddressRI.prototype['publicKey'] = undefined;

/**
 * Represents the Wallet Import Format which dictates the encoding that allows the copy of the private ECDSA key easily.
 * @member {String} wif
 */
GenerateAddressRI.prototype['wif'] = undefined;






export default GenerateAddressRI;

