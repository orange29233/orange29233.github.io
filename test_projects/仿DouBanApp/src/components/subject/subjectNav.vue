<template>
	<div class="subject_nav">
		<ul>
			<li v-for="(v,k) in arr" :class="{subject_act:v.act}" @click="set(k)"><router-link :to="v.to">{{v.title}}</router-link></li>
			<div class="clear"></div>
		</ul>	
	</div>
</template>

<script>
	export default {
		name:"subjectNav",
		data(){
			return{
				arr:[{title:"电影",to:"/subject/movie",act:true},
					 {title:"读书",to:"/subject/read",act:false},
					 {title:"电视",to:"/subject/tv",act:false},
					 {title:"同城",to:"/subject/city",act:false},
					 {title:"音乐",to:"/subject/music",act:false}]
			}			
		},
		methods:{
			set:function(e){
				for(var i=0;i<this.arr.length;i++){
					this.arr[i].act=false
				}
				this.arr[e].act=true
			}
		}
	}
</script>

<style>
	.subject_nav{
		margin-top: 76px;
		height: 50px;
		width: 100%;
		background: #F7F7F7;
	}
	.subject_nav ul{
		background: white;
		border-bottom: 1px solid #F3F3F3;
	}
	.subject_nav li{
		width: 20%;
		height: 35px;
		line-height: 35px;
		float: left;
		list-style: none;
		text-align: center;
		border-bottom:2px solid transparent ;
	}
	.subject_nav a{
		text-decoration: none;
		color: #999;
	}
	li.subject_act{
		border-bottom:2px solid #42c055 ;
	}
	.subject_act a{
		color:#42c055 ;
	}
</style>