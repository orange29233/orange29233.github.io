<template>
	<div class="homehead">				
		<div class="searchrow">
			<div class="searchbox">
				<span class="lfloat"><img src="static/images/ic_group_search_small.png" height="20" /></span>
				<input class="lfloat" type="text" placeholder="请输入内容" />
				<span class="rfloat"><img src="static/images/ic_scan_gray.png" height="20" /></span>
			</div>
			<div class="rimg">
				<img src="static/images/ic_chat_white.png" height="30" />
			</div>
			<div class="clear"></div>
		</div>				
	</div>
</template>

<script>
	export default{
		name:"homehead"
	}
</script>

<style>
	*{
	margin: 0;
	padding: 0;
	}
	.lfloat{
		float: left;
	}
	.rfloat{
		float: right;
	}
	.clear{
		clear:both;
	}
	.homehead{
		width: 100%;
		height: 70px;
		background: #42c055;
		position: fixed;
		top: 0;
		z-index: 99;
	}
	.searchrow{
		width: 100%;
		padding-top: 20px;
	}
	.searchbox{
		width: 70%;
		height: 30px;
		float: left;
		background: white;
		border-radius: 5px;
		margin-left: 20px;
		padding: 0 5px;
	}
	.searchbox input{
		width: 83%;
		height: 30px;
		border: none;
		outline: none;
		text-indent: 5px;
	}
	.searchbox span{
		padding-top: 5px;
	}
	.rimg{
		width: 20%;
		float: right;
	}
	.rimg img{
		margin-left: 10px;
	}
	
</style>