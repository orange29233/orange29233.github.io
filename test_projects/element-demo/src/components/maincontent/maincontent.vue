<template>
    <div class="maincontent">
        <div class="logo"></div>
        <div class="buttonbox">
            <button>下载</button>
            <button>文档</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"maincontent"
}
</script>

<style scoped>
    .maincontent{
        width: 100%;
        height: 400px;
        background: #152740;
        display:flex;
        flex-direction:column;
        align-items:flex-end;
    }
    .logo{
        width:600px;
        height: 350px;
        margin: 0 auto;
        background: url(../../../static/img/logo.png) center no-repeat;
    }
    .buttonbox{
        width: 500px;
        margin: 0 auto;
        margin-bottom:80px; 
        display: flex;
        justify-content:center;

    }
    .buttonbox button{
        width: 190px;
        height: 45px;
        background: #ffa700;
        font-size: 14px;
        border: none;
        margin: 0 15px;
    }
</style>
