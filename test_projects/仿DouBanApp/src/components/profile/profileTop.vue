<template>
	<div class="profiletop">
		<div class="profiletop_imgbox">
			<img src="static/images/ic_user_info_birthday.png" width="80px" />
		</div>
		<div class="profiletop_txtbox">
			<h4>name</h4>
			<p class="profile_id">ID:12321332 <span>个人主页 &gt;</span></p>
			<hr />
			<p class="profile_gz"><span>关注 1</span><span>被关注 0</span></p>
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
	export default{
		name:"profileTop",
	}
</script>

<style>
	.profiletop{
		width: 100%;
		height: 140px;
		background: url(../../../static/images/live_player_bg.jpg) center no-repeat;
		background-size:cover;
		padding: 10px;
		padding-top:30px ;
		box-sizing: border-box;
	}
	.profiletop_imgbox{
		width: 30%;
		float: left;
		text-align: center;
	}
	.profiletop_txtbox{
		width: 70%;
		float: left;
		color: white;
	}
	.profiletop_txtbox h4{
		font-weight: normal;
		font-size: 24px;
	}
	.profile_id{
		height: 30px;
		line-height: 30px;
		font-size: 12px;
	}
	.profile_id span{
		font-size: 15px;
		margin-left: 95px;
		
	}
	.profile_gz{
		height: 35px;
		line-height: 50px;
		font-size: 15px;
	}
	.profile_gz span{
		margin-right: 30px;
	}
</style>