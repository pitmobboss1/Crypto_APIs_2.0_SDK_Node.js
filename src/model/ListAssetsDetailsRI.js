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
import ListAssetsDetailsRIAssetLogo from './ListAssetsDetailsRIAssetLogo';
import ListAssetsDetailsRILatestRate from './ListAssetsDetailsRILatestRate';
import ListAssetsDetailsRIS from './ListAssetsDetailsRIS';

/**
 * The ListAssetsDetailsRI model module.
 * @module model/ListAssetsDetailsRI
 * @version 1.2.0
 */
class ListAssetsDetailsRI {
    /**
     * Constructs a new <code>ListAssetsDetailsRI</code>.
     * @alias module:model/ListAssetsDetailsRI
     * @param assetId {String} Defines the unique ID of the specific asset.
     * @param assetLogo {module:model/ListAssetsDetailsRIAssetLogo} 
     * @param assetName {String} Specifies the name of the asset in question.
     * @param assetOriginalSymbol {String} Specifies the asset's original symbol as introduced by its founders.
     * @param assetSymbol {String} Specifies the asset's unique symbol in the Crypto APIs listings.
     * @param assetType {module:model/ListAssetsDetailsRI.AssetTypeEnum} Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
     * @param latestRate {module:model/ListAssetsDetailsRILatestRate} 
     * @param specificData {module:model/ListAssetsDetailsRIS} 
     */
    constructor(assetId, assetLogo, assetName, assetOriginalSymbol, assetSymbol, assetType, latestRate, specificData) { 
        
        ListAssetsDetailsRI.initialize(this, assetId, assetLogo, assetName, assetOriginalSymbol, assetSymbol, assetType, latestRate, specificData);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assetId, assetLogo, assetName, assetOriginalSymbol, assetSymbol, assetType, latestRate, specificData) { 
        obj['assetId'] = assetId;
        obj['assetLogo'] = assetLogo;
        obj['assetName'] = assetName;
        obj['assetOriginalSymbol'] = assetOriginalSymbol;
        obj['assetSymbol'] = assetSymbol;
        obj['assetType'] = assetType;
        obj['latestRate'] = latestRate;
        obj['specificData'] = specificData;
    }

    /**
     * Constructs a <code>ListAssetsDetailsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAssetsDetailsRI} obj Optional instance to populate.
     * @return {module:model/ListAssetsDetailsRI} The populated <code>ListAssetsDetailsRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAssetsDetailsRI();

            if (data.hasOwnProperty('assetId')) {
                obj['assetId'] = ApiClient.convertToType(data['assetId'], 'String');
            }
            if (data.hasOwnProperty('assetLogo')) {
                obj['assetLogo'] = ListAssetsDetailsRIAssetLogo.constructFromObject(data['assetLogo']);
            }
            if (data.hasOwnProperty('assetName')) {
                obj['assetName'] = ApiClient.convertToType(data['assetName'], 'String');
            }
            if (data.hasOwnProperty('assetOriginalSymbol')) {
                obj['assetOriginalSymbol'] = ApiClient.convertToType(data['assetOriginalSymbol'], 'String');
            }
            if (data.hasOwnProperty('assetSymbol')) {
                obj['assetSymbol'] = ApiClient.convertToType(data['assetSymbol'], 'String');
            }
            if (data.hasOwnProperty('assetType')) {
                obj['assetType'] = ApiClient.convertToType(data['assetType'], 'String');
            }
            if (data.hasOwnProperty('latestRate')) {
                obj['latestRate'] = ListAssetsDetailsRILatestRate.constructFromObject(data['latestRate']);
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('specificData')) {
                obj['specificData'] = ListAssetsDetailsRIS.constructFromObject(data['specificData']);
            }
        }
        return obj;
    }


}

/**
 * Defines the unique ID of the specific asset.
 * @member {String} assetId
 */
ListAssetsDetailsRI.prototype['assetId'] = undefined;

/**
 * @member {module:model/ListAssetsDetailsRIAssetLogo} assetLogo
 */
ListAssetsDetailsRI.prototype['assetLogo'] = undefined;

/**
 * Specifies the name of the asset in question.
 * @member {String} assetName
 */
ListAssetsDetailsRI.prototype['assetName'] = undefined;

/**
 * Specifies the asset's original symbol as introduced by its founders.
 * @member {String} assetOriginalSymbol
 */
ListAssetsDetailsRI.prototype['assetOriginalSymbol'] = undefined;

/**
 * Specifies the asset's unique symbol in the Crypto APIs listings.
 * @member {String} assetSymbol
 */
ListAssetsDetailsRI.prototype['assetSymbol'] = undefined;

/**
 * Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
 * @member {module:model/ListAssetsDetailsRI.AssetTypeEnum} assetType
 */
ListAssetsDetailsRI.prototype['assetType'] = undefined;

/**
 * @member {module:model/ListAssetsDetailsRILatestRate} latestRate
 */
ListAssetsDetailsRI.prototype['latestRate'] = undefined;

/**
 * Asset`s unique slug string in Crypto APIs listings
 * @member {String} slug
 */
ListAssetsDetailsRI.prototype['slug'] = undefined;

/**
 * @member {module:model/ListAssetsDetailsRIS} specificData
 */
ListAssetsDetailsRI.prototype['specificData'] = undefined;





/**
 * Allowed values for the <code>assetType</code> property.
 * @enum {String}
 * @readonly
 */
ListAssetsDetailsRI['AssetTypeEnum'] = {

    /**
     * value: "fiat"
     * @const
     */
    "fiat": "fiat",

    /**
     * value: "crypto"
     * @const
     */
    "crypto": "crypto"
};



export default ListAssetsDetailsRI;

