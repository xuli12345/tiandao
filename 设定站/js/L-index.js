/**
 * Created by ��ˮ�� on 2018/12/5.
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
//����
//���λ��js����
$(function () {
    $('.guangGao').mouseenter(function () {
        $(this).find('.bigGg').stop(true,false).slideDown(100);
        // $(this).find('.bigGg').css('display','block');
    });

    $(this).find('.bigGg').mouseleave(function () {
        $(this).stop(true,false).slideUp(100);
    });

});

//��Ϸ���а�js����
//������ʾ�����ص�js����
$(function () {
    //���������ʾ����
    $('.paiHangBang').mouseenter(function () {
        $(this).find('.Leaderboard').show();
    });

    //����Ƴ����ص���
    $('.paiHangBang').mouseleave(function () {
        $(this).find('.Leaderboard').hide();
    })
});


//����������Ϸ���а����
$(function () {
    $('.Leaderboard li').mouseenter(function () {
        //��������liԪ�صĸ߶ȵ��ڴ���ӵĸ߶�,ͬʱ�������ʾ,С��������
        $(this).css('height',95).find('.zoom').show().siblings('.zoomOut').hide();
        //����liԪ�ص��ֵ�Ԫ�صĸ߶ȵ���С���Ӹ߶�,���������,С������ʾ
        $(this).siblings('li').css('height',27).find('.zoom').hide().siblings('.zoomOut').show();

    })

});
