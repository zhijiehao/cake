/**
 * Created by Administrator on 2016/5/15.
 */

$(function () {
    /*navbar-header*/
    $("#nav>.dropdown").mouseenter(function () {
        $(this).children("ul").show().parent().siblings(".dropdown").children("ul").hide();
    });
    $("#nav>.dropdown").mouseleave(function () {
        $(this).children("ul").hide();
    });
    $(".header-right").mouseenter(function () {
        $(this).children("div").show();
    })
    $(".header-right").mouseleave(function () {
        $(this).children("div").hide();
    })

    /*左边栏手风琴效果*/
    $(".product_right .place").on("click",function(){
        $(this).siblings(".single-bottom").stop(false,true).slideToggle(240);
        $(this).parent().siblings().children(".single-bottom").slideUp(150);
    });
    /*商品特效*/
    $(".b-animate-go").mouseenter(function () {
        $(this).find(".b-from-left").show().stop().animate({"left":0},100);
    });
    $(".b-animate-go").mouseleave(function () {
        $(this).find(".b-from-left").stop().animate({"left":"-100%"},100);
    });
    $(".product-grid").mouseenter(function () {
        $(this).css("borderColor","#F07818");
    });
    $(".product-grid").mouseleave(function () {
        $(this).css("borderColor","#FFF");
    });
})


