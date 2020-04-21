/**
 * Created by 刘水安 on 2018/12/5.
 */
$(function(){
    var idx = 0;
    setInterval(function(){

        if(idx == 3){
            idx = 0;
        }
        $('.bigtu>ul>li').eq(idx).children().children().css({'width':210,'height':229,'left':0,'top':0});
        $('.bigtu>ul>li').eq(idx).children().children().animate({left: "-50px",top:"-50px",height:"329px",width:"310px"}, 5000);
        $('.bigtu>ul>li').eq(idx).fadeIn(2000).siblings('li').fadeOut(2000);
        idx++;
    },5000);
});
$(function(){
    var idx = 0;
    setInterval(function(){
        idx++;
        if(idx == 3){
            idx = 0;
        }
        $('.toptu>ul>li').eq(idx).fadeIn(3000).siblings('li').fadeOut(3000);
    },2000);
});
$(function(){
    var idx = 0;
    setInterval(function(){
        idx++;
        if(idx == 3){
            idx = 0;
        }
        $('.bottomtu>ul>li').eq(idx).fadeIn(2500).siblings('li').fadeOut(2500);
    },2000);
});
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
