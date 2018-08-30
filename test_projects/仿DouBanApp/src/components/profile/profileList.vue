<template>
	<div class="profilelist">
		<ul>
			<li v-for="v in listarr.list">
				<img :src="v.src" height="30px" /><br />
				<p>{{v.title}}</p>			
			</li>
			<div class="clear"></div>
		</ul>		
	</div>
</template>

<script>
	export default{
		name:"profileList",
		props:["listarr"]
	}
</script>

<style>
	.profilelist{
		background: white;
		width: 100%;
		padding:20px 10px;
		border-bottom: 1px solid #ccc;
		box-sizing: border-box;
	}
	..profilelist ul{
		text-align: center;
	}
	.profilelist li {
		float: left;
		width: 25%;
		text-align: center;
		list-style: none;
		font-size: 12px;
	}
</style>