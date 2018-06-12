import TTVIP from '../../static/contracts/TTVIP.json'
import NoteData from '../../static/contracts/NoteData.json'
import Web3 from 'web3'
import TruffleContract from "truffle-contract"

// const HttpProviderUrl ="http://47.106.106.193:8545"
const HttpProviderUrl ="http://192.168.1.57:8545"
var web3Provider=null
var contracts={}
export default {

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
  checkNetWork:function () {
    web3.version.getNetwork((err, netId) =>{
      const networkId = parseInt(netId, 10)
      if (err) {
        alert("err:"+err)
      }else{
        alert("net:"+networkId);
      }
    })
  },
  checkAccount:function () {

  },
  initContract: function () {
    var NoteDataArtifact = NoteData
    contracts.NoteData = TruffleContract(NoteDataArtifact)
    // Set the provider for our contract
    contracts.NoteData.setProvider(web3Provider)
  },
  web3Provider,
  HttpProviderUrl,
  contracts
}
