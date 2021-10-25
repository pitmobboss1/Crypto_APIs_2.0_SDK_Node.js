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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Cryptoapis);
  }
}(this, function(expect, Cryptoapis) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Cryptoapis.ListAssetsDetailsRI();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ListAssetsDetailsRI', function() {
    it('should create an instance of ListAssetsDetailsRI', function() {
      // uncomment below and update the code to test ListAssetsDetailsRI
      //var instance = new Cryptoapis.ListAssetsDetailsRI();
      //expect(instance).to.be.a(Cryptoapis.ListAssetsDetailsRI);
    });

    it('should have the property assetId (base name: "assetId")', function() {
      // uncomment below and update the code to test the property assetId
      //var instance = new Cryptoapis.ListAssetsDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property assetLogo (base name: "assetLogo")', function() {
      // uncomment below and update the code to test the property assetLogo
      //var instance = new Cryptoapis.ListAssetsDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property assetName (base name: "assetName")', function() {
      // uncomment below and update the code to test the property assetName
      //var instance = new Cryptoapis.ListAssetsDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property assetOriginalSymbol (base name: "assetOriginalSymbol")', function() {
      // uncomment below and update the code to test the property assetOriginalSymbol
      //var instance = new Cryptoapis.ListAssetsDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property assetSymbol (base name: "assetSymbol")', function() {
      // uncomment below and update the code to test the property assetSymbol
      //var instance = new Cryptoapis.ListAssetsDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property assetType (base name: "assetType")', function() {
      // uncomment below and update the code to test the property assetType
      //var instance = new Cryptoapis.ListAssetsDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property latestRate (base name: "latestRate")', function() {
      // uncomment below and update the code to test the property latestRate
      //var instance = new Cryptoapis.ListAssetsDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property slug (base name: "slug")', function() {
      // uncomment below and update the code to test the property slug
      //var instance = new Cryptoapis.ListAssetsDetailsRI();
      //expect(instance).to.be();
    });

    it('should have the property specificData (base name: "specificData")', function() {
      // uncomment below and update the code to test the property specificData
      //var instance = new Cryptoapis.ListAssetsDetailsRI();
      //expect(instance).to.be();
    });

  });

}));
