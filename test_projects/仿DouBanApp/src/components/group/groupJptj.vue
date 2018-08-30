<template>
	<div class="groupjptj">
		<div class="jptj_imgbox">
			<img :src="jptjarr.src" alt="" />		
		</div>
		<div class="jptj_cont">
			<h4>{{jptjarr.title}}</h4>
			<p>{{jptjarr.cont}}</p>
		</div>
		<div class="jptj_info">
			<span>{{jptjarr.num}}</span>
			<img src="static/images/ic_group_check_anonymous.png" alt="" />
		</div>	
		<div class="clear"></div>
	</div>
	
</template>

<script>
	export default{
		name:"groupJptj",
		props:["jptjarr"]
	}
</script>

<style>
	.groupjptj{
		width: 100%;
		padding:10px;
		box-sizing: border-box;
		margin-bottom: 10px;
	}
	.jptj_imgbox{
		width: 20%;
		float: left;
		text-align: center;
	}
	.jptj_imgbox img{
		height: 60px;
	}
	.jptj_cont{
		width: 50%;
		height: 60px;
		float: left;
	}
	.jptj_cont p{
		color: #666;
		height: 35px;
		font-size: 12px;
		overflow: hidden;
	}
	.jptj_info{
		width: 30%;
		height: 60px;
		float: left;
		text-align: center;
		line-height: 60px;
		padding-left: 10px;
		box-sizing: border-box;	
	}
	.jptj_info span{
		float: left;
		color: #666;
		font-size: 12px;
	}
	.jptj_info img {
		height: 25px;	
		float: left;
		margin-top: 17px;
		margin-left: 10px;	
	}
</style>