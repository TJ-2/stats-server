export const BSC = 56
export const ARBITRUM = 40
export const AVALANCHE = 43114

export const addresses = {
    [BSC]: {
        Vault: "0xc73A8DcAc88498FD4b4B1b2AaA37b0a2614Ff67B",
        Router: "0xD46B23D042E976F8666F554E928e0Dc7478a8E1f",
        USDG: "0x85E76cbf4893c1fbcB34dCF1239A91CE2A4CF5a7",
        Stabilize: "0x82C4841728fBd5e08A77A95cA3192BcE1F645Ee9",
        WardenSwapRouter: "0x7A1Decf6c24232060F4D76A33a317157549C2093",
        OneInchRouter: "0x11111112542D85B3EF69AE05771c2dCCff4fAa26",
        DodoexRouter: "0x8F8Dd7DB1bDA5eD3da8C9daf3bfa471c12d58486",
        MetamaskRouter: "0x1a1ec25DC08e98e5E93F1104B5e5cdD298707d31"
    },

    [ARBITRUM]: {
        GMX: '0xd2504a02fABd7E546e41aD39597c377cA8B0E1Df',
        BTC: '0xf390830df829cf22c53c8840554b98eafc5dcbc2',
        ETH: '0xfa9343c3897324496a05fc75abed6bac29f8a40f',
        TLOS: '0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E',
        UNI: '0xaE85Bf723A9e74d6c663dd226996AC1b8d075AA9',
        DAI: '0x7456Dd35C2FD863C7Aa917E6A46dBF9192ca6B70',
        RewardReader: '0x0d7Fe3a3e8C53758eAfc5728f0633ed3bFF2EAA1',
        GLP: '0x96535E6ecF23Ba183248E0fC653361F5920F171D',
        GlpManager: '0x1B4Bd4C1a7e5Ca8E7278615d55886907961E46b8'
    },

    [AVALANCHE]: {
        GMX: '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a',
        AVAX: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
        ETH: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
        BTC: '0x50b7545627a5162f82a992c33b87adc75187b218',
        RewardReader: '0x04Fc11Bd28763872d143637a7c768bD96E44c1b6',
        GLP: '0x01234181085565ed162a948b6a5e88758CD7c7b8',
        GlpManager: '0xe1ae4d4b06A5Fe1fc288f6B4CD72f9F8323B107F'
    }
}

export function getAddress(chainId, key) {
    if (!(chainId) in addresses) {
        throw new Error(`Unknown chain ${chainId}`)
    }
    if (!(key in addresses[chainId])) {
        throw new Error(`Unknown address key ${key}`)
    }
    return addresses[chainId][key]
}
