require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remain umbrella guess clinic only skirt'; 
let testAccounts = [
"0x1e42217e31d116c4948c9595ca5790a8eb03fd480b0c998dc5e38f95c17a9a95",
"0x3e354544cb7415b2cab5cba319423592266b940be7624480a28643b4c871a3fe",
"0x6771dde7f1545003316d82cdd5bb0ed603a44cdf23e8586056b031fa6dcb68c8",
"0x1299467be20c91c9170feefffd02afb6d00097589767e28e022560258d4b0350",
"0xdf8fb9ca67ab4c7ed6c3f566fac230ba4080130444ff3c77ecf1b29422a89798",
"0x3f2e231411178b961954c277d9fef84cc10c758cf73d86a6259f94dc783a24bf",
"0xa26f471bd3258b4a5842524954c0e17d7559a62b75bfa660cf93c898f7db7903",
"0x14eb392f365d10641f63b4374382cda1cc3ef0c499c635561ea7066819e17e82",
"0x911116ed4372a8fcd8020753e4cada23a91a8f6df8173a3ba2944f688e2fb9e6",
"0x6d6f1be1bc155a2dd3d68c80f182052798cf75de51fb6d72d3dba2c84adbfbef"
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
            version: '^0.5.11'
        }
    }
};
