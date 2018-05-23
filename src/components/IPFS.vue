<template>
  <div class="admin">
    <div class="admin-content">
      <div class="edit">
        <div class="avatar">
          <div class="img">
            <img :src="avatar" @click="setAvatar">
            <span>更改</span>
          </div>
          <input type="file" name="avatar" accept="image/gif,image/jpeg,image/jpg,image/png"  @change="changeImage($event)" ref="avatarInput">
        </div>
        <button type="button" @click="edit">确认修改</button>
      </div>
    </div>
  </div>
</template>
<script>
import ipfsAPI from 'ipfs-api'
const ipfsin = ipfsAPI({host: '47.106.106.193', port: '5001', protocol: 'http'});

export default {
  data () {
    return {
      avatar: this.avatar
    }
  },
  methods: {
    edit() {
         var file=this.$refs.avatarInput.files[0]
         var reader = new FileReader()
         var that = this
         reader.readAsDataURL(file)
         reader.onload = function(e) {
                const buffer = Buffer.from(reader.result);
                console.info("buf:"+buffer);

                ipfsin.add(buffer, function (err, files) {
                  console.info("err:"+err);
                  console.info("files:"+files);

              })
         }

    },
    setAvatar () {
      this.$refs.avatarInput.click()
    },
    changeImage (e) {
      var file = e.target.files[0]
     // const descBuffer = Buffer.from(file, 'utf-8');

      var reader = new FileReader()
      var that = this
      reader.readAsDataURL(file)
      reader.onload = function(e) {
        that.avatar = this.result
        console.info("res:"+this.result)
      }
    }
  }
}
</script>
