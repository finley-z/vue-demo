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

  var NoteData=ContractsUtil.contracts.NoteData;

  console.info("NoteData:"+NoteData);

export default {
   data() {
     return {
        message: 'Hello',
        account:account
     }
   },
   beforeCreate: function () {
      alert("will be create");
   },
  computed: {
     // 计算属性的 getter
    // account: function () {
    //      return account
    // },
     balance:function () {
       return 0
     }
  },
   methods: {
  send() {
     NoteData.at("0x754d470f40ffa67c6091c03879baa31c8784deb0").then(function(instance){
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
