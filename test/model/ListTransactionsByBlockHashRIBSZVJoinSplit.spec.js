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
    instance = new Cryptoapis.ListTransactionsByBlockHashRIBSZVJoinSplit();
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

  describe('ListTransactionsByBlockHashRIBSZVJoinSplit', function() {
    it('should create an instance of ListTransactionsByBlockHashRIBSZVJoinSplit', function() {
      // uncomment below and update the code to test ListTransactionsByBlockHashRIBSZVJoinSplit
      //var instance = new Cryptoapis.ListTransactionsByBlockHashRIBSZVJoinSplit();
      //expect(instance).to.be.a(Cryptoapis.ListTransactionsByBlockHashRIBSZVJoinSplit);
    });

    it('should have the property anchor (base name: "anchor")', function() {
      // uncomment below and update the code to test the property anchor
      //var instance = new Cryptoapis.ListTransactionsByBlockHashRIBSZVJoinSplit();
      //expect(instance).to.be();
    });

    it('should have the property cipherTexts (base name: "cipherTexts")', function() {
      // uncomment below and update the code to test the property cipherTexts
      //var instance = new Cryptoapis.ListTransactionsByBlockHashRIBSZVJoinSplit();
      //expect(instance).to.be();
    });

    it('should have the property commitments (base name: "commitments")', function() {
      // uncomment below and update the code to test the property commitments
      //var instance = new Cryptoapis.ListTransactionsByBlockHashRIBSZVJoinSplit();
      //expect(instance).to.be();
    });

    it('should have the property macs (base name: "macs")', function() {
      // uncomment below and update the code to test the property macs
      //var instance = new Cryptoapis.ListTransactionsByBlockHashRIBSZVJoinSplit();
      //expect(instance).to.be();
    });

    it('should have the property nullifiers (base name: "nullifiers")', function() {
      // uncomment below and update the code to test the property nullifiers
      //var instance = new Cryptoapis.ListTransactionsByBlockHashRIBSZVJoinSplit();
      //expect(instance).to.be();
    });

    it('should have the property oneTimePubKey (base name: "oneTimePubKey")', function() {
      // uncomment below and update the code to test the property oneTimePubKey
      //var instance = new Cryptoapis.ListTransactionsByBlockHashRIBSZVJoinSplit();
      //expect(instance).to.be();
    });

    it('should have the property proof (base name: "proof")', function() {
      // uncomment below and update the code to test the property proof
      //var instance = new Cryptoapis.ListTransactionsByBlockHashRIBSZVJoinSplit();
      //expect(instance).to.be();
    });

    it('should have the property randomSeed (base name: "randomSeed")', function() {
      // uncomment below and update the code to test the property randomSeed
      //var instance = new Cryptoapis.ListTransactionsByBlockHashRIBSZVJoinSplit();
      //expect(instance).to.be();
    });

    it('should have the property vPubNew (base name: "vPubNew")', function() {
      // uncomment below and update the code to test the property vPubNew
      //var instance = new Cryptoapis.ListTransactionsByBlockHashRIBSZVJoinSplit();
      //expect(instance).to.be();
    });

    it('should have the property vPubOld (base name: "vPubOld")', function() {
      // uncomment below and update the code to test the property vPubOld
      //var instance = new Cryptoapis.ListTransactionsByBlockHashRIBSZVJoinSplit();
      //expect(instance).to.be();
    });

  });

}));
