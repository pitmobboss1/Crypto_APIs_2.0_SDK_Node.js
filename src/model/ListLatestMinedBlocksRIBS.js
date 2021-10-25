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
import ListLatestMinedBlocksRIBSB from './ListLatestMinedBlocksRIBSB';
import ListLatestMinedBlocksRIBSBC from './ListLatestMinedBlocksRIBSBC';
import ListLatestMinedBlocksRIBSBSC from './ListLatestMinedBlocksRIBSBSC';
import ListLatestMinedBlocksRIBSD from './ListLatestMinedBlocksRIBSD';
import ListLatestMinedBlocksRIBSD2 from './ListLatestMinedBlocksRIBSD2';
import ListLatestMinedBlocksRIBSE from './ListLatestMinedBlocksRIBSE';
import ListLatestMinedBlocksRIBSEC from './ListLatestMinedBlocksRIBSEC';
import ListLatestMinedBlocksRIBSL from './ListLatestMinedBlocksRIBSL';
import ListLatestMinedBlocksRIBSZ from './ListLatestMinedBlocksRIBSZ';
import ListLatestMinedBlocksRIBSZ2 from './ListLatestMinedBlocksRIBSZ2';

/**
 * The ListLatestMinedBlocksRIBS model module.
 * @module model/ListLatestMinedBlocksRIBS
 * @version 1.3.0
 */
