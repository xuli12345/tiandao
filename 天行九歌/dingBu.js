

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

//�������
var aList = document.getElementsByClassName("col");
for(var i = 0;i < aList.length;i++){
    aList[i].onmouseover = function(){
        this.style.color = "#2fc3a2";
    };
    aList[i].onmouseout = function(){
        this.style.color = "";
    }
}

//����ָ��
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
 * Created by ���� on 2018/12/7.
 */


//��Ϸ����

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



//����ͼ��
$(function(){
    $(".share a").on("mouseenter",function(){
        $(this).css("opacity",0.5)
    }).on("mouseleave",function(){
        $(this).css("opacity",1)
    })
})