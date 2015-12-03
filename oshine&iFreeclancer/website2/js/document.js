// JavaScript Document
	$(document).ready(function(){
        
// 以下为header的js
 		$("header nav ul.menu>li").hover(function(){
			$(this).children("ul.submenu").stop(true.true).fadeIn()
			},function(){
				$(this).children("ul.submenu").stop(true.true).fadeOut()
				})
				
	$(".backg ul:nth-child(1) li").hide()
	$(".backg ul:nth-child(1) li:nth-child(1)").show()
	$(".backg ul:nth-child(3) li:nth-child(1)").children("a").css({"backgroundImage":"url(images/red.png)"})
	$(".backg ul:nth-child(3) li").click(function(){
		var i = $(this).index();
		$(".backg ul:nth-child(3) li").children("a").css({"backgroundImage":"url(images/white.png)"});
		$(this).children("a").css({"backgroundImage":"url(images/red.png)"});
		$(".backg ul:nth-child(1) li").fadeOut();
		$(".backg ul:nth-child(1) li").eq(i).fadeIn();
	});
	$(window).scroll(function() {		
		if($(window).scrollTop() >= 100){
			$('.actGotop').fadeIn(300); 
		}else{    
			$('.actGotop').fadeOut(300);
		}  
	});
	$('.actGotop').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});	




	});