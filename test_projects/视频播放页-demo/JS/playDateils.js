
// 追剧节目单效果
$(".but>span").toggle(function () {
    $(".top_bar").animate({
       "margin-top":"0"
    },500   );
},function () {
    $(".top_bar").animate({
        "margin-top":"-400px"
    },500);

});

$(".top_l").click(function () {
    $(".zjjmd").animate({
        "margin-left":"0"
    },1000);
    $(".top_l").hide();
    $(".top_r").show();
});
$(".top_r").click(function () {
    $(".zjjmd").animate({
        "margin-left":"-100%"
    },1000);
    $(".top_l").show();
    $(".top_r").hide();
});

// 主演移入效果
$(".acter").hover(
    function () {
        $(this).addClass("active2")
    },function () {
        $(".acter").removeClass("active2")
    });

//移入图片放大
$(".bqbb").hover(
    function () {
        $(this).addClass("bqbb_active")

    },function () {
        $(this).removeClass("bqbb_active")
    });

// 评论系统

$("#fb").click(function () {
    var str="";
    var pl_text=$("#pl-tex").val();
    str="   <div class=\"pl-content\">\n" +
        "                        <div class=\"pl-user\">\n" +
        "                            <img src=\"img/播放/QQTX.png\" alt=\"#\">\n" +
        "                        </div>\n" +
        "                        <div class=\"pl-text\">\n" +
        "                            <p class=\"user-red\">用户名 <span> 2017/7/21</span></p>\n" +
        "                            <p>"+pl_text+"</p>\n" +
        "                            <ul class=\"pl-text-foot\">\n" +
        "                                <li><a href=\"\"><span>赞</span>(5216)</a></li>\n" +
        "                                <li><a href=\"\"><span>踩</span>(6)</a></li>\n" +
        "                                <li><a href=\"\"><span></span>回复(112)</a></li>\n" +
        "                                <li><a href=\"\"><span></span>查看回复(112)</a></li>\n" +
        "                            </ul>\n" +
        "                        </div>\n" +
        "                        <div class=\"clear\"></div>\n" +
        "                    </div>";

    $("#pl-area").prepend(str);
    $("#pl-tex").val("")
});

// 加载更多

$("#pl-jz").click(function () {
    $("#pl-area").height("auto");
    var x=$("#pl-area").height();
    $("#pl-area").css("height", x+"px")
});













