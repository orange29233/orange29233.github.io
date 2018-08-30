<template>
	<div class="profiletips">
		<p class="profiletips_text"><img src="static/images/ic_mine_notification.png" height="35px" /> <span>提醒</span><span>&gt;</span></p>
		<p>暂无提醒</p>
	</div>
</template>

<script>
	export default{
		name:"profileTips"
	}
</script>

<style>
	.profiletips {
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		margin: 20px 0;
		background: white;
	}
	.profiletips p:nth-child(2){
		text-align: center;
		border-top:1px solid #e7e7e7 ;
		color: #888;
		font-size:12px;
		height: 40px;
		line-height: 40px;
	}
	.profiletips_text{
		height: 40px;
		line-height: 40px;
	}
	.profiletips_text img {
		margin-top: 3px;
		float: left;
	}
	.profiletips_text span{
		float: left;
		margin-left: 10px;
	}
	.profiletips_text span:nth-child(3){
		margin-left: 255px;
	}
</style>