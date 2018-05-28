// import TTVIP from '@/assets/static/contracts/TTVIP.json'
// import TruffleContract from "truffle-contract"
const HttpProviderUrl="http://192.168.1.57:8545"

// var  ContractService={
//   web3Provider: null,
//   contracts: {},
//
//   init: function() {
//     // Load pets.
//     return ContractService.initWeb3()
//   },
//
//   initWeb3: function() {
//     // Is there an injected web3 instance?
//     if (typeof web3 !== 'undefined') {
//       ContractService.web3Provider = web3.currentProvider;
//     } else {
//       // If no injected web3 instance is detected, fall back to Ganache
//       ContractService.web3Provider = new Web3.providers.HttpProvider(HttpProviderUrl)
//     }
//     web3 = new Web3(ContractService.web3Provider);
//
//     return ContractService.initContract();
//   },
//
//   initContract: function() {
//     var TTVIPArtifact = TTVIP;
//     ContractService.contracts.TTVIP = TruffleContract(TTVIPArtifact);
//
//     // Set the provider for our contract
//     ContractService.contracts.TTVIP.setProvider(ContractService.web3Provider);
//     return ContractService.bindEvents();
//   },
//
//   bindEvents: function() {
//
//   },
//
//   markAdopted: function(adopters, account) {
//     /*
//      * Replace me...
//      */
//   },
//
//   handleAdopt: function(event) {
//     event.preventDefault();
//
//     /*
//      * Replace me...
//      */
//   }
// }

// export default {
//     ContractService: function(){
//         return ContractService
//     }
// }

export default  HttpProviderUrl
