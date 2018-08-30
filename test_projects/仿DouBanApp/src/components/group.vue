<template>
	<div class="group">
		<!--小组头部-->	
		<publihead title="小组">
			<img class="imgl" slot="imgl" src="static/images/ic_actionbar_search_icon.png" height="30" />
			<img class="imgr" slot="imgr" src="static/images/ic_create_group_chat_blue.png" height="30" />
		</publihead>
		<group-cont></group-cont>
	</div>
</template>

<script>
	import publihead from "@/components/public/publihead"
	import groupCont from "@/components/group/groupCont"
	export default{
		name:"group",
		components:{
			publihead,
			groupCont
		}
	}
</script>

<style>
</style>