<template>
    <div class="topheader">
      <ul class="navtop">
        <li v-for="(v,k) in navmsg">{{v}}</li>
      </ul>
        
    </div>  
</template>

<script>
export default {
  name: "topheader",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      navmsg: ["起步", "文档", "下载", "联系", "练习", "论坛", "更新"]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.topheader {
  width: 100%;
  height: 50px;
  background: #294e80;
}
.navtop{
  margin: 0 auto;
  height: 50px;
  display: flex;
  justify-content: center;

}
.navtop li{
  width: 4rem;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-size: 14px;
}
.navtop li:hover{
  color:#ffa700;
  cursor: pointer;
}

</style>


