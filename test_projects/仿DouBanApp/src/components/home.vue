<template>
	<div class="home">
		<!--首页头部-->
		<homehead></homehead>
		<!--首页内容-->
		<homecont></homecont>
		<div class="redian">
			<p><span></span>热点</p>
			<div class="clear"></div>
		</div>
		<homenews newstitle="《加勒比海盗》14年老粉给你带来所有彩蛋和深埋梗"
			newscont="影评送给那些不离不弃的老粉和船长杰克.斯派洛" 
			imgsrc="static/images/jackcapten.jpg" 
			writer="作者女：神的秋裤"></homenews>
		<homenews newstitle="一周豆瓣热门影视|二十年后，这帮苏格兰老炮还是这么嗨"
			newscont="三个榜单冠军与上周一样，冠军们大概独孤求败" 
			imgsrc="static/images/sugel.png" 
			writer="作者：豆瓣"></homenews>
		<homenews newstitle="《加勒比海盗》14年老粉给你带来所有彩蛋和深埋梗"
			newscont="影评送给那些不离不弃的老粉和船长杰克.斯派洛" 
			imgsrc="static/images/jackcapten.jpg" 
			writer="作者女：神的秋裤"></homenews>
	</div>
</template>

<script>
	import homehead from "@/components/home/homehead"
	import homecont from "@/components/home/homecont"
	import homenews from "@/components/home/homenews"
	export default{
		name:"home",
		components:{
			homehead,
			homecont,
			homenews
		}
	}
</script>

<style>
	*{
	margin: 0;
	padding: 0;
	}
	.lfloat{
		float: left;
	}
	.rfloat{
		float: right;
	}
	.clear{
		clear:both;
	}	
	.home{
		width: 100%;
	}
	.redian{
		color: orange;
	}
	.redian span{
		display: inline-block;
		height: 30px;
		width: 5px;
		background: orange;
		float: left;
		margin-right: 20px;
	}
	.redian p{
		height: 30px;
		line-height: 30px;
		float: left;
	}
	
</style>