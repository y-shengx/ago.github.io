// JavaScript Document
$(document).ready(function(){

	//第四页左边导航栏开始
		$(".pageFour div#navBox ul.one li").hover(function(){
			$(this).children("p").stop(true,true).delay(200).fadeIn()
			},function(){
				$(this).children("p").stop(true,true).hide()
				})	
	//第四页左边导航栏结束
		
	//第二页悬停效果开始
		$(".pageTwo section ul.skill li").hover(function(){
			$(this).stop(true,true).delay(200).css({"background":"#f60"})
			$(this).children(".opacity_0,.opacity_1").stop(true,true).fadeIn()
			},function(){
				$(this).stop(true,true).delay(200).css({"background":""})
				$(this).children(".opacity_0,.opacity_1").delay(200).stop(true,true).fadeOut()
				})	
	//第二页悬停效果结束
	
		$(".pageFour div#navBox  ul.icon li").hover(function(){
			$(this).children("img").stop(true,true).delay(200).css({"width":"128px","height":"128px","position":"relative","z-index":"10"})
			},function(){
				$(this).children("img").stop(true,true).delay(200).css({"width":"88px","height":"88px","position":"absolute","z-index":""})
				})	

	//第二页鼠标悬停开始
		$(".pageThree ul li").hover(function(){
				$(this).children("div.slide").stop(true,false).animate({"top":"0"});
				$(this).children("p").stop(true,false).animate({"top":"0"});
			},function(){
				$(this).children("div.slide").stop(true,false).animate({"top":"-32px"});
				$(this).children("p").stop(true,false).animate({"top":"140px"})
		})
	//第二页鼠标悬停结束

});
