class ListLatestMinedBlocksRIBS {
    /**
     * Constructs a new <code>ListLatestMinedBlocksRIBS</code>.
     * @alias module:model/ListLatestMinedBlocksRIBS
     * @implements module:model/ListLatestMinedBlocksRIBSB
     * @implements module:model/ListLatestMinedBlocksRIBSBC
     * @implements module:model/ListLatestMinedBlocksRIBSEC
     * @implements module:model/ListLatestMinedBlocksRIBSE
     * @implements module:model/ListLatestMinedBlocksRIBSL
     * @implements module:model/ListLatestMinedBlocksRIBSD
     * @implements module:model/ListLatestMinedBlocksRIBSD2
     * @implements module:model/ListLatestMinedBlocksRIBSBSC
     * @implements module:model/ListLatestMinedBlocksRIBSZ
     * @implements module:model/ListLatestMinedBlocksRIBSZ2
     * @param bits {String} Represents a specific sub-unit of Zcash. Bits have two-decimal precision
     * @param chainwork {String} Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
     * @param merkleRoot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
     * @param strippedSize {Number} Defines the numeric representation of the block size excluding the witness data.
     * @param version {Number} Represents the transaction version number.
     * @param versionHex {String} Is the hexadecimal string representation of the block's version.
     * @param weight {Number} Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
     * @param extraData {String} Represents any data that can be included by the miner in the block.
     * @param gasLimit {Number} Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
     * @param gasUsed {Number} Defines how much of the gas for the block has been used.
     * @param minedInSeconds {Number} Specifies the amount of time required for the block to be mined in second
     * @param sha3Uncles {String} Defines the combined hash of all uncles for a given parent.
     * @param totalDifficulty {String} Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block
     * @param uncles {Array.<String>} 
     * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
     * @param dsBlock {Number} Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
     * @param dsDifficulty {String} Defines how difficult it is to mine the dsBlocks.
     * @param dsLeader {String} Represents a part of the DS Committee which leads the consensus protocol for the epoch.
     * @param microBlocks {Array.<String>} 
     * @param merkleroot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
     * @param nonce {String} Represents a random value that can be adjusted to satisfy the proof of work
     * @param size {Number} Represents the total size of the block in Bytes.
     */
    constructor(bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, difficulty, dsBlock, dsDifficulty, dsLeader, microBlocks, merkleroot, nonce, size) { 
        ListLatestMinedBlocksRIBSB.initialize(this, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight);ListLatestMinedBlocksRIBSBC.initialize(this, bits, chainwork, merkleRoot, version, versionHex);ListLatestMinedBlocksRIBSEC.initialize(this, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles);ListLatestMinedBlocksRIBSE.initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, uncles);ListLatestMinedBlocksRIBSL.initialize(this, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight);ListLatestMinedBlocksRIBSD.initialize(this, bits, chainwork, merkleRoot, version, versionHex);ListLatestMinedBlocksRIBSD2.initialize(this, bits, chainwork, merkleRoot, strippedSize, version, weight);ListLatestMinedBlocksRIBSBSC.initialize(this, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles);ListLatestMinedBlocksRIBSZ.initialize(this, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks);ListLatestMinedBlocksRIBSZ2.initialize(this, bits, chainwork, merkleroot, nonce, size, version);
        ListLatestMinedBlocksRIBS.initialize(this, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, difficulty, dsBlock, dsDifficulty, dsLeader, microBlocks, merkleroot, nonce, size);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, uncles, difficulty, dsBlock, dsDifficulty, dsLeader, microBlocks, merkleroot, nonce, size) { 
        obj['bits'] = bits;
        obj['chainwork'] = chainwork;
        obj['merkleRoot'] = merkleRoot;
        obj['strippedSize'] = strippedSize;
        obj['version'] = version;
        obj['versionHex'] = versionHex;
        obj['weight'] = weight;
        obj['extraData'] = extraData;
        obj['gasLimit'] = gasLimit;
        obj['gasUsed'] = gasUsed;
        obj['minedInSeconds'] = minedInSeconds;
        obj['sha3Uncles'] = sha3Uncles;
        obj['totalDifficulty'] = totalDifficulty;
        obj['uncles'] = uncles;
        obj['difficulty'] = difficulty;
        obj['dsBlock'] = dsBlock;
        obj['dsDifficulty'] = dsDifficulty;
        obj['dsLeader'] = dsLeader;
        obj['microBlocks'] = microBlocks;
        obj['merkleroot'] = merkleroot;
        obj['nonce'] = nonce;
        obj['size'] = size;
    }

    /**
     * Constructs a <code>ListLatestMinedBlocksRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListLatestMinedBlocksRIBS} obj Optional instance to populate.
     * @return {module:model/ListLatestMinedBlocksRIBS} The populated <code>ListLatestMinedBlocksRIBS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListLatestMinedBlocksRIBS();
            ListLatestMinedBlocksRIBSB.constructFromObject(data, obj);
            ListLatestMinedBlocksRIBSBC.constructFromObject(data, obj);
            ListLatestMinedBlocksRIBSEC.constructFromObject(data, obj);
            ListLatestMinedBlocksRIBSE.constructFromObject(data, obj);
            ListLatestMinedBlocksRIBSL.constructFromObject(data, obj);
            ListLatestMinedBlocksRIBSD.constructFromObject(data, obj);
            ListLatestMinedBlocksRIBSD2.constructFromObject(data, obj);
            ListLatestMinedBlocksRIBSBSC.constructFromObject(data, obj);
            ListLatestMinedBlocksRIBSZ.constructFromObject(data, obj);
            ListLatestMinedBlocksRIBSZ2.constructFromObject(data, obj);

            if (data.hasOwnProperty('bits')) {
                obj['bits'] = ApiClient.convertToType(data['bits'], 'String');
            }
            if (data.hasOwnProperty('chainwork')) {
                obj['chainwork'] = ApiClient.convertToType(data['chainwork'], 'String');
            }
            if (data.hasOwnProperty('merkleRoot')) {
                obj['merkleRoot'] = ApiClient.convertToType(data['merkleRoot'], 'String');
            }
            if (data.hasOwnProperty('strippedSize')) {
                obj['strippedSize'] = ApiClient.convertToType(data['strippedSize'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('versionHex')) {
                obj['versionHex'] = ApiClient.convertToType(data['versionHex'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('extraData')) {
                obj['extraData'] = ApiClient.convertToType(data['extraData'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'Number');
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'Number');
            }
            if (data.hasOwnProperty('minedInSeconds')) {
                obj['minedInSeconds'] = ApiClient.convertToType(data['minedInSeconds'], 'Number');
            }
            if (data.hasOwnProperty('sha3Uncles')) {
                obj['sha3Uncles'] = ApiClient.convertToType(data['sha3Uncles'], 'String');
            }
            if (data.hasOwnProperty('totalDifficulty')) {
                obj['totalDifficulty'] = ApiClient.convertToType(data['totalDifficulty'], 'String');
            }
            if (data.hasOwnProperty('uncles')) {
                obj['uncles'] = ApiClient.convertToType(data['uncles'], ['String']);
            }
            if (data.hasOwnProperty('difficulty')) {
                obj['difficulty'] = ApiClient.convertToType(data['difficulty'], 'String');
            }
            if (data.hasOwnProperty('dsBlock')) {
                obj['dsBlock'] = ApiClient.convertToType(data['dsBlock'], 'Number');
            }
            if (data.hasOwnProperty('dsDifficulty')) {
                obj['dsDifficulty'] = ApiClient.convertToType(data['dsDifficulty'], 'String');
            }
            if (data.hasOwnProperty('dsLeader')) {
                obj['dsLeader'] = ApiClient.convertToType(data['dsLeader'], 'String');
            }
            if (data.hasOwnProperty('microBlocks')) {
                obj['microBlocks'] = ApiClient.convertToType(data['microBlocks'], ['String']);
            }
            if (data.hasOwnProperty('merkleroot')) {
                obj['merkleroot'] = ApiClient.convertToType(data['merkleroot'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
ListLatestMinedBlocksRIBS.prototype['bits'] = undefined;

/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
ListLatestMinedBlocksRIBS.prototype['chainwork'] = undefined;

/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
ListLatestMinedBlocksRIBS.prototype['merkleRoot'] = undefined;

/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
ListLatestMinedBlocksRIBS.prototype['strippedSize'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
ListLatestMinedBlocksRIBS.prototype['version'] = undefined;

/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
ListLatestMinedBlocksRIBS.prototype['versionHex'] = undefined;

/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
ListLatestMinedBlocksRIBS.prototype['weight'] = undefined;

/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
ListLatestMinedBlocksRIBS.prototype['extraData'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
ListLatestMinedBlocksRIBS.prototype['gasLimit'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
ListLatestMinedBlocksRIBS.prototype['gasUsed'] = undefined;

/**
 * Specifies the amount of time required for the block to be mined in second
 * @member {Number} minedInSeconds
 */
