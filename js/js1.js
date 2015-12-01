// JavaScript Document

//适应屏幕高和宽
window.onresize = window.onload = function()
{
	var oNav = document.getElementById('LeftNav');
	var aLi2 = oNav.children;
	
	var oUl1 = document.getElementById('ul1');
	var aLi = oUl1.children;
	
	var ClientH = document.documentElement.clientHeight;
	var ClientW = document.documentElement.clientWidth;
	//var Client=document.documentElement.scrollTop||document.body.scroll
	
	//alert(oClientH);
	var oBox = document.getElementById('contentBox');
	var oMain = document.getElementById('Main');
	var aArticle = oMain.children;
	
	//alert(aArticle.length);
	for(var i=0; i<aArticle.length; i++)
	{
		aArticle[i].style.width=ClientW +'px';
		aArticle[i].style.height=ClientH +'px';
		
	};
	var bReady= true;
	var n = 0;

//导航栏点击事件开始
	for(var i = 0; i < aLi2.length; i++){
		(function(index){
			aLi2[i].onclick = function(){
			     n = index;
				 t = -n*aArticle[0].offsetHeight;
				 tab(t);
		    };
		})(i);
	  }
//导航栏点击事件结束

//圆点导航点击事件开始
	for(var i = 0; i < aLi.length; i++){
		(function(index){
			aLi[i].onclick = function(){
			     n = index;
				 t = -n*aArticle[0].offsetHeight;
				 tab(t);
		    };
		})(i);
	  }	  
//圆点导航点击事件

//滚轮事件开始
	addMouseWheel(oBox,function(fx){
	  
	  var t = oMain.offsetTop;
	  
	  if(fx){
	  //向下滚
	  //alert(1);
		 if(!bReady) return;
		 bReady = false;
		 n++;
		 t -= aArticle[0].offsetHeight;
	  
		if(n >= 4 ) n = 4;
		if(t <= -(oMain.offsetHeight - aArticle[0].offsetHeight)){
		   t = -(oMain.offsetHeight - aArticle[0].offsetHeight); 
		   n = 4;
		}
	  
	  }else{
	  //向上滚
	  //alert(2);
	    if(!bReady) return;
		bReady = false;
		n--;
		t += aArticle[0].offsetHeight;
		if(n <= 0 ) n = 0;
		if(t >= 0){
		  t = 0;
		  n = 0; 
		};
	  }
	  
	  //oMain.style.top = t + "px";
	  
	    tab(t);
	    oMain.style.top = t + "px";
	  })
	  
	  
	  function tab(t){
		  
		  for(var i = 0; i < aLi2.length; i++){
			  aLi2[i].className ='';
			  aLi[i].className ='';
		  }
		  
		  aLi2[n].className = 'active';
		  
		  aLi[n].className = 'cur';
		  
		  
		  
		  moveArticle(oMain,t);
		  
	  }
	  
	  
	  //添加鼠标滚轮事件函数
	  function addMouseWheel(obj,fn){
	  //1.判断浏览器类型
	  if(navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
	  //for FF
	  obj.addEventListener('DOMMouseScroll',fnWheel,false);
	  }else{
	  //for ie chrome
	  obj.onmousewheel=fnWheel;
	  }
	  
	  //2.确定鼠标滚动的方向
	  function fnWheel(ev){
	  
	  var oEvt=ev||event;
	  var down=true;
	  
	  if(oEvt.wheelDelta){//ie chrome 
	  down=oEvt.wheelDelta<0?true:false;
	  }else{ //FF
	  down=oEvt.detail>0?true:false;
	  }
	  
	  //回调函数 定好方向后做事
	  fn(down);
	  
	  oEvt.preventDefault&& oEvt.preventDefault();
	  return false;
	  
	  }
	  
	  }
	  
	  
	  var speed = 0;
	  var top = 0;
	  
	  function moveArticle(obj,iTarget){
	  
	  clearInterval(obj.timer);
	  
	  obj.timer = setInterval(function(){
	  speed += (iTarget - obj.offsetTop)/20;
	  speed *= 0.7;
	  top += speed;
	  
	  obj.style.top = Math.round(top) + "px";
	  
	  if(obj.offsetTop == iTarget && Math.abs(speed) < 5){
	     clearInterval(obj.timer); 
		
		 bReady = true;
	  }
	  
	  },30);
	  
	  }
	

	//滚轮事件结束
};
	
























