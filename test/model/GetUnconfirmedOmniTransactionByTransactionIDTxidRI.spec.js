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
    instance = new Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI();
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

  describe('GetUnconfirmedOmniTransactionByTransactionIDTxidRI', function() {
    it('should create an instance of GetUnconfirmedOmniTransactionByTransactionIDTxidRI', function() {
      // uncomment below and update the code to test GetUnconfirmedOmniTransactionByTransactionIDTxidRI
      //var instance = new Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI();
      //expect(instance).to.be.a(Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI();
      //expect(instance).to.be();
    });

    it('should have the property divisible (base name: "divisible")', function() {
      // uncomment below and update the code to test the property divisible
      //var instance = new Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI();
      //expect(instance).to.be();
    });

    it('should have the property mined (base name: "mined")', function() {
      // uncomment below and update the code to test the property mined
      //var instance = new Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI();
      //expect(instance).to.be();
    });

    it('should have the property propertyId (base name: "propertyId")', function() {
      // uncomment below and update the code to test the property propertyId
      //var instance = new Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI();
      //expect(instance).to.be();
    });

    it('should have the property recipients (base name: "recipients")', function() {
      // uncomment below and update the code to test the property recipients
      //var instance = new Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI();
      //expect(instance).to.be();
    });

    it('should have the property senders (base name: "senders")', function() {
      // uncomment below and update the code to test the property senders
      //var instance = new Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI();
      //expect(instance).to.be();
    });

    it('should have the property sent (base name: "sent")', function() {
      // uncomment below and update the code to test the property sent
      //var instance = new Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI();
      //expect(instance).to.be();
    });

    it('should have the property transactionId (base name: "transactionId")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instance = new Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI();
      //expect(instance).to.be();
    });

    it('should have the property typeInt (base name: "typeInt")', function() {
      // uncomment below and update the code to test the property typeInt
      //var instance = new Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI();
      //expect(instance).to.be();
    });

  });

}));
