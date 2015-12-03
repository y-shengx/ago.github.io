// JavaScript Document

// 以上为header的js
	$(document).ready(function(){
		// 悬停二级菜单
        $("nav.menu ul.headerMinMenu>li").hover(function(){
			$(this).children("ul.submenu").stop(true,true).slideDown();
			
			},function(){
				$(this).children("ul.submenu").stop(true,true).slideUp();
				
				});
		$("header nav.pic ul.menu2>li a.pic3").hover(function(){
			$("header nav.pic .otherbackg").show()
			},function(){
				$("header nav.pic .otherbackg").hide()
				})
				
		// 点击右边出现搜索框		
		$("header nav.pic ul.menu2>li a.pic1").click(function(){
				$("header .whiteback").show()
				$("header .whiteback input,header .whiteback a").fadeIn()
			})
		$("header .whiteback a").click(function(){
				$("header .whiteback").fadeOut()
				$("header .whiteback input,header .whiteback a").fadeOut()
			})
			
		// 点击右边出现黑栏
		$("header nav.pic ul.menu2>li a.pic2").click(function(){
				$("header .blackback").slideDown()
				$("header .blackback a").fadeIn()
			})
		$("header .blackback a").click(function(){
				$("header .blackback").slideUp()
				$("header .blackback a").fadeOut()
			})
			
		$("header nav.pic ul.menu2>li a.pic0").click(function(){
				$("header nav.menu ul.smallmenu").slideDown()
				$("header nav.pic ul.menu2>li a.pic0").click(function(){
				$("header nav.menu ul.smallmenu").slideUp()
				})
			})

				
// 以上为contant的js

				
		$("main article.contantOther nav ul.menu li").click(function(){
			$("main article.contantOther nav ul.menu li").children("a").css({"color":"#000","border":"0"})
			$(this).children().css({"color":"#f60","border":"1px solid #f60"})
			})
			
		// 六张图片交互	
		$("main article.contantOther nav ul.menu li.menu1").click(function(){
			$("main article.contantThree section ul.picAll li").show()
			})
			
		$("main article.contantOther nav ul.menu li.menu2").click(function(){
			$("main article.contantThree section ul.picAll li").show()
			$("main article.contantThree section ul.picAll li.pic1,main article.contantThree section ul.picAll li.pic2,main article.contantThree section ul.picAll li.pic6").fadeOut(300)
			$("main article.contantThree section ul.picAll li.pic3,main article.contantThree section ul.picAll li.pic4,main article.contantThree section ul.picAll li.pic5").fadeIn(500)
			})
			
		$("main article.contantOther nav ul.menu li.menu3").click(function(){
			$("main article.contantThree section ul.picAll li").show()
			$("main article.contantThree section ul.picAll li.pic1,main article.contantThree section ul.picAll li.pic2,main article.contantThree section ul.picAll li.pic3,main article.contantThree section ul.picAll li.pic4,main article.contantThree section ul.picAll li.pic5").fadeOut(300)
			$("main article.contantThree section ul.picAll li.pic6").fadeIn(500)
			})
			
		$("main article.contantOther nav ul.menu li.menu4").click(function(){
			$("main article.contantThree section ul.picAll li").show()
			$("main article.contantThree section ul.picAll li.pic1,main article.contantThree section ul.picAll li.pic3,main article.contantThree section ul.picAll li.pic5").fadeOut(300)
			$("main article.contantThree section ul.picAll li.pic2,main article.contantThree section ul.picAll li.pic4,main article.contantThree section ul.picAll li.pic6").fadeIn(500)
			})
			
		$("main article.contantOther nav ul.menu li.menu5").click(function(){
			$("main article.contantThree section ul.picAll li").show()
			$("main article.contantThree section ul.picAll li.pic3,main article.contantThree section ul.picAll li.pic4,main article.contantThree section ul.picAll li.pic6").fadeOut(300)
			$("main article.contantThree section ul.picAll li.pic1,main article.contantThree section ul.picAll li.pic2,main article.contantThree section ul.picAll li.pic5").fadeIn(500)
			})
			
		$("main article.contantOther nav ul.menu li.menu6").click(function(){
			$("main article.contantThree section ul.picAll li").show()
			$("main article.contantThree section ul.picAll li.pic2,main article.contantThree section ul.picAll li.pic3,main article.contantThree section ul.picAll li.pic5,main article.contantThree section ul.picAll li.pic6").fadeOut(300)
			$("main article.contantThree section ul.picAll li.pic1,main article.contantThree section ul.picAll li.pic4").fadeIn(500)
			})
    });






