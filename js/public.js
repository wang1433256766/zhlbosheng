$(function(){
    //悬浮客服，鼠标悬浮
    $(".fix_kefu .fix_kefu_nav .kefu_tel a,.fix_kefu  .kefu_none .kefu_tel").hover(function(){
    	$(".fix_kefu  .kefu_none .kefu_tel").toggle();
    });
    $(".fix_kefu .fix_kefu_nav .kefu_tel a,.fix_kefu  .kefu_none .kefu_tel").hover(function(){
    	$(".fix_kefu .fix_kefu_nav .kefu_tel a").css('border-left', 0);
    },function(){
    	$(".fix_kefu .fix_kefu_nav .kefu_tel a").css('border-left', '1px solid #387a21');
    });

    $(".fix_kefu .fix_kefu_nav .kefu_bindweixin a,.fix_kefu .kefu_none .kefu_weixin").hover(function(){
    	$(".fix_kefu .kefu_none .kefu_weixin").toggle();
    });
    $(".fix_kefu .fix_kefu_nav .kefu_bindweixin a,.fix_kefu  .kefu_none .kefu_weixin").hover(function(){
    	$(".fix_kefu .fix_kefu_nav .kefu_bindweixin a").css('border-left', 0);
    },function(){
    	$(".fix_kefu .fix_kefu_nav .kefu_bindweixin a").css('border-left', '1px solid #387a21');
    });
});