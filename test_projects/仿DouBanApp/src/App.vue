<template>
		<div>
			<router-view></router-view>
			<homefoot></homefoot>
		</div>	
</template>

<script>
		import home from "@/components/home"
		import homefoot from "@/components/public/homefoot"
export default {
  name: 'App',
  components:{
  	home,
  	homefoot
  }
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
	
</style>
