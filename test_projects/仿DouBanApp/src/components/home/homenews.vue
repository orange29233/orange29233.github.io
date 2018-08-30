<template>
	<div class="content">
		<div class="leftBar">
			<h4>{{newstitle}}</h4>
			<p>{{newscont}}</p>
		</div>
		<div class="rightBar">
			<img :src="imgsrc" width="100" height="100" />
		</div>
		<div class="clear"></div>
		<p class="writer">{{writer}}</p>
	</div>	
</template>

<script>
	export default{
		name:"homenews",
		props:["newstitle","newscont","imgsrc","writer"]
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.clear{
		clear:both;
	}
	.content{
		width: 100%;
		border-bottom: 1px solid #ccc;
		padding:10px 15px;
		box-sizing: border-box;
	}
	.leftBar{
		width: 60%;
		float: left;
		
	}
	.leftBar h4{
		line-height: 30px;
	}
	.leftBar p{
		font-size: 14px;
		line-height: 30px;
		color: #8C8C8C;
	}
	.rightBar{
	    width: 30%;
	    margin-left: 20px;
		float: left;
	}
	.writer{
		color: #c7c7c7;
		font-size: 14px;
	}
	
</style>