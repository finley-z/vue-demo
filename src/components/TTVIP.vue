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
export default {
   data() {
     return {
        message: 'Hello'
     }
   },
  computed: {
     // 计算属性的 getter
     account: function () {
     return  new Promise(function (resolve, reject) {
         var web3 = window.web3
         web3.eth.getAccounts(function(error, accounts) {
            if (error) {
               console.log(error)
               reject(new Error('Unable to connect to Metamask'))
            }else{
                console.info(accounts[0])
                //resolve({account:accounts[0]})
                  resolve("fwefgweg")
            }
          })
       }).then(result=>result)
     },
     balance:function () {

        web3.eth.getBalance("0xDB9aB489ed6b547121DC179C901D0F83d21e3692",function(error, b){
            balance=b
       })
       return b
     }
  }
}



</script>
