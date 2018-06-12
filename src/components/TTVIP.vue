<template>
<div class="admin">
  <h1>当前账户:{{account }},余额:{{balance}} </h1>
    <button type="button" @click="send">发送数据</button>
</div>
</template>

<script>

  import Web3 from 'web3'
  import ContractsUtil from '../utils/ContractsUtil'

  ContractsUtil.initWeb3()
  ContractsUtil.initContract()
  ContractsUtil.checkNetWork()

  var NoteData=ContractsUtil.contracts.NoteData;

  console.info("NoteData:"+NoteData);

export default {
   data() {
     return {
        message: 'Hello',
        account:"",
        balance:0
     }
   },
   beforeCreate: function () {
      alert("will be create");
      var _this = this;
           web3.eth.getAccounts(function(error, accounts) {
                    if (error) {
                       console.log(error);
                      // reject(new Error('Unable to connect to Metamask'))
                    }else{
                        console.info(accounts[0]);
                         _this.account=accounts[0];
                         _this.message="WORLD";
                    }
            })

            _this.balance=web3.eth.getBalance("0xDB9aB489ed6b547121DC179C901D0F83d21e3692")


   },

   methods: {
   send() {
     NoteData.deployed().then(function(instance){
        instance.setReply("0x1234f","0x7f2288f5bf47f3c82107ee77ec5a2dd9ae3a4ddf","i love you","{}", {from:account});
     }).then(function(result){
          console.info("res:"+result)
     }).catch(function(err){
           console.log(err);
      });
    }
  }
}




</script>
