<template>
	<div class="groupcont">
		<group-top></group-top>
		<div class="jxtj">
			<p>精选推荐</p>
		</div>
		<div class="groupcont_title">
			<div>
				<hr />
			</div>
			<div>影视</div>
			<div>
				<hr />
			</div>			
		</div>
		<span class="clear"></span>
		<group-jptj v-for="v in arr" :key="v.id" :jptjarr="v"></group-jptj>
	</div>
</template>

<script>
	import groupTop from "@/components/group/groupTop"
	import groupJptj from "@/components/group/groupJptj"
	export default{
		name:"groupCont",
		components:{
			groupTop,
			groupJptj
		},
		data(){
			return{
				arr:[]
			}
		},
		mounted:function(){
			this.$http.get("../../static/data/data.json").then(
				function(e){
					
					this.arr=e.data.groupjptj
				},function(){
					alert("获取数据失败!")						
				})
		}
	}
</script>

<style>
	.groupcont{
		width: 100%;		
		margin-top: 76px;
	    height: 510px;
    	overflow: auto;
	}
	.jxtj{
		width: 90%;
		height: 80px;
		background: url(../../../static/images/ic_rec_group_banner_6.png) center no-repeat;
		background-size:contain;
		margin: 0 auto;
		padding-top: 45px;
		padding-left: 10px;
		box-sizing: border-box;
	}	
	.jxtj p{
		color: white;
		font-size: 16px;
	}
	div.groupcont_title{
		padding: 0 10px;
		height: 30px;
		width: 100%;
		text-align: center;
		box-sizing: border-box;	
		
	}
	.groupcont_title div{
		height: 30px;
		float: left;
	}
	.groupcont_title div:nth-child(1){
		padding-top:13px ;
		width: 40%;
		box-sizing: border-box;
		color: #ccc;
	}
	.groupcont_title div:nth-child(2){
		width: 20%;
	}
	.groupcont_title div:nth-child(3){
		padding-top:13px ;
		width: 40%;
		box-sizing: border-box;
		color: #ccc;
	}
</style>