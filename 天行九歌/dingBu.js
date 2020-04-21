

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

//相关新闻
var aList = document.getElementsByClassName("col");
for(var i = 0;i < aList.length;i++){
    aList[i].onmouseover = function(){
        this.style.color = "#2fc3a2";
    };
    aList[i].onmouseout = function(){
        this.style.color = "";
    }
}

//新手指南
var xsList = document.getElementsByClassName("xs");
for(var i = 0;i < aList.length;i++){
    xsList[i].onmouseover = function(){
        this.style.color = "#2fc3a2";
    };
    xsList[i].onmouseout = function(){
        this.style.color = "";
    }
}
/**
 * Created by 梁吉 on 2018/12/7.
 */


//游戏下载

$(function(){
    $(".down").on("mouseenter",function(){
        $(this).css("opacity",0.9)
    }).on("mouseleave",function(){
        $(this).css("opacity",1)
    })
})

$(function(){
    $(".green a").on("mouseenter",function(){
        $(this).css("opacity",0.7)
    }).on("mouseleave",function(){
        $(this).css("opacity",1)
    })
})



//分享图标
$(function(){
    $(".share a").on("mouseenter",function(){
        $(this).css("opacity",0.5)
    }).on("mouseleave",function(){
        $(this).css("opacity",1)
    })
})