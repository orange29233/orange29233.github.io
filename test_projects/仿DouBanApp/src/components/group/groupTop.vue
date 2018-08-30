<template>
	<div class="grouptop">
		<h3>几万个小组等你来玩</h3>
		<p>立即选择加入吧</p>
		<br /><br /><br />
		<div class="grouptop_bottom">
			<p>根据你的兴趣推荐</p>
		</div>			
	</div>
</template>

<script>
	export default{
		name:"groupTop",
	}
</script>

<style>
	.grouptop{
		width: 100%;
		height: 180px;
		background: url(../../../static/images/ic_group_banner.png) center no-repeat;
		background-size:contain;
		text-align: center;
		padding-top: 50px;
		box-sizing: border-box;
	}
	.grouptop h3{
		font-weight: normal;
	}
	.grouptop p{
		color: #999;
	}
	.grouptop_bottom p{
		padding-left: 15px;
		text-align: left;
		font-size: 12px;
		
	}
</style>