<template>
	<div class="profile">
		<!--我的头部-->	
		<publihead title="我的">
			<img class="imgr" slot="imgr" src="static/images/ic_settings.png" height="30" />
		</publihead>
		<profile-cont></profile-cont>
	</div>
</template>

<script>
	import publihead from "@/components/public/publihead"
	import profileCont from "@/components/profile/profileCont"
	export default{
		name:"profile",
		components:{
			publihead,
			profileCont
		}
	}
</script>

<style>
</style>