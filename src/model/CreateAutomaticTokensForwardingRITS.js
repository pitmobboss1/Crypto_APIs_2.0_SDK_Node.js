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
import CreateAutomaticTokensForwardingRITSBOT from './CreateAutomaticTokensForwardingRITSBOT';
import CreateAutomaticTokensForwardingRITSET from './CreateAutomaticTokensForwardingRITSET';

/**
 * The CreateAutomaticTokensForwardingRITS model module.
 * @module model/CreateAutomaticTokensForwardingRITS
 * @version 1.7.3
 */
class CreateAutomaticTokensForwardingRITS {
    /**
     * Constructs a new <code>CreateAutomaticTokensForwardingRITS</code>.
     * @alias module:model/CreateAutomaticTokensForwardingRITS
     * @implements module:model/CreateAutomaticTokensForwardingRITSBOT
     * @implements module:model/CreateAutomaticTokensForwardingRITSET
     * @param propertyId {Number} Defines the `propertyId` of the Omni Layer token.
     * @param contractAddress {String} Represents the specific `contractAddress` of the Token that will be forwarded.
     */
    constructor(propertyId, contractAddress) { 
        CreateAutomaticTokensForwardingRITSBOT.initialize(this, propertyId);CreateAutomaticTokensForwardingRITSET.initialize(this, contractAddress);
        CreateAutomaticTokensForwardingRITS.initialize(this, propertyId, contractAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, propertyId, contractAddress) { 
        obj['propertyId'] = propertyId;
        obj['contractAddress'] = contractAddress;
    }

    /**
     * Constructs a <code>CreateAutomaticTokensForwardingRITS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticTokensForwardingRITS} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticTokensForwardingRITS} The populated <code>CreateAutomaticTokensForwardingRITS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAutomaticTokensForwardingRITS();
            CreateAutomaticTokensForwardingRITSBOT.constructFromObject(data, obj);
            CreateAutomaticTokensForwardingRITSET.constructFromObject(data, obj);

            if (data.hasOwnProperty('propertyId')) {
                obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'Number');
            }
            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */
CreateAutomaticTokensForwardingRITS.prototype['propertyId'] = undefined;

/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */
CreateAutomaticTokensForwardingRITS.prototype['contractAddress'] = undefined;


// Implement CreateAutomaticTokensForwardingRITSBOT interface:
/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */
CreateAutomaticTokensForwardingRITSBOT.prototype['propertyId'] = undefined;
// Implement CreateAutomaticTokensForwardingRITSET interface:
/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */
CreateAutomaticTokensForwardingRITSET.prototype['contractAddress'] = undefined;




export default CreateAutomaticTokensForwardingRITS;

