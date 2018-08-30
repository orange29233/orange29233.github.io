<template>
	<div class="publihead">
		<p>{{title}}
			<slot name="imgl"></slot>
			<slot name="imgr"></slot>
		</p>
	</div>
</template>

<script>
	export default{
		name:"publihead",
		props:["title"]
	}
</script>

<style>
	.publihead{
		width: 100%;
		height: 50px;
		background: #F7F7F7;
		position: fixed;
		top: 0;
		padding-top: 25px;
		border-bottom: 1px solid #ccc;
	}
	.publihead p{
		text-align: center;
		font-size: 24px;
		position: relative;
	}
	
	.imgl{
		position: absolute;
		right: 20%;
	}
	.imgr{
		position: absolute;
		right: 5%;
	}
</style>