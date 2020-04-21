/**
 * Created by Administrator on 2018/12/6.
 */


//$(window).on('scroll', function () {
//
//    var $scrollTop = $(window).scrollTop();
//    if($scrollTop==400){
//        $('.top').css('height',0)
//    }
//    if($scrollTop>=500){
//        $('.top').css('height',1).addClass('fixed').stop(true,false).animate({height:160},500)
//    }else {
//        $('.top').removeClass('fixed')
//    }
//
//});


  $(function () {
      $('.top-head>ul>li').mouseenter(function () {
        $(this).addClass("li-border").siblings('li').removeClass('li-border')
      })
      $('.top-head>ul').mouseleave(function () {
       $(this).children().removeClass('li-border')
      })
  });



  $(function () {
     $('.slidbann').mouseenter(function () {
         $(this).children('.jiantou').show()

     })
      $('.slidbann').mouseleave(function () {
         $(this).children('.jiantou').hide()
     })

  });

$(function() {
    var idx = 0;
    $('.jiantou>.right').click(function () {
        idx++;
      $('.slidbann>ul>li').eq(idx).fadeIn(1000).siblings('a').fadeOut(1000)
    })
});

//�̶�������
//var topscroll = $('.mid').height()
//console.log(topscroll);
//$(window).on('scroll',function () {
//  var scroTop = $(this).scrollTop();
//    if(scroTop >= topscroll){
//        $('.top').css({
//            position:'fixed',
//            zIndex:10
//        })
//    } else {
//        $('.top').css({
//            position:'static'
//        })
//    }
//})



//�ֲ�ͼ


  $(function () {
      var idx = 0;
      function lunbo () {
          if(idx == 4){
              $( $('.ol li')[0]).css({backgroundColor:'yellow'}).siblings('li').css({backgroundColor:'red'})
          }
          if(idx == 5) {
              $('.ul1').css({'left':0,
              })

              idx = 0;
          }
          idx++;
          $($('.ol li')[idx]).css('background-color','yellow').siblings('li').css('background-color','red')
          $('.ul1').animate({'left':-idx*$('.slidbann').width()})
      }

      var timeId = setInterval(lunbo,2000)
      $('.slidbann').on('mouseenter',function () {
        clearInterval(timeId)
      })
      $('.slidbann').on('mouseleave',function () {
          timeId = setInterval(lunbo,2000)
      })

      $('.ol>li').on('mouseenter',function () {
           idx = $(this).index()-1
          lunbo()
      })


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