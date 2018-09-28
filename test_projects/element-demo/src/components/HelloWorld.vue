<template>
  <div class="hello">
    <topheader></topheader>
    <br>
    <div class="updatemsg">
        <p>{{updatemsg}}</p>
    </div>
    <img :src="imgpath" width="100%" height="404px">
    <maincontent></maincontent>
  </div>
</template>

<script>
import topheader from "@/components/header/topheader";
import maincontent from "@/components/maincontent/maincontent"
export default {
  name: "HelloWorld",
  data(){
    return{
      updatemsg:"TypeScript 2.7 现已发布。现在下载我们最新版本！",
      imgpath:"static/img/mmd.png"
    }
  },
  components: {
    topheader,
    maincontent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.updatemsg {
  width: 100%;
  height: 50px;
  background: #dddddd;
}
.updatemsg p {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
}
</style>
