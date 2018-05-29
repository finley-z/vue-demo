import TTVIP from '../../static/contracts/TTVIP.json'
import Web3 from 'web3'
import TruffleContract from "truffle-contract"

const HttpProviderUrl ="http://192.168.1.57:8545"
var web3Provider=null
var contracts={}
export default {
  web3Provider,
  contracts,
  // public method for encoding
  init: function (input) {

  },

  initWeb3: function () {
    // Is there an injected web3 instance?
    if (typeof web3 !== 'undefined') {
      web3Provider = web3.currentProvider
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      web3Provider = new Web3.providers.HttpProvider(HttpProviderUrl)
    }
     web3 = new Web3(web3Provider)
  },
  initContract: function () {
    var TTVIPArtifact = TTVIP
    contracts.TTVIP = TruffleContract(TTVIPArtifact)
    // Set the provider for our contract
    contracts.TTVIP.setProvider(web3Provider)
  }
}
