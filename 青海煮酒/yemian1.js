$(function(){
// $(".NBA").on("mouseenter" ,function(){
//    $(".xiala").show();
// })
// $(".NBA").on("mouseleave",function(){
//     $(".xiala").hide();
// })
    var numidx = 0
    var timeidnum = setInterval(function () {
        var numindex = numidx++/10
        if(numindex < 1.5){
            $('.pbgc .slo').css('transform','scale('+numindex+')')
        }else {
            $('.pbgc .slo').css('transform','scale(1)')
            clearInterval(timeidnum)
        }

    },50)


$("#nav1").on("mouseenter",function(){
    $("#rule1").show();
})
$("#nav1").on("mouseleave",function(){
    $("#rule1").hide();
})

$("#nav2").on("mouseenter",function(){
    $("#rule2").show();
})
$("#nav2").on("mouseleave",function(){
    $("#rule2").hide();
})
$("#nav3").on("mouseenter",function(){
    $("#rule3").show();
})
$("#nav3").on("mouseleave",function(){
    $("#rule3").hide();
})
$("#nav4").on("mouseenter",function(){
    $("#rule4").show();
})
$("#nav4").on("mouseleave",function(){
    $("#rule4").hide();
})
$("#sp").on("click",function(){
    $("#vid").show();
    $("#sha").show();
})
$("#sha").on("click",function(){
    $("#vid").hide();
    $("#sha").hide();
})


})






