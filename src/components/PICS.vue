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
  host: '120.79.247.185',
  port: '5001',
  protocol: 'http'
});

export default {
  data() {
    return {
      pics: [
        "http://120.79.247.185:5001/api/v0/get?arg=QmcdnowvDR5YYiDGpgirrEciCcgbNFhDYivGfFDQtWwtXe",
        "http://120.79.247.185:5001/api/v0/get?arg=QmYvxeoVS3DycU6qdLSLe3X2R9eg886yT7ZBFLW6BN4peT"
      ]
    }
  }
}
</script>
