require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stomach deny maze purity install close army giggle'; 
let testAccounts = [
"0xc91170832f6044793b3a527f24a81471fc7ae5c778fbcb55afdd0137d4605bf4",
"0xf49c90584d216f33c60a77f30d73dcd3ea12deb83cf6dde29ee8e69dbc5e663d",
"0x755bbaf4fac8c898e7642ae902d39720d6faa70323e361ac8a2ee3069190a91b",
"0xdec127b9570c65c910fbc3005d7359d5594b8778d85a81599f0c1533bf681fe3",
"0x659e6775df15c91327ba00fa0a11d9788cee942206f4ad0f24e046d6a88d9b6f",
"0x8a2a2e1d2789b26f7d8d13a3867e4e1c955854445a75d5c24bcf7188dd475709",
"0xe7112c103dc9215e5ad5d3f6eb14ec754fb4b2634a8405884ec3e0d88e872036",
"0xc115c268ae763ef786d3077c4c357507a898cf1b161a6791cad78a8b0ef9cd0a",
"0xd0a9c18422a67087823da38ae84542eae5a0a7a5d7b05ef2dde5c6b4f20bacba",
"0x0bd59a56e4817febb535600230e87e3bc9d136a1a0f5e0b4d7146f331eb44684"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

