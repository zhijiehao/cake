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
})

//轮播图
$(function () {
    //找人
    var ul = document.getElementById("list");
    var ulLis = ul.children;
    var screen = document.getElementById("screen");
    var ol = screen.children[1];
    var olLis = ol.children;
    var imgWidth = $(".banner  .screen").width();//图片宽度
    //动态生成最后一张图片
    var firstImg = ulLis[0].cloneNode(true);
    $(ul).append(firstImg);
    //2.鼠标经过按钮 按钮排他 并且将ul移动到指定位置
    //让第一个数字索引高亮显示
    var $ol = $(".banner .screen").children("ol");
    $ol.children().eq(0).addClass("current");
    //鼠标移到哪个索引上 哪个索引就高亮 其余的不高亮
    $(".banner ol>li").mouseenter(function () {
        $(this).addClass("current").siblings().removeClass("current");
    });
//点击索引，显示对应的图片
    $(".banner ol>li").click(function () {
        //记录当前点击按钮的索引
        var index = $(this).index();
        pic = index;
        square = index;
        //ul向左移动index个图片的位置
        var target = -index * imgWidth;
        //console.log(target);
        $(".banner ul").animate({left: target}, "normal");

    });
    //表示当前应该亮起的按钮
    var square = 0;
    //pic表示当前应该显示的图片的索引
    var pic = 0;
    //添加自动滚动

    var timer = setInterval(play, 1000);
    $(".banner ").mouseenter(function () {
        clearInterval(timer);
    });
    $(".banner ").mouseleave(function () {
        timer = setInterval(play, 1000);
    });

    function play() {

        if (pic == ulLis.length - 1) {
            //ul.style.left = "0px";
            $(".banner ul").css("left", 0);
            pic = 0;
        }
        pic++;
        var target = -pic * imgWidth;
        $(".banner ul").animate({left: target}, "normal");

        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        //干掉所有人
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //留下当前的
        olLis[square].className = "current";
    }


});




    //五角星
//原来库引用字体的原因 不识别实心五角心 我很方
//鼠标移上去 前面的和现在的五角星 都变色 鼠标移走 全部恢复原来颜色
    //1. 找li注册mouseenter事件
$(function () {
    $(".gallery .comment>li").mouseenter(function () {
        $(this).css("color","pink").prevAll().css("color","pink");
        $(this).nextAll().css("color","black");
    });
    //点击选中
    $(".gallery .comment>li").click(function () {
        $(this).addClass("active1").siblings().removeClass("active1");
    });
    //2. 离开ul的时候，让所有的li变成黑色
    $(".gallery .comment").mouseleave(function () {
        $(this).children().css("color","black");
        $(".active1").css("color","pink").prevAll().css("color","pink");
    });

})

//鼠标移到gallery-grid 显示 gallery-info 移除隐藏
    //gallery-info

//鼠标移到gallery-grid 显示 gallery-info 移除隐藏


    $(".gallery .gallery-grid .img-responsive ").mouseenter(function () {

        $(this).next().show().parent().parent().siblings().children().children("div").hide();
        //$(".gallery #galrr-info-two").css("display","block");
       var result =  $(".gallery #galrr-info-two").css("display")
            if(result ==="none"){
                $(".gallery #galrr-info-two").css("display","block");
            }

        });


    $(".gallery .gallery-grid ").mouseleave(function () {

        $(".gallery .galrr-info-two").hide();

        $(".gallery #galrr-info-two").css("display","none");
    });




$(function () {
    //邮件
    //1、文本框获得焦点 清空文本框
    $(".subscribe .text").focus(function () {
        var content = $(this).val();

        if (content === "Email") {
            this.value = "";
        }
        //失去焦点，恢复默认文字
        $(".subscribe .text").blur(function () {
            var content = $(this).val();
            if (content === "") {
                this.value = "Email";
            }
        });

    })

    $(function () {
        //2、按钮，鼠标移上去改变背景颜色
        //  background-color: rgba(255, 255, 255, 0.21);
        //color: #F07818;
        $(".subscribe #buttonSub").mouseenter(function () {
            $(this).css({
                "background-color": rgba(255, 255, 255, 0.21),
                "color": "#F07818"
            });
        });
    });
});


















