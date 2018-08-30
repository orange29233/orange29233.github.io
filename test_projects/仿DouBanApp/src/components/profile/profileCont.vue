<template>
	<div class="profilecont">
		<profile-top></profile-top>
		<profile-tips></profile-tips>
		<profile-list v-for="v in arr" :key="v.id" :listarr="v"></profile-list>
	</div>
</template>

<script>
	import profileTop from "@/components/profile/profileTop"
	import profileTips from "@/components/profile/profileTips"
	import profileList from "@/components/profile/profileList"
	export default{
		name:"profileCont",
		components:{
			profileTop,
			profileTips,
			profileList
		},
		data(){
			return{
				arr:[]
			}
		},
		mounted:function(){
			this.$http.get("../../static/data/data.json").then(
				function(e){
					console.log(e.data.listarr)
					this.arr=e.data.listarr
				},function(){
					alert("获取数据失败!")						
				})
		}
	}
</script>

<style>
	.profilecont{
		width: 100%;
		margin-top: 76px;
		background: #F7F7F7;
	    height: 510px;
    	overflow: auto;
	}
</style>