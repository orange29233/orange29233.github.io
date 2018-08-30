<template>
	<div class="status">
		<!--广播头部-->	
		<publihead title="广播">
			<img class="imgl" slot="imgl" src="static/images/ic_status_search_user.png" height="30" />
			<img class="imgr" slot="imgr" src="static/images/ic_create_group_chat_blue.png" height="30" />					
		</publihead>
		<status-cont></status-cont>
	</div>
</template>

<script>
	import publihead from "@/components/public/publihead"
	import statusCont from "@/components/status/statusCont"
	
	export default{
		name:"status",
		components:{
			publihead,
			statusCont,
			
			
		}
	}
</script>

<style>
</style>