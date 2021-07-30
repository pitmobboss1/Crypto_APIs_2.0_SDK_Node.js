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


import ApiClient from "../ApiClient";
import CouldNotCalculateRateForPair from '../model/CouldNotCalculateRateForPair';
import FeatureMainnetsNotAllowedForPlan from '../model/FeatureMainnetsNotAllowedForPlan';
import GetExchangeRateByAssetSymbolsR from '../model/GetExchangeRateByAssetSymbolsR';
import GetExchangeRateByAssetsIDsR from '../model/GetExchangeRateByAssetsIDsR';
import InsufficientCredits from '../model/InsufficientCredits';
import InvalidApiKey from '../model/InvalidApiKey';
import InvalidData from '../model/InvalidData';
import InvalidPagination from '../model/InvalidPagination';
import RequestLimitReached from '../model/RequestLimitReached';
import UnexpectedServerError from '../model/UnexpectedServerError';
import UnsupportedMediaType from '../model/UnsupportedMediaType';

/**
* ExchangeRates service.
* @module api/ExchangeRatesApi
* @version 1.2.0
*/
export default class ExchangeRatesApi {

    /**
    * Constructs a new ExchangeRatesApi. 
    * @alias module:api/ExchangeRatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Exchange Rate By Asset Symbols
     * Through this endpoint customers can obtain exchange rates by asset symbols. The process represents the exchange rate value of a single unit of one asset versus another one. Data is provided per unique asset symbol.
     * @param {String} fromAssetSymbol Defines the base asset symbol to get a rate for.
     * @param {String} toAssetSymbol Defines the relation asset symbol in which the base asset rate will be displayed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.calculationTimestamp Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetExchangeRateByAssetSymbolsR} and HTTP response
     */
    getExchangeRateByAssetSymbolsWithHttpInfo(fromAssetSymbol, toAssetSymbol, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fromAssetSymbol' is set
      if (fromAssetSymbol === undefined || fromAssetSymbol === null) {
        throw new Error("Missing the required parameter 'fromAssetSymbol' when calling getExchangeRateByAssetSymbols");
      }
      // verify the required parameter 'toAssetSymbol' is set
      if (toAssetSymbol === undefined || toAssetSymbol === null) {
        throw new Error("Missing the required parameter 'toAssetSymbol' when calling getExchangeRateByAssetSymbols");
      }

      let pathParams = {
        'fromAssetSymbol': fromAssetSymbol,
        'toAssetSymbol': toAssetSymbol
      };
      let queryParams = {
        'context': opts['context'],
        'calculationTimestamp': opts['calculationTimestamp']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetExchangeRateByAssetSymbolsR;
      return this.apiClient.callApi(
        '/market-data/exchange-rates/by-symbols/{fromAssetSymbol}/{toAssetSymbol}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Exchange Rate By Asset Symbols
     * Through this endpoint customers can obtain exchange rates by asset symbols. The process represents the exchange rate value of a single unit of one asset versus another one. Data is provided per unique asset symbol.
     * @param {String} fromAssetSymbol Defines the base asset symbol to get a rate for.
     * @param {String} toAssetSymbol Defines the relation asset symbol in which the base asset rate will be displayed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.calculationTimestamp Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetExchangeRateByAssetSymbolsR}
     */
    getExchangeRateByAssetSymbols(fromAssetSymbol, toAssetSymbol, opts) {
      return this.getExchangeRateByAssetSymbolsWithHttpInfo(fromAssetSymbol, toAssetSymbol, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Exchange Rate By Assets IDs
     * Through this endpoint customers can obtain exchange rates by asset IDs. The process represents the exchange rate value of a single unit of one asset versus another one. Data is provided per unique asset Reference ID.
     * @param {String} fromAssetId Defines the base asset Reference ID to get a rate for.
     * @param {String} toAssetId Defines the relation asset Reference ID in which the base asset rate will be displayed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.calculationTimestamp Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetExchangeRateByAssetsIDsR} and HTTP response
     */
    getExchangeRateByAssetsIDsWithHttpInfo(fromAssetId, toAssetId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fromAssetId' is set
      if (fromAssetId === undefined || fromAssetId === null) {
        throw new Error("Missing the required parameter 'fromAssetId' when calling getExchangeRateByAssetsIDs");
      }
      // verify the required parameter 'toAssetId' is set
      if (toAssetId === undefined || toAssetId === null) {
        throw new Error("Missing the required parameter 'toAssetId' when calling getExchangeRateByAssetsIDs");
      }

      let pathParams = {
        'fromAssetId': fromAssetId,
        'toAssetId': toAssetId
      };
      let queryParams = {
        'context': opts['context'],
        'calculationTimestamp': opts['calculationTimestamp']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetExchangeRateByAssetsIDsR;
      return this.apiClient.callApi(
        '/market-data/exchange-rates/by-asset-ids/{fromAssetId}/{toAssetId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Exchange Rate By Assets IDs
     * Through this endpoint customers can obtain exchange rates by asset IDs. The process represents the exchange rate value of a single unit of one asset versus another one. Data is provided per unique asset Reference ID.
     * @param {String} fromAssetId Defines the base asset Reference ID to get a rate for.
     * @param {String} toAssetId Defines the relation asset Reference ID in which the base asset rate will be displayed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.calculationTimestamp Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetExchangeRateByAssetsIDsR}
     */
    getExchangeRateByAssetsIDs(fromAssetId, toAssetId, opts) {
      return this.getExchangeRateByAssetsIDsWithHttpInfo(fromAssetId, toAssetId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
