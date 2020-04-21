/**
 * Created by Administrator on 2018/12/6.
 */
$(function () {
//main1^
    var main1num = 0;
    $('.main1 .news .tag1').mouseenter(function () {
        if (main1num%2==0) {
            $(this).text('综合资讯');
            $('.main1 .news h2').text('最新资讯');
        }else {
            $(this).text('最新资讯');
            $('.main1 .news h2').text('综合资讯');
        }
        main1num++;
    });
    $('.main1 .news .tag3').mouseenter(function () {
        $(this).children('i').css('color','#32dab6')
    });
    $('.main1 .news .tag3').mouseleave(function () {
        $(this).children('i').css('color','#000')
    });
//main1$
// main2^
    $('.main2 .news .tag2').mouseenter(function () {
        $(this).children('i').css('color','#32dab6')
    });
    $('.main2 .news .tag2').mouseleave(function () {
        $(this).children('i').css('color','#000')
    });
//main2$
// main3^
    $('.main3 .box1 a').mouseenter(function () {
        $(this).css('background-position-x','-62px').siblings().css('background-position-x','0');
        $('.main3 .box2>div').eq($(this).index()).css('display','block').siblings().css('display','none');
    });
//main3$
// main4^
    $('.main4 .shenfen .box1 .tag1 .lunwugong .more .tag3').mouseenter(function () {
        $(this).children('i').css('color','#32dab6')
    });
    $('.main4 .shenfen .box1 .tag1 .lunwugong .more .tag3').mouseleave(function () {
        $(this).children('i').css('color','#807d7d')
    });

    $('.main4 .shenfen .box1 li.tag2,.main4 .shenfen .box1 li.tag1').on('mouseenter',function () {
        $(this).siblings().children('i').css('opacity', '1').parent().animate({width: 59}, 100).end().end().end().animate({width:429},100).children('i').css('opacity','0');
        //$(this).siblings().children('i').css('opacity', '1').parent().stop(true,true).animate({width: 59}, 200).end().end().end().animate({width:429},200).children('i').css('opacity','0');
        //$(this).animate({width:429},200).children('i').css('opacity','0');
    });
    //$('.main4 .shenfen .box1 li.tag3').on('mouseenter',function () {
    //    $(this).siblings().children('i').css('opacity','1').parent().animate({width:59},200);
    //    $(this).animate({width:429},200).children('i').css('opacity','0');
    //});
//main4$
});


//---------------------------------------------------------------------------------------

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
//---------------------------------------------------------------------------------------























