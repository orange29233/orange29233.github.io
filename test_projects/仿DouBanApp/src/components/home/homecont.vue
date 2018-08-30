<template>
	<div class="cont">
		<div class="swiper-container">	
			<div class="swiper-wrapper imgplay">
			    <div class="swiper-slide">
			    	<img src="../../../static/images/banner/01.jpg" >
			    </div>
			    <div class="swiper-slide">
			    	<img src="../../../static/images/banner/02.jpg" >
			    </div>
			    <div class="swiper-slide">
			    	<img src="../../../static/images/banner/03.jpg" >
			    </div>				  
			</div>
		</div>
	</div>
</template>

<script>
//	import "../../../static/swiper/swiper-4.3.3.min.js"
	export default{
		name:"homecont",
		mounted:function(){
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: true,//可选选项，自动滑动
				autoplay:{
					delay:2000
				}
			})
		}
	}
</script>

<style>
.cont{
	width: 100%;
	margin-top: 70px;
}
.imgplay{
	width: 100%;
}
.imgplay img{
	width: 100%;
}
	
</style>