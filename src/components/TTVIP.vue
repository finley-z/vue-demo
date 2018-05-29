<template>
<div class="admin">
  <h1>当前账户:{{account }},余额:{{balance}} </h1>

</div>
</template>

<script>

  import Web3 from 'web3'
  import ContractsUtil from '../utils/ContractsUtil'

  ContractsUtil.initWeb3()
  ContractsUtil.initContract()
  console.info("providers:"+ContractsUtil.web3Provider)
  console.info("contracts:"+ContractsUtil.TTVIP)

  var promise=new Promise(function (resolve, reject) {
           var web3 = window.web3
           web3.eth.getAccounts(function(error, accounts) {
              if (error) {
                 console.log(error)
                 reject(new Error('Unable to connect to Metamask'))
              }else{
                  console.info(accounts[0])
                  resolve(accounts[0])
              }
            })
         });
  var account;
  promise.then(function(value) {
        account=value;
        console.info("accP:"+account);
   }, function(error) {
       console.info("err:"+error);
  })


export default {
   data() {
     return {
        message: 'Hello',
        account:account
     }
   },
  computed: {
     // 计算属性的 getter
    // account: function () {
    //      return account
    // },
     balance:function () {
       return 0
     }
  }
}



</script>
