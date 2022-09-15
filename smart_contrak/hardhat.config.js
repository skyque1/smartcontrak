require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity : '0.8.9',
  networks: {
    ropsten:{
      url:'https://ropsten.infura.io/v3/645cd23a9fc9416c8b47cd6a82d6e02f',
      accounts: ['77000044d5cf68a84d0ff7846fe98254391aa40b8270266f6c7f1dab8edcc59d']
    }
  }
}