<template>
<div class="admin">
  <div class="admin-content">
    <div class="edit">
      <div class="avatar">
        <div class="img">
          <img :src="avatar" @click="setAvatar">
          <span>更改</span>
        </div>
        <input type="file" name="avatar" multiple="multiple" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)" ref="avatarInput">
      </div>
      <button type="button" @click="edit">确认修改</button>
    </div>
  </div>
  <div>
    <img :src="pic1">
    <img :src="pic2">
    <button type="button" @click="getPic">获取图片</button>
  </div>
</div>
</template>
<script>
import ipfsAPI from 'ipfs-api'
const ipfsin = ipfsAPI({
  host: '127.0.0.1',
  port: '5001',
  protocol: 'http'
});

var filesUpload= new Array()

export default {
  data() {
    return {
      avatar: this.avatar,
      pic1: this.pic1,
      pic2: this.pic2
    }
  },
  methods: {
    edit() {
      console.info(JSON.stringify(filesUpload));
      ipfsin.add(filesUpload, function(err, files) {
          console.info("err:" + err);
          console.info("files:" + files);
      })
    },
    setAvatar() {
      this.$refs.avatarInput.click()
    },
    changeImage(e) {
      var files = this.$refs.avatarInput.files

      var filesLength =files.length;
      var index =0;
      var reader = new FileReader()
      reader.readAsArrayBuffer(files[index])
      var that=this
      reader.onload = function() {
         // that.avatar = this.result
         console.info("num:"+index);
         const buffer = Buffer.from(reader.result);
         filesUpload.push({path:index+'.jpg',content:buffer})
         if(index==0){
             that.pic1 = this.result
         }
         if(index==1){
             that.pic2 = this.result
         }
         index++
         if(index <filesLength) {
             reader.readAsArrayBuffer(files[index]);
         }
        console.info("loaded:"+index+";"+buffer);
        //  console.info("filesUpload:" + filesUpload);
      }

    },
    getPic() {
      var that = this
      ipfsin.files.get("QmXq1jH7deV4wuotCauPfGe7XMYZKTyX4XGAypBgNGKntK", function(err, files) {
//QmbEZ3HH6bN1iVau7p9HzLn89AzQ3MbMgwvFuK4QGqxxgB
        console.info("len:"+files.length);
        for(var i=0;i<files.length;i++){
         var file=files[i]
         var src = file.content.toString('utf8')
                 console.info("src:"+src);

         if(i==0){
            that.pic1 = src
         }
         if(i==1){
            that.pic2 = src
         }
        }
      })
    }
  }
}
</script>
