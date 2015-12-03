// JavaScript Document

	$(document).ready(function(){
        
//  以下是menu的js
		$(".menuMin ul>li").first().css({"background":"#000","color":"#fff","border-right":"0"});
		$(".menuMin ul>li").hover(function(){
			$(".submenu").hide();
			$(this).children("ul").stop(true,true).slideDown();
			
			},function(){
				$(this).children("ul").stop(true,true).slideUp();
				
				})
		
//  以下是banner的js		
		$(document).ready(function(){
		jQuery(".slideBox").stop(true,true).slide({mainCell:".bd ul",effect:"left",autoPlay:true});	
		})

//  以下是contant的js			
		$(document).ready(function(){
		jQuery(".picMarquee-left").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:4,interTime:50});
		})
				
    });