ListLatestMinedBlocksRIBS.prototype['minedInSeconds'] = undefined;

/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
ListLatestMinedBlocksRIBS.prototype['sha3Uncles'] = undefined;

/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block
 * @member {String} totalDifficulty
 */
ListLatestMinedBlocksRIBS.prototype['totalDifficulty'] = undefined;

/**
 * @member {Array.<String>} uncles
 */
ListLatestMinedBlocksRIBS.prototype['uncles'] = undefined;

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
ListLatestMinedBlocksRIBS.prototype['difficulty'] = undefined;

/**
 * Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
 * @member {Number} dsBlock
 */
ListLatestMinedBlocksRIBS.prototype['dsBlock'] = undefined;

/**
 * Defines how difficult it is to mine the dsBlocks.
 * @member {String} dsDifficulty
 */
ListLatestMinedBlocksRIBS.prototype['dsDifficulty'] = undefined;

/**
 * Represents a part of the DS Committee which leads the consensus protocol for the epoch.
 * @member {String} dsLeader
 */
ListLatestMinedBlocksRIBS.prototype['dsLeader'] = undefined;

/**
 * @member {Array.<String>} microBlocks
 */
ListLatestMinedBlocksRIBS.prototype['microBlocks'] = undefined;

/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleroot
 */
ListLatestMinedBlocksRIBS.prototype['merkleroot'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
ListLatestMinedBlocksRIBS.prototype['nonce'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
ListLatestMinedBlocksRIBS.prototype['size'] = undefined;


// Implement ListLatestMinedBlocksRIBSB interface:
/**
 * A sub-unit of BCH equal to 0.000001 BCH, or 100 Satoshi, and is the same as microbitcoincash (μBCH). Bits have two-decimal precision.
 * @member {String} bits
 */
ListLatestMinedBlocksRIBSB.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
ListLatestMinedBlocksRIBSB.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
ListLatestMinedBlocksRIBSB.prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
ListLatestMinedBlocksRIBSB.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
ListLatestMinedBlocksRIBSB.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
ListLatestMinedBlocksRIBSB.prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
ListLatestMinedBlocksRIBSB.prototype['weight'] = undefined;
// Implement ListLatestMinedBlocksRIBSBC interface:
/**
 * A sub-unit of BCH equal to 0.000001 BCH, or 100 Satoshi, and is the same as microbitcoincash (μBCH). Bits have two-decimal precision.
 * @member {String} bits
 */
ListLatestMinedBlocksRIBSBC.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
ListLatestMinedBlocksRIBSBC.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
ListLatestMinedBlocksRIBSBC.prototype['merkleRoot'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
ListLatestMinedBlocksRIBSBC.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
ListLatestMinedBlocksRIBSBC.prototype['versionHex'] = undefined;
// Implement ListLatestMinedBlocksRIBSEC interface:
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
ListLatestMinedBlocksRIBSEC.prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
ListLatestMinedBlocksRIBSEC.prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
ListLatestMinedBlocksRIBSEC.prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
ListLatestMinedBlocksRIBSEC.prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
ListLatestMinedBlocksRIBSEC.prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
ListLatestMinedBlocksRIBSEC.prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
ListLatestMinedBlocksRIBSEC.prototype['uncles'] = undefined;
// Implement ListLatestMinedBlocksRIBSE interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
ListLatestMinedBlocksRIBSE.prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
ListLatestMinedBlocksRIBSE.prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
ListLatestMinedBlocksRIBSE.prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
ListLatestMinedBlocksRIBSE.prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
ListLatestMinedBlocksRIBSE.prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
ListLatestMinedBlocksRIBSE.prototype['sha3Uncles'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
ListLatestMinedBlocksRIBSE.prototype['uncles'] = undefined;
// Implement ListLatestMinedBlocksRIBSL interface:
/**
 * Represents a specific sub-unit of Litecoin. Bits have two-decimal precision.
 * @member {String} bits
 */
ListLatestMinedBlocksRIBSL.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
ListLatestMinedBlocksRIBSL.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
ListLatestMinedBlocksRIBSL.prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
ListLatestMinedBlocksRIBSL.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
ListLatestMinedBlocksRIBSL.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
ListLatestMinedBlocksRIBSL.prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
ListLatestMinedBlocksRIBSL.prototype['weight'] = undefined;
// Implement ListLatestMinedBlocksRIBSD interface:
/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */
ListLatestMinedBlocksRIBSD.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
ListLatestMinedBlocksRIBSD.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
ListLatestMinedBlocksRIBSD.prototype['merkleRoot'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
ListLatestMinedBlocksRIBSD.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
ListLatestMinedBlocksRIBSD.prototype['versionHex'] = undefined;
// Implement ListLatestMinedBlocksRIBSD2 interface:
/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */
ListLatestMinedBlocksRIBSD2.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahash
 * @member {String} chainwork
 */
ListLatestMinedBlocksRIBSD2.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
ListLatestMinedBlocksRIBSD2.prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
ListLatestMinedBlocksRIBSD2.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
ListLatestMinedBlocksRIBSD2.prototype['version'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
ListLatestMinedBlocksRIBSD2.prototype['weight'] = undefined;
// Implement ListLatestMinedBlocksRIBSBSC interface:
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
ListLatestMinedBlocksRIBSBSC.prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
ListLatestMinedBlocksRIBSBSC.prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
ListLatestMinedBlocksRIBSBSC.prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in second
 * @member {Number} minedInSeconds
 */
ListLatestMinedBlocksRIBSBSC.prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
ListLatestMinedBlocksRIBSBSC.prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block
 * @member {String} totalDifficulty
 */
ListLatestMinedBlocksRIBSBSC.prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
ListLatestMinedBlocksRIBSBSC.prototype['uncles'] = undefined;
// Implement ListLatestMinedBlocksRIBSZ interface:
/**
 * Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
 * @member {Number} dsBlock
 */
ListLatestMinedBlocksRIBSZ.prototype['dsBlock'] = undefined;
/**
 * Defines how difficult it is to mine the dsBlocks.
 * @member {String} dsDifficulty
 */
ListLatestMinedBlocksRIBSZ.prototype['dsDifficulty'] = undefined;
/**
 * Represents a part of the DS Committee which leads the consensus protocol for the epoch.
 * @member {String} dsLeader
 */
ListLatestMinedBlocksRIBSZ.prototype['dsLeader'] = undefined;
/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
ListLatestMinedBlocksRIBSZ.prototype['gasLimit'] = undefined;
/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
ListLatestMinedBlocksRIBSZ.prototype['gasUsed'] = undefined;
/**
 * @member {Array.<String>} microBlocks
 */
ListLatestMinedBlocksRIBSZ.prototype['microBlocks'] = undefined;
// Implement ListLatestMinedBlocksRIBSZ2 interface:
/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
ListLatestMinedBlocksRIBSZ2.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
ListLatestMinedBlocksRIBSZ2.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleroot
 */
ListLatestMinedBlocksRIBSZ2.prototype['merkleroot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
ListLatestMinedBlocksRIBSZ2.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
ListLatestMinedBlocksRIBSZ2.prototype['size'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
ListLatestMinedBlocksRIBSZ2.prototype['version'] = undefined;




export default ListLatestMinedBlocksRIBS;

