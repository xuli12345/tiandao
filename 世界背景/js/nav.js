/**
 * It work for nav ;
 * Created by ÑÕ½ðì¿ ;
 * Generated time is 2018-12-08 00:33 ;
 */

$(function () {
    $("#view").mouseenter(function () {
        $("#view-up").stop(true,false).animate({
            height:214,
        },200)
    });
    $("#view").mouseleave(function () {
        $("#view-up").stop(true,false).animate({
            height:0,
        },200)
    });
    $("#bigWorld").mouseenter(function () {
        $("#bigWorld-up").stop(true,false).animate({
            height:214,
        },200)
    });
    $("#bigWorld").mouseleave(function () {
        $("#bigWorld-up").stop(true,false).animate({
            height:0,
        },200)
    });
})