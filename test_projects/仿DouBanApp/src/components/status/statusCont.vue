<template>
	<div class="statuscont">
		<status-top></status-top>
		<status-chat v-for="v in arr" :key="v.id" :chatarrs="v"></status-chat>
	</div>
</template>

<script>
	import statusTop from "@/components/status/statusTop"
	import statusChat from "@/components/status/statusChat"
	export default{
		name:"statusCont",
		components:{
			statusTop,
			statusChat
		},
		data:function(){
			return{
				arr:[]
			}
		},
		mounted:function(){
			this.$http.get("../../static/data/data.json").then(
				function(e){
					console.log(e.data.statuschat)
					this.arr=e.data.statuschat
				},function(){
					alert("获取数据失败!")						
				})
		},
	}
</script>

<style>
	.statuscont{
		width: 100%;
		margin-top: 76px;
		background: #F7F7F7;
	}
</style>