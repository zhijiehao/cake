/**
 * Created by Frank on 2016/5/15.
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

    //photos played one by one
    //set style
    $(".flexslider").css({
        "border": "1px solid silver",
        "height": "400px",
        "width": "350px",
        "overflow": "hidden",
        "position": "relative"
    });
    $(".flexslider>ul>li").css({
        "height": "400px",
        "width": "350px",
        "float": "left",
        "overflow": "hidden"
    });
    $(".flexslider>ul").css({
        "width": "2000px",
        "height": "400px",
        "position": "absolute",
        "left": 0,
        "top": 0
    });
    //clone a photo as same as the first photo
    var firstImg = $(".flexslider>ul>li").eq(0).clone(true);
    $(".flexslider>ul").append(firstImg);
    var index = 0;
    var imgW = 350;
    //set autoplay
    var timer = setInterval(play, 2000);
    //clear timer while mouse enter the big box
    $("#bigBox").mouseenter(function () {
        clearInterval(timer);
    });
    $("#bigBox").mouseleave(function () {
        timer = setInterval(play, 2000);
    });
    //create the small photos related to large photos
    var $html = $('<ol><li><img src="images/s1.png" alt=""/></li><li><img src="images/s2.png" alt=""/></li><li><img src="images/s3.png" alt=""/></li></ol>')
    $("#bigBox").append($html);
    $("#bigBox>ol>li").css({
        "width": "110px",
        "height": "128px",
        "border": "1px solid silver",
        "float": "left",
        "listStyle": "none",
        "marginRight": "5px"
    });
    $("#bigBox>ol img").css({
        "width": "110px",
        "height": "128px"
    });
    $("#bigBox>ol").css({
        "padding": 0,
        "marginTop": "10px"
    });
    //change the opacity of the small photo while the relative photo showed
    $("#bigBox>ol>li").eq(0).fadeTo(400, 1).siblings().fadeTo(400, 0.5);
    //show the large photo while clicking the small photo
    $("#bigBox>ol>li").click(function () {
        index = $(this).index() - 1;
        play();
    });
    // function of photos autoplay
    function play() {
        if (index == $(".slides>li").length - 1) {
            $(".slides").css("left", 0);
            index = 0;
        }
        index++;
        $(".slides").animate({
            "left": -index * imgW
        }, 500);
        //change the opacity of small photos
        if (index == $(".slides>li").length - 1) {
            $("#bigBox>ol>li").eq(0).fadeTo(400, 1).siblings().fadeTo(400, 0.5);

        } else {
            $("#bigBox>ol>li").eq(index).fadeTo(400, 1).siblings().fadeTo(400, 0.5);
        }

    }


//controll the content  sidedown or slideup
    $("#accordion .panel-heading").click(function () {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().children(".panel-collapse").slideUp();
    });

//revolved photos
    //settings of photos
    var config = [
        {"left": 420, "top": 150, "opacity": 1, "zIndex": 3},
        {"left": 170, "top": 100, "opacity": 0.6, "zIndex": 2},
        {"left": 240, "top": 50, "opacity": 0.5, "zIndex": 1},
        {"left": 270, "top": 0, "opacity": 0.4, "zIndex": 0},
        {"left": 570, "top": 0, "opacity": 0.4, "zIndex": 0},
        {"left": 600, "top": 50, "opacity": 0.5, "zIndex": 1},
        {"left": 670, "top": 100, "opacity": 0.6, "zIndex": 2}
    ]
    var flag = 1;

    function configImg() {
        $("#Rproducts>.single-product").each(function (index, element) {
            animateSlow(element, config[index], function () {
                flag = 1;
            });
        });
    }

//initialize photos
    configImg();

//show arrow while mouse enter
    $("#Rproducts").mouseenter(function () {
        $("#arrow").stop().fadeIn();
        clearInterval(timer2);
    });
//hide arrow while mouse leave
    $("#Rproducts").mouseleave(function () {
        $("#arrow").stop().fadeOut();
        timer2 = setInterval(moveRight, 1200);
    });
//photos revolve when clicking left arrow
    $("#arrLeft").click(function () {
        if (flag) {
            flag = 0;//limit the revoling
            //change the position of the element in array
            config.push(config.shift());
            //reset photos
            configImg();
        }

    });
//photos revolve when clicking right arrow
    $("#arrRight").click(function () {

        moveRight();
    });
    //photos auto revolving
    var timer2 = setInterval(moveRight, 1200);
    //function of photos revolve
    function moveRight() {
        if (flag) {
            flag = 0;
            //change the position of the element in array
            config.unshift(config.pop());
             //reset photos
            configImg();
        }
    }
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

    function animateSlow(obj, json, fn) {
        clearInterval(obj.timer);//������
        obj.timer = setInterval(function () {
            //ԭ��leader=leader+step
            //step=(target-leader)/10
            var flag = 1;// �
            //����json
            for (var k in json) {
                if (k == "opacity") {
                    var leader = parseInt(getStyle(obj, k) * 100);//����
                    var target = parseInt(json[k] * 100);//���
                    var step = (target - leader) / 1;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    obj.style[k] = (leader + step ) / 100;
                } else if (k == "zIndex") {
                    obj.style[k] = json[k];
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;//���
                    var target = json[k];
                    var step = (target - leader) / 1;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    obj.style[k] = leader + step + "px";
                }
                //��
                if (leader != target) {
                    flag = 0;
                }
            }
            //���
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }

        }, 1)
    }
    function getStyle(obj, attr) {
        if (obj && obj.currentStyle) {
            return obj.currentStyle[attr];//����IE678
        } else {
            return window.getComputedStyle(obj, null)[attr];//�����ַ���
        }
    }
});







