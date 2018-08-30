<template>
	<div class="homefoot">
		<ul class="navBar">
			<li class="mainNav" v-for="(v,k) in normal" @click="pagetap(k)">
				<router-link :to="v.to">
					<img :src="v.imgurl" height="30" />
					<p><a :class="{action:v.bol}" href="#">{{v.pagename}}</a></p>					
				</router-link>				
			</li>
			<div class="clear"></div>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"homefoot",
		data:function(){
			return{
				normal:[]						
			}
		},
		mounted:function(){
			this.$http.get("../../static/data/data.json").then(
				function(e){
					this.normal=e.data.normal
				},function(){
					alert("获取数据失败!")						
				})
		},
		methods:{
			pagetap:function(e){
				for(var i=0;i<this.normal.length;i++){
					this.normal[i].imgurl = this.normal[i].imgurl.replace("active","normal")
					this.normal[i].bol = false
				}
				this.normal[e].imgurl=this.normal[e].imgurl.replace("normal","active")
				this.normal[e].bol = true
			}
		},
		props:["ishow"]
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
	.homefoot{
		width: 100%;
		height: 70px;
		background:#F7F7F7 ;
		position: fixed;
		bottom: 0;
		padding-top:10px ;
	}
	
	.navBar{
		width: 100%;
		padding-left: 5%;
	}
	.mainNav{
		text-align: center;
		float: left;
		list-style: none;
		width: 18%;
	}
	.mainNav a{
		text-decoration: none;
		color: black;
		font-size: 14px;
	}
	a.action{
		color:#42c055 ;
	}
</style>