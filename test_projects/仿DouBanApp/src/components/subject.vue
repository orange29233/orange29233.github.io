<template>
	<div class="subject">
		<!--书影音头部-->	
		<publihead  title="书影音">
			<img class="imgl" slot="imgl" src="static/images/ic_actionbar_search_icon.png" height="30" />
			<img class="imgr" slot="imgr" src="static/images/ic_create_group_chat_blue.png" height="30" />
		</publihead>
		<subject-nav></subject-nav>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import publihead from "@/components/public/publihead"
	import subjectNav from "@/components/subject/subjectNav"
	export default{
		name:"subject",
		components:{
			publihead,
			subjectNav
		}
	}
</script>

<style>
</style>