
/*
** Create by 高鹏翔 on 2018/12/6
*/

$(document).ready(function () {
    console.log ( "你好" );

    //main_up部分的滑动效果
    $('.main_up h1').animate( {
        top:190,
        opacity:0.9
    },2000 ) ;



    //淡入fadeIn
    $(window).on('scroll',function (  ) {
        //console.log ( $ ( window ).scrollTop () );
        if ( $(window).scrollTop() >= 500 ){
            //淡入
            $('.part1').fadeIn(2000);
        }
    });


    //main_down部分的滑动效果
    $(window).on('scroll',function (  ) {
        //console.log ( $ ( window ).scrollTop () );
        if ( $(window).scrollTop() >= 1000 ){
            //滑出
            $('.part2').slideDown(2000);
        }
    });


    //从左滑出
    $(window).on('scroll',function (  ) {
        console.log ( $ ( window ).scrollTop () );
        if ( $(window).scrollTop() >= 1800 ){
            //左出
            $('.part3').animate({
                left:0
            },1500);
        }
    });

    //淡出
    $(window).on('scroll',function (  ) {
        console.log ( $ ( window ).scrollTop () );
        if ( $(window).scrollTop() >= 2600 ){
            //左出
            $('.part4').animate({
                opacity : 1
            },2000);
        }
    });











    //第四部分,八荒风姿
    //开始默认第一个可以更换角色
    roleSex();
    //1.门派选择
    $('.group>li').mouseenter(function (  ) {
        $(this).addClass('now').siblings('li').removeClass('now');
        var index = $(this).index(); //找到当前鼠标移入的li标签的索引
        // console.log ( index );

        $('.role>li').eq(index).addClass('current').siblings('li').removeClass('current');

        // $('.role>li').eq(index).show().siblings('li').hide();
        roleSex();
    });


    //2.性别选择
    function roleSex( ) {
        $('.role>li[class="current"]').find('.sex>.s1').click(function (  ) {
           // console.log ( this );
            $('.role>li[class="current"]').find('.sex>.s1').addClass('btn1').removeClass('s1 df');
            $('.role>li[class="current"]').find('.sex>.btn2').addClass('s2').removeClass('btn2');
            $('.role>li[class="current"]').find('.sex>.btn3').addClass('s3').removeClass('btn3');

            //更换相应的角色
            var idx = $(this).index(); //找到当前鼠标点击a标签的索引
            //console.log ( idx );
            $('.role>li[class="current"]').find('img').eq(idx).addClass('activity').siblings('img').removeClass('activity');
        });

        $('.role>li[class="current"]').find('.sex>.s2').click(function (  ) {
            //console.log ( this );
            $('.role>li[class="current"]').find('.sex>.s2').addClass('btn2').removeClass('s2');
            $('.role>li[class="current"]').find('.sex>.btn1').addClass('s1').removeClass('btn1');
            $('.role>li[class="current"]').find('.sex>.df').removeClass('df');
            $('.role>li[class="current"]').find('.sex>.btn3').addClass('s3').removeClass('btn3');

            //更换相应的角色
            var idx = $(this).index(); //找到当前鼠标点击a标签的索引
            //console.log ( idx );

            // $('.role>li[class="current"]').children('.num').children('img').eq(idx).addClass('activity').siblings('img').removeClass('activity');
            $('.role>li[class="current"]').find('img').eq(idx).addClass('activity').siblings('img').removeClass('activity');

        });

        $('.role>li[class="current"]').find('.sex>.s3').click(function (  ) {
            //console.log ( this );
            $('.role>li[class="current"]').find('.sex>.s3').addClass('btn3').removeClass('s3');
            $('.role>li[class="current"]').find('.sex>.btn1').addClass('s1').removeClass('btn1');
            $('.role>li[class="current"]').find('.sex>.df').removeClass('df');
            $('.role>li[class="current"]').find('.sex>.btn2').addClass('s2').removeClass('btn2');

            //更换相应的角色
            var idx = $(this).index(); //找到当前鼠标点击a标签的索引
            //console.log ( idx );
            $('.role>li[class="current"]').find('img').eq(idx).addClass('activity').siblings('img').removeClass('activity');
        });
    }

    //console.log ( $ ( ".num" )[0].children[0] );//模式转换jQuery转dom



    //页面里的视频点击事件
    Video();
    function Video() {
    //视频1的打开
    $('.part1 .bg1 img').on('click',function (  ) {
          $('.part1 .video').show();
          $('.part1 video').trigger('play');
        //$('body').css('opacity',0.6);
        $('.spzhc').show();
    })

    //视频的关闭
    $('.part1 .video .close').on('click',function (  ) {
        $('.part1 .video').hide();
        $('.part1 video').trigger('pause');
        $('.part1 video').get(0).currentTime = 0;
        //$('body').css('opacity',1);
        $('.spzhc').hide();
    })

    //视频2的打开
    $('.part3 img').on('click',function (  ) {
        $('.part3 .video').show();
        $('.part3 video').trigger('play');
        //$('body').css('opacity',0.6);
        $('.spzhc').show();
    })

    //视频的关闭
    $('.part3 .video .close').on('click',function (  ) {
        $('.part3 .video').hide();
        $('.part3 video').trigger('pause');
        $('.part3 video').get(0).currentTime = 0;
        //$('body').css('opacity',1);
        $('.spzhc').hide();
    })


    }




});