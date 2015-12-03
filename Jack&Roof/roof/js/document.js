// JavaScript Document
	$(document).ready(function(){

// 以下是头部js
		$(".headerMinBottom .menu>li").children().first("a").css({"background":"#333","color":"#F9BC07"})
        $(".headerMinBottom .menu>li").hover(function(){
			$(".menuTwo").hide();
			$(this).children("ul").stop(true,true).slideDown();
			
			},function(){
				$(this).children("ul").stop(true,true).slideUp()
				
				});

//  以下是banner的js
		$(".bannerMin li").eq(0).css({"background":"#F9BC07"});
		$(".bannerMin li").mouseover(function(){
			$(".bannerMin li").css({"background":"#fff"});
			$(this).css({"background":"#F9BC07"});
			
			var i = $(this).index()
			$(".bannerMin .bannerPic").stop(true,true).animate({"marginLeft":-1170*i})
			});
        
		
//  以下是contant2的js
		$(".contant2Min .contantPic").children("p").first().css({"background":"#F9BC07","opacity":"0.8","color":"#fff"})
		$(".contant2Min .contantPic").hover(function(){
			$(".contant2Min .contantPic").children("p").css({"background":"#000"},{"opacity":"0.8"})
			$(this).children("p").css({"background":"#F9BC07","opacity":"0.8","color":"#fff"})
			
			},function(){
				$(".contant2Min .contantPic").children("p").stop(true,true).css({"background":"#000"},{"opacity":"0.8"})
				})
				
				
				
        });
		
		
