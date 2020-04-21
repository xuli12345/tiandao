/*
** Create by 豆先生 on 2018/12/4
*/

/* head部分*/

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
//鼠标点击播放键出现视频播放页面
  /* 需求分析：
    1.鼠标点击播放键,显示新页面#vadio1,
    2.鼠标点击页面#vadio1右上角的×,#vadio1页面消失
       思路分析：事件三要素
             1 获取元素：
             2 注册事件：
             3 事件处理：
   */
 $(function (  ) {
     //1.鼠标点击播放键,显示新页面#vadio1,
     $('#vadio').click(function (  ) {
         $('#vadio1').show();
         $('#zzc').show();
     })
     //2.鼠标点击页面#vadio1右上角的×,#vadio1页面消失
     $('#vadio1 a').click(function (  ) {
         $('#vadio1').hide();
         $('#zzc').hide();
     })


/*新手成长的小窗口的显示与消失的*/
     $('#xinshou').click(function (  ) {
         $ ( "#xinshoulink" ) .show()
         $('#zzc').show()
     });
     $('#xinshouswitch1').click(function (  ) {
         $('#xinshoulink').css('display','none');
         $('#zzc').hide()
     });


/*新手奖励小窗口内部窗口的切换*/
    $('.ul1 li').click(function (  ) {
        $(this .ul2).show().siblings('li .ul2').hide();
    })

     /* 新手好礼1页面效果*/
     $('#xinshoulink>.ul1>li').click(function (  ) {
         $(this).css({
             'backgroundColor':'#2fc3a3',
             'color':'white',
         });
         $(this).children('.ul2').show();
         $(this).children('div').show();
         $(this).siblings('li').children('.ul2').hide()
         $(this).siblings('li').children('div').hide()
         $(this).siblings('li').css({
             'backgroundColor':'#000',
             'color':'a0a0a0',
         });
     })

     /*01,等级突破礼*/
     $('#xinshoulink .ul2 >li').mouseenter(function (  ) {
         $(this).children('.ul2tab').show()
     })
     $('#xinshoulink .ul2 >li').mouseleave(function (  ) {
         $(this).children('.ul2tab').hide();
     })

/*新区link出现隐藏页面*/

     $('#xinqu').click(function (  ) {
         $ ( "#xinqulink" ) .show()
         $('#zzc').show()
     });
     $('#xinquswitch1').click(function (  ) {
         $('#xinqulink').css('display','none');
         $('#zzc').hide()
     });

     /*新区link页面切换效果*/

     $('#xinquul1>li').click(function (  ) {
         $(this).css({
             'backgroundColor':'#2fc3a3',
             'color':'white',
         });
         $(this).children('img').show();
         $(this).children('div').show();
         $(this).siblings('li').children('img').hide();
         $(this).siblings('li').children('div').hide();
         $(this).siblings('li').css({
             'backgroundColor':'#000',
             'color':'a0a0a0',
         });
     })

     /*轮播图图片切换效果*/
     var idx = 0;
     function lunbo() {
         if ( idx ==3){
             $($('#dian i')[0]).css({'background-color':'#2fc3a3','width':'24px'}).siblings('i').css({'background-color':'#9b9b9b','width':'14px'})
         }
         if(idx ==4) {
             $('#slildPic').css('left',0);
             idx = 0;
         }
         idx++
         $($('#dian i')[idx]).css({'background-color':'#2fc3a3','width':'24px'}).siblings('#dian i').css({'background-color':'#9b9b9b','width':"14px"})

         $('#slildPic').animate({'left':-idx*312},200);
     }
     //自动轮播
     var timeID = setInterval(lunbo,3000);
     //鼠标移入时清除定时器
     $('#slide').mouseenter(function () {
         clearInterval(timeID)
     });
     //鼠标移出时开启定时器
     $('#slide').mouseleave(function () {
         timeID = setInterval(lunbo,3000);
     });


     $('#dian i').mouseenter(function () {
         idx = $(this).index()-1;
         lunbo()
     });

/*head-foot部分的下边框变色事件*/
$('#headfoot li').mouseenter(function (  ) {
    $(this).css('borderBottom','5px solid #cfae50')
})
     $('#headfoot li').mouseleave(function (  ) {
         $(this).css('borderBottom','5px solid #1c1c1c')
     })

/*全新内容部分的鼠标一入一出事件*/
     var num = null;
     var timeID=null;
     var  index=null
     $('#titul1 li').mouseenter(function () {
         $(this).find(".more").css('backgroundColor','#000');
         $(this).siblings('li').find('.more').css('backgroundColor','#2fc3a3')
         index = $(this).index();
         clearInterval(timeID);
         timeID = setInterval(function () {
             num++;
             if(num<20){
                 $($('#titul1 li')[index]).find('.bao').stop( true,false).show().css('transform','scale('+num+')')
                 $($('#titul1 li')[index]).siblings('li').find('.bao').hide()
             }else{
                 clearInterval(timeID);
             }
         },20)
     })
     $('#titul1 li').mouseleave(function () {
         $('#titul1 li').find(".more").css('backgroundColor','#2fc3a3');
         clearInterval(timeID);
         num=0
         timeID=setInterval(function () {
             $($('#titul1 li')[index]).find('.bao').stop(true,false).hide().css('transform','scale('+num+')')
         },50)
     })


     /*门派分类图片的鼠标移入移出事件*/
     var $lis=$('#classPic li');
     for(var i = 0 ; i < $lis.length; i++) {
         //需求2:
         $lis.mouseenter ( function () {
             $ ( this ).stop ( true, false ).animate ( { 'width' : 468 }, 0 ).siblings ( 'li' ).stop ( true, false ).animate ( { 'width' : 63 }, 0 );
             $ ( this ).find ( '.zi' ).show ()
             $ ( this ).siblings ( 'li' ).find ( '.zi' ).hide ()
         } );


         /*底部链接部分*/
         $ ( '#linksmain' ).find ( 'li' ).mouseenter ( function () {
             $ ( this ).css ( 'backgroundColor', '#414141' )
         } );
         $ ( '#linksmain' ).find ( 'li' ).mouseleave ( function () {
             $ ( this ).css ( 'backgroundColor', '#2c2c2c' )
         } );


         /*固定导航位置*/
         $ ( '#gdnav' ).find ( 'li' ).mouseenter ( function () {
             $ ( this ).css ( 'backgroundColor', '#414141' )
         } );
         $ ( '#gdnav' ).find ( 'li' ).mouseleave ( function () {
             $ ( this ).css ( 'backgroundColor', '#2c2c2c' )
         } );
     }
 })
