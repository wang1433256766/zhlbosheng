$(function(){
	// 轮播
	$(".fullSlide").hover(function(){
	    $(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
	},
	function(){
	    $(this).find(".prev,.next").fadeOut()
	});
	$(".fullSlide").slide({
	    titCell: ".hd ul",
	    mainCell: ".bd ul",
	    effect: "fold",
	    autoPlay: true,
	    autoPage: true,
	    trigger: "click",
	    startFun: function(i) {
	        var curLi = jQuery(".fullSlide .bd li").eq(i);
	        if ( !! curLi.attr("_src")) {
	            curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
	        }
	    }
	});

	//最新动态
	jQuery(".m-slide").slide({
        titCell: ".tab li",
        mainCell: ".new_img",
        effect: "fold",
        autoPlay: true
    });

    //悬浮客服，鼠标悬浮
    $(".fix_kefu .fix_kefu_nav .kefu_tel a").hover(function(){
    	$(".fix_kefu  .kefu_none .kefu_tel").css('display', 'block');
    },function(){
    	$(".fix_kefu  .kefu_none .kefu_tel").css('display', 'none');
    })
})