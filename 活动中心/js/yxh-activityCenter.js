// 这是活动中心页面专用的js文件

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


//活动中心内容js代码
$(function () {
    //获取li元素
    var $lis = $('.activityContent').find('li');

    // 注册鼠标移入事件
    $lis.mouseenter(function () {
        //设置动画
        $(this).find('.activityIntro').stop(true, false).animate({'height': 277}, 200);
    });

    //注册鼠标移出事件
    $lis.mouseleave(function () {
        //设置动画
        $(this).find('.activityIntro').stop(true, false).animate({'height': 0}, 0);
    });
});



