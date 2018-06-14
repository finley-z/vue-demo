<template>
<div class="admin">
  <h1>hello ipfs</h1>
      <img src="http://localhost:8080/ipfs/QmeXuNsvjTZj7pduZ9noaXNv2uKPGCwbB4f7gBmPCaoJJF"/>

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
        "http://localhost:8080/ipfs/QmXq1jH7deV4wuotCauPfGe7XMYZKTyX4XGAypBgNGKntK",
        "http://localhost:8080/ipfs/QmXq1jH7deV4wuotCauPfGe7XMYZKTyX4XGAypBgNGKntK"
      ]
    }
  }
}
</script>
