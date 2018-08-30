<template>
	<div class="statustop">
		<div class="statustop_imgbox">
			<img src="static/images/ic_status_anonymous_header.png" alt="" />
		</div>
		<div class="statustop_txtbox">			
			<h4>发现有趣的人</h4>			
			<p>关注他们的世界,发现更大的世界</p>
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
	export default{
		name:"statusTop"
	}
</script>

<style>
	.statustop{
		width: 80%;
		margin: 0 auto;
		padding: 10px;
	}
	.statustop_imgbox{
		text-align: center;
		width: 40%;
		float: left;
	}
	.statustop_imgbox img{
		height: 80px;
		
	}
	.statustop_txtbox{
		width: 60%;
		height: 80px;
		padding:10px 0;
		float: left;
	}
	.statustop_txtbox h4{
		height: 40px;
		line-height: 40px;
		color: #444;
	}
	.statustop_txtbox p{
		color: #888;
		font-size: 12px;
		
	}
	
</style>