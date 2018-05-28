<template>
<div class="admin">
  <h1>当前账户:{{ account }},余额:{{balance}} </h1>

</div>
</template>



<script>
  import ContractsUtil from '../utils/ContractsUtil'



export default {
  data() {
    var account;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
          console.log(error)
      }
      account = accounts[0]
    })
    var balance;
    // ContractService.contracts.TTVIP.deployed().then(function(instance) {
    //
    //  balance=instance.getBalance({from: account});
    // })

    return {
      account: this.avatar,
      balance: this.balance
    }
  }
}
</script>
