<template>
<div class="admin">
  <h1>hello ipfs</h1>
  <li v-for="pic in pics">
    <img v-bind:src="pic" />
  </li>
</div>
</template>



<script>
import ipfsAPI from 'ipfs-api'
const ipfsin = ipfsAPI({
  host: '127.0.0.1',
  port: '5001',
  protocol: 'http'
});

export default {
  data() {
    return {
      pics: [
        "http://127.0.0.1:5001/api/v0/get?arg=QmPh2kkvrbt1hpUiofR6hvhQjs95wsvf6RYCwPRWPpjeSP",
        "http://127.0.0.1:5001/api/v0/get?arg=QmYvxeoVS3DycU6qdLSLe3X2R9eg886yT7ZBFLW6BN4peT"
      ]
    }
  }
}
</script>
