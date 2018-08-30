<template>
	<div class="statuschat">
		<div class="statusChat_left">
			<img :src="chatarrs.src" height="50px" />
		</div>
		<div class="statusChat_right">
			<div class="statusChat_right_title">
				<div class="chat_name">
					<h4>{{chatarrs.name}}</h4>
					<p>{{chatarrs.gz}}人关注</p>
				</div>
				<div class="chat_like">
					<button>关注</button>
				</div>	
				<div class="clear"></div>
			</div>
			<div class="chat_cont">
				<p>{{chatarrs.cont}}</p>
				<p><img src="static/images/ic_fill_voted_large.png" height="20px" /><span>60</span></p>
			</div>
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
	export default{
		name:"statusChat",
		props:["chatarrs"]
		
	}
</script>

<style>
	.statuschat{
		width: 90%;
		margin: 0 auto;
		background: white;
		border-radius:5px ;
		box-shadow: 0 0 5px 2px #e1e1e1 ;
		box-sizing: border-box;
		padding: 15px;
		margin-bottom: 15px;
	}
	.statusChat_left{
		width: 20%;
		float: left;
	}
	.statusChat_right{
		width: 80%;
		float: left;
	}
	.statusChat_right_title{
		height: 50px;
	}
	.chat_name{
		width: 60%;
		float: left;
	}
	.chat_name p{
		height: 30px;
		line-height: 30px;
		font-size: 10px;
		color: #ccc;
	}
	.chat_like{
		width: 40%;
		float: left;
	}
	.chat_like button{
		width: 80%;
		height: 30px;
		background:#41bf54 ;
		color: white;
		border: none;
		border-radius: 5px;
		outline: none;
	}
	.chat_cont p {
		text-align: left;
		box-sizing: border-box;
	}
	.chat_cont img{
		margin-top: 10px;
	}
	.chat_cont span{
		color: #ccc;
		font-size: 12px;
	}
</style>