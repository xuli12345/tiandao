//gameDownload 移入 移出背景变色
$(function () {
   $(".gameDownload>li>a.yi").mouseenter(function () {
       $(this).css({
           backgroundColor: "#000",
           opacity: 0.5
       })
   });
    $(".gameDownload>li>a.yi").mouseleave(function () {
        $(this).css({
            backgroundColor: "#199d80",
            opacity: 1
        })
    });
    $("#gamess").on("mouseenter",function () {
        $(this).css("opacity", 1);
    });
    $("#gamess").on("mouseleave",function () {
        $(this).css("opacity", .9);
    })
});
//轮播图显示效果
// $(function () {
//
//     var timeID = setInterval(function () {
//         lun1();
//     },3000);
//
//     $(".pictures").mouseenter(function () {
//         clearInterval(timeID);
//     });
//     $(".pictures").mouseleave(function () {
//         timeID = setInterval(function () {
//             lun1();
//         });
//     });
//
//     $(".lunBoOneText>ul>li").mouseenter(function () {
//         $(this).css({
//             backgroundColor: "#2fc3a2",
//             opacity: 1
//         });
//         var index = $(this).index();
//         num = index;
//         $(".lunboOne>ul").stop(true,false).animate({
//             left: -(index)*799 + "px"
//         },1)
//     });
//     $(".lunBoOneText>ul>li").mouseleave(function () {
//         $(this).css({
//             backgroundColor: "#000",
//             opacity: 0.5
//         });
//     });
//
//     var num = 0;
//     function lun1() {
//         if (num == 7) {
//             $(".lunboOne>ul").animate({
//                 left: 0
//             },1);
//             num = 0;
//         }
//         num++;
//         $(".lunboOne>ul").animate({
//             left: -(num)*799 + "px"
//         },3000)
//     }
// });

$(function () {
    var idx = 0;
    function lunbo() {
        // console.log(flag);
        //
        // if (flag) {
        //     idx = 0;
        // }
        if(idx == 6){
            $($('#lun_botext1 li')[0]).css({'background-color':'#199d80','color':'white',opacity: 1}).siblings('li').css({'background-color':'rgb(51, 51, 52)','color':'black',opacity: .8})
        }
        if(idx == 7) {
            $('#lun_bo1').css('left',0);
            idx = 0;
        }

        idx++;
        //console.log(idx);
        $($('#lun_botext1 li')[idx]).css({'background-color':'#199d80','color':'white',opacity: 1}).siblings('li').css({'background-color':'rgb(51, 51, 52)','color':'black',opacity: .8});
        $('#lun_bo1').animate({'left':-idx*799},200);
    }
    var timeID = setInterval(lunbo,3000);
    $('.pictures').mouseenter(function () {
        clearInterval(timeID)
    });
    $('.pictures').mouseleave(function () {
        timeID = setInterval(lunbo,3000);
    });
    $('#lun_botext1 li').mouseenter(function () {
        idx = $(this).index()-1;
        lunbo()
    });


    //-------------------------------------------------------------
    var idx2 = 0;
    function lunbo2() {
        // console.log(flag2);
        //
        // if (flag2) {
        //     idx2 = 0;
        // }
        if(idx2 == 6){
            $($('#lun_botext2 li')[0]).css({'background-color':'#199d80','color':'white',opacity: 1}).siblings('li').css({'background-color':'rgb(51, 51, 52)','color':'black',opacity: .8})
        }
        if(idx2 == 7) {
            $('#lun_bo2').css('left',0);
            idx2 = 0;
        }

        idx2++;
        $($('#lun_botext2 li')[idx2]).css({'background-color':'#199d80','color':'white',opacity: 1}).siblings('li').css({'background-color':'rgb(51, 51, 52)','color':'black',opacity: .8});
        $('#lun_bo2').animate({'left':-idx2*799},200);
    }
    var timeID2 = setInterval(lunbo2,3000);
    $('.pictures').mouseenter(function () {
        clearInterval(timeID2)
    });
    $('.pictures').mouseleave(function () {
        timeID2 = setInterval(lunbo2,3000);
    });
    $('#lun_botext2 li').mouseenter(function () {
        idx2 = $(this).index()-1;
        lunbo2()
    });
    //--------------------------------------------------------------
    var flag = false;
    var flag2 = false;
    $("#ming1").on("click",function () {
        flag = true;
        flag2 = false;
        $(".lunboOne2").addClass("lunboooo");
        $(".lunBoOneText2").addClass("lunboooo");
        $("#ming2").removeClass("colorB");
        $(this).addClass("colorB").css("opacity",1);
        $(".lunboOne").removeClass("lunboooo");
        $(".lunBoOneText").removeClass("lunboooo");

    });
    $("#ming2").on("click",function () {
        flag2 = true;
        flag = false;
        $("#ming1").removeClass("colorB");
        $(this).addClass("colorB").css("opacity",1);
        $(".lunboOne").addClass("lunboooo");
        $(".lunBoOneText").addClass("lunboooo");
        $(".lunboOne2").removeClass("lunboooo");
        $(".lunBoOneText2").removeClass("lunboooo");
    });

});

//向上移动
$(function () {
    $(".box2nav li").mouseenter(function () {
        $(this).find("span").stop(true,false).animate({
            top: 44
        },500);
        $(this).find("img").stop(true,false).animate({
            top: -70
        },500,);
        $(this).css("backgroundColor","#3a3a3a")
    });
    $(".box2nav li").mouseleave(function () {
        $(this).find("span").stop(true,false).animate({
            top: 70
        },500);
        $(this).find("img").stop(true,false).animate({
            top: 20
        },500);
        $(this).css("backgroundColor","")
    })
});
//文字滑动效果
$(function () {
    var num2;
    $(".box2hd>li").click(function () {
        $(this).addClass("cur").siblings("li").removeClass("cur");
        num2 = $(this).index();
        $(".box2f").animate({
            left: -num2*353
        },500)
    })
});
$(function () {
    var num4;
    $(".box3hd1>li").click(function () {
        $(this).addClass("cur1").siblings("li").removeClass("cur1");
        num4 = $(this).index();
        $(".box3f1").animate({
            left: -num4*353
        },500)
    })
});
$(function () {
    var num5;
    $(".box3hd2>li").click(function () {
        $(this).addClass("cur2").siblings("li").removeClass("cur2");
        num5 = $(this).index();
        $(".box3f2").animate({
            left: -num5*353
        },500)
    })
});

//左右进入动画效果
$(function () {
    var num3;
    $(".box2lhd>li").click(function () {
        $("#x1").attr("src","images/x1.PNG");
        $("#x2").attr("src","images/x2.PNG");
        $("#x3").attr("src","images/x3.PNG");
        $("#x4").attr("src","images/x4.PNG");
        $("#x5").attr("src","images/x5.PNG");
        $("#x6").attr("src","images/x6.PNG");
        $("#x7").attr("src","images/x7.PNG");
        $("#x8").attr("src","images/x8.PNG");
        $("#x9").attr("src","images/x9.PNG");
        num3 = $(this).index();
        $(this).find("img").attr("src",$(this).attr("aaaa"));
        // $(this).find("img").src("images/x1-1.PNG");
        $(".mp").eq(num3).animate({
            right: 0
        },500).siblings("div").animate({
            right: "-200px"
        });
        $(".mpt").eq(num3).animate({
            left: 0
        },500).siblings("span").animate({
            left: "-200px"
        })
    })
});
//切换二维码
$(function () {
    $(".td").click(function () {
        $(".tymyd").show();
        $(".wx").hide();
    });
    $(".gw").click(function () {
        $(".wx").show();
        $(".tymyd").hide();
    })
});


//自己造的手风琴
$(function () {
    //1号
    $(".s31").click(function () {
        $(this).stop(true,false).animate({
            left: "-396px"
        },500);
        $(".s32").stop(true,false).animate({
            left: "68px"
        },500);
        $(".s33").stop(true,false).animate({
            left: "136px"
        },500);
        $(".s34").stop(true,false).animate({
            left: "204px"
        },500);
        $(".s35").stop(true,false).animate({
            left: "272px"
        },500);
        $(".s36").stop(true,false).animate({
            left: "340px"
        },500);
    });
    $(".s31").dblclick(function () {
        $(this).stop(true,false).animate({
            left: 0
        },500)
    });
    //2号
    $(".s32").click(function () {
        $(".s31").stop(true,false).animate({
            left: "-396px"
        },500);
        $(this).stop(true,false).animate({
            left: "-328px"
        },500);
        $(".s33").stop(true,false).animate({
            left: "136px"
        },500);
        $(".s34").stop(true,false).animate({
            left: "204px"
        },500);
        $(".s35").stop(true,false).animate({
            left: "272px"
        },500);
        $(".s36").stop(true,false).animate({
            left: "340px"
        },500);
    });
    $(".s32").dblclick(function () {
        $(this).stop(true,false).animate({
            left: "68px"
        },500);
        $(".s31").stop(true,false).animate({
            left: 0
        },500);
    });
    //3号
    $(".s33").click(function () {
        $(".s31").stop(true,false).animate({
            left: "-396px"
        },500);
        $(".s32").stop(true,false).animate({
            left: "-328px"
        },500);
        $(this).stop(true,false).animate({
            left: "-260px"
        },500);
        $(".s34").stop(true,false).animate({
            left: "204px"
        },500);
        $(".s35").stop(true,false).animate({
            left: "272px"
        },500);
        $(".s36").stop(true,false).animate({
            left: "340px"
        },500);
    });
    $(".s33").dblclick(function () {
        $(this).stop(true,false).animate({
            left: "136px"
        },500);
        $(".s32").stop(true,false).animate({
            left: "68px"
        },500);
        $(".s31").stop(true,false).animate({
            left: 0
        },500);
    });
    //4号
    $(".s34").click(function () {
        $(".s31").stop(true,false).animate({
            left: "-396px"
        },500);
        $(".s32").stop(true,false).animate({
            left: "-328px"
        },500);
        $(".s33").stop(true,false).animate({
            left: "-260px"
        },500);
        $(this).stop(true,false).animate({
            left: "-192px"
        },500);
        $(".s35").stop(true,false).animate({
            left: "272px"
        },500);
        $(".s36").stop(true,false).animate({
            left: "340px"
        },500);
    });
    $(".s34").dblclick(function () {
        $(this).stop(true,false).animate({
            left: "204px"
        },500);
        $(".s33").stop(true,false).animate({
            left: "136px"
        },500);
        $(".s32").stop(true,false).animate({
            left: "68px"
        },500);
        $(".s31").stop(true,false).animate({
            left: 0
        },500);
    });
    //5号
    $(".s35").click(function () {
        $(".s31").stop(true,false).animate({
            left: "-396px"
        },500);
        $(".s32").stop(true,false).animate({
            left: "-328px"
        },500);
        $(".s33").stop(true,false).animate({
            left: "-260px"
        },500);
        $(".s34").stop(true,false).animate({
            left: "-192px"
        },500);
        $(this).stop(true,false).animate({
            left: "-124px"
        },500);
        $(".s36").stop(true,false).animate({
            left: "340px"
        },500);
    });
    $(".s35").dblclick(function () {
        $(this).stop(true,false).animate({
            left: "272px"
        },500);
        $(".s34").stop(true,false).animate({
            left: "204px"
        },500);
        $(".s33").stop(true,false).animate({
            left: "136px"
        },500);
        $(".s32").stop(true,false).animate({
            left: "68px"
        },500);
        $(".s31").stop(true,false).animate({
            left: 0
        },500);
    });
    //6号
    $(".s36").click(function () {
        $(".s31").stop(true,false).animate({
            left: "-396px"
        },500);
        $(".s32").stop(true,false).animate({
            left: "-328px"
        },500);
        $(".s33").stop(true,false).animate({
            left: "-260px"
        },500);
        $(".s34").stop(true,false).animate({
            left: "-192px"
        },500);
        $(".s35").stop(true,false).animate({
            left: "-124px"
        },500);
        $(this).stop(true,false).animate({
            left: "-56px"
        },500)
    });
    $(".s36").dblclick(function () {
        $(this).stop(true,false).animate({
            left: "340px"
        },500);
        $(".s35").stop(true,false).animate({
            left: "272px"
        },500);
        $(".s34").stop(true,false).animate({
            left: "204px"
        },500);
        $(".s33").stop(true,false).animate({
            left: "136px"
        },500);
        $(".s32").stop(true,false).animate({
            left: "68px"
        },500);
        $(".s31").stop(true,false).animate({
            left: 0
        },500);
    });
});

//大滑块移动事件
$(function () {
    $(".box3nava>li").mouseenter(function () {
        $(this).find("i").stop(true,false).animate({
            top: "-80px"
        },500).next().stop(true,false).animate({
            top: "66px"
        })
    });
    $(".box3nava>li").mouseleave(function () {
        $(this).find("i").stop(true,false).animate({
            top: "5px"
        },500).next().stop(true,false).animate({
            top: "95px"
        })
    })
});



//----------------------------------------------------------------
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
//-------------------------------------------------------------------

