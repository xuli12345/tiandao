$(function () {
    $("#nav .navs").click(function () {
        var idx=$(this).index();
        $(this).addClass("cur").siblings("#nav .navs").removeClass("cur");
        $("#wrap>.parts").eq(idx).fadeIn(300).siblings('.parts').fadeOut(300);
        switch(idx) {
            case 0 :
            case 1 :
            case 3 :
            case 4 :
            case 6 :
            case 7 :
            $(this).css("color","#fff").siblings("a").css("color","#fff");
            break;
            break;
            case 2 :
            case 5 :
            $(this).css("color","#fff").siblings("a").css("color","#000");
            break;
        }
    }); 
    $(".plvd .played").click(function () {
        $(".mask").show();
        $(".layerdt").show().css("top","300px");
        $("#vbox video").attr({"src":'images/e001551vgrp.m1.mp4'}); 
    });
    $(".exitlayer ").click(function () {
        $(".mask").hide();
        $(".layerdt").hide();
    });
    $("#bigvideo").click(function () {
        $(".mask").show();
        $(".layerdt").show().css("top","300px");
        $("#vbox video").attr("src",'images/f0015t0zvd6.m1.mp4'); 
    });
    var bgImg=["images/bashu.png","images/dongyue.png","images/hangzhou.png"]
    var index=0;
    $(".prev").click(function () {
        index--;
        if(index<0) {
            index=bgImg.length-1;
        }
        $("#map img").attr("src",bgImg[index]);
    });
    $(".next").click(function () {
        index++;
        if(index>bgImg.length-1) {
            index=0;
        }
        $("#map img").attr("src",bgImg[index]);
    });

    $(".FBs .ac").click(function () {
        $(this).children("em").addClass("before").parent().parent().siblings("li").find("em").removeClass("before");
        $(this).parent("FB").siblings("li").children(".cc").addClass(":before").attr("visibility","hidden");
        $(this).siblings("p").show().parent().siblings("li").find("p").hide();
    });
    var imgArr=["images/tangmen.png","images/tianxiang.png","images/gaibang.png","images/shenwei.png","images/zhenwu.png","images/taibai.png","images/wudu.png"];
    $("#utdbut span.tab").click(function () {
        
        $(this).addClass("cur").siblings().removeClass("cur");
        $(".united .role img").attr("src",imgArr[$(this).index()]);
    })
    var imgArr2=["images/shashou.png","images/wenshi.png","images/bukuai.png","images/yueling.png","images/youxia.png","images/biaoshi.png","images/liehu.png"];
    $(".profession .tab").click(function () {
        if($(this).index()<=6){
            $(this).addClass("cur").siblings("span").removeClass("cur");
            $(".profession #job img").attr("src",imgArr2[$(this).index()]);
        }
    })

});

//--------------------------------------------------------------------------------------
//顶部
//广告位置js代码
$(function () {
    $('.guangGao').mouseenter(function () {
        $(this).find('.bigGg').stop(true,false).slideDown(100);
        // $(this).find('.bigGg').css('display','block');
    });

    $(this).find('.bigGg').mouseleave(function () {
        $(this).stop(true,false).slideUp(100);
    });

});

//游戏排行榜js代码
//弹窗显示和隐藏的js代码
$(function () {
    //鼠标移入显示弹窗
    $('.paiHangBang').mouseenter(function () {
        $(this).find('.Leaderboard').show();
    });

    //鼠标移出隐藏弹窗
    $('.paiHangBang').mouseleave(function () {
        $(this).find('.Leaderboard').hide();
    })
});


//弹窗各类游戏排行榜代码
$(function () {
    $('.Leaderboard li').mouseenter(function () {
        //设置移入li元素的高度等于大盒子的高度,同时大盒子显示,小盒子隐藏
        $(this).css('height',95).find('.zoom').show().siblings('.zoomOut').hide();
        //移入li元素的兄弟元素的高度等于小盒子高度,大盒子隐藏,小盒子显示
        $(this).siblings('li').css('height',27).find('.zoom').hide().siblings('.zoomOut').show();

    })

});
//--------------------------------------------------------------------------------------