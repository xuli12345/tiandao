//十二大高手部分
$(function(){
    $(".gaoshou li").on("mouseenter",function(){
        console.log(this);
        $(this).css( 'backgroundPosition','0px -541px')
    });
    $(".gaoshou li").on("mouseleave",function(){
        console.log(this);
        $(this).css( 'backgroundPosition','-163px -541px')
    });
})


