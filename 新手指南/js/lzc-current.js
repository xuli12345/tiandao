/**
 * Created by lzc on 2018/12/6.
 */
//��� ���ع�����ť��ͷ����
$(function () {
    $('#togw-gw').mouseenter(function () {
        $('#l_tt').animate({left: 12}, 200);
    });
    $('#togw-gw').mouseleave(function () {
        $('#l_tt').stop(true, false).animate({left: 17}, 200);
    });
});


//�����¼�
$(function () {
    var snav = $('#snav').height();
    $(window).on('scroll', function () {
        //1.��ȡҳ���scrollTop��ֵ.
        var scrollTopValue = $(this).scrollTop();
        //2.�ж����ֵ,�Ƿ���ڵ�һ���ֵĸ߶�.
        if(scrollTopValue >= 254){
            //�ڶ��������ù̶���λ.
            $('#snav').css({
                position:'fixed',
                left:320,
                top:0,
                marginTop: 0
        });
        }else {
            //�ڶ��������ö�λ��ԭ.
            $('#snav').css({
                position:'static',
                left:0,
                top:0,
                marginTop: 35
            });
            //��ԭmarginTopҪ��ԭ
            $('.container').css({
                marginTop:0
            });
        }
    });
});


//
////�����Ƶ
//$(".plvd .played").click(function () {
//    $(".mask").show();
//    $(".layerdt").show().css("top","300px");
//    $("#vbox video").attr({"src":'./images/e001551vgrp.m1.mp4'});
//});
//$(".exitlayer ").click(function () {
//    $(".mask").hide();
//    $(".layerdt").hide();
//});
//$("#bigvideo").click(function () {
//    $(".mask").show();
//    $(".layerdt").show().css("top","300px");
//    $("#vbox video").attr("src",'images/f0015t0zvd6.m1.mp4');
//});

$(".lw .played").click(function () {
    $(".bfangZZ").show();
    $(".bfangSP").show()
    $(".bfangbox video").attr({"src":'./images/f0015t0zvd6.m1.mp4'});
});
$('.bfangSP #guandiao').on('click', function () {
    $(".bfangZZ").hide();
    $(".bfangSP").hide()
    $(".bfangbox video").attr({"src":''});
})

$(".rw .played").click(function () {
    $(".wbfangZZ").show();
    $(".wbfangSP").show()
    $(".wbfangbox video").attr({"src":'./images/e001551vgrp.m1.mp4'});
});
$('.wbfangSP #wguandiao').on('click', function () {
    $(".wbfangZZ").hide();
    $(".wbfangSP").hide()
    $(".wbfangbox video").attr({"src":''});
})

