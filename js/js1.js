// JavaScript Document

//适应屏幕高和宽
function setH(){
	var oMain = document.getElementById('Main');
	var aArticle = oMain.children;
	
	for(var i=0; i<aArticle.length; i++)
	{
		aArticle[i].style.width=ClientW +'px';
		aArticle[i].style.height=ClientH +'px';
		
	};
	
	oMain.style.top = n*aArticle[0].offsetheight + "px";
	
}
var ClientH = 0;
var ClientW = 0;
var n = 0;
window.onresize = setH;

window.onload = function()
{
	var oNav = document.getElementById('LeftNav');
	var aLi2 = oNav.children;
	
	var oUl1 = document.getElementById('ul1');
	var aLi = oUl1.children;
	
	ClientH = document.documentElement.clientHeight;
    ClientW = document.documentElement.clientWidth;
    
	setH();
	//var Client=document.documentElement.scrollTop||document.body.scroll
	
	//alert(ClientH);
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
	    //oMain.style.top = t + "px";
	  })
	  
	  
	  function tab(t){
		  //alert(aLi2.length)
		  for(var i = 0; i < aLi2.length; i++){
			  
			  aLi[i].className = '';
			  aLi2[i].className ='';
			  
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
	  
	  if(obj.offsetTop == iTarget && Math.abs(speed) < 10 ){
	     clearInterval(obj.timer); 
		
		 bReady = true;
	  }
	  
	  },30);
	  
	  }
	//滚轮事件结束
	
	//four_nav导航事件开始	
	var oNavBox=document.getElementById('navBox')
	var aSectionFour=oNavBox.getElementsByTagName('section')
	var aDivFour=oNavBox.getElementsByTagName('div')
	
	
	for(var i=0; i<aSectionFour.length; i++)
	{
		
		aSectionFour[i].index=i;
		aSectionFour[i].onclick=function()
		{
			for(var i=0; i<aSectionFour.length; i++)
			{
				aSectionFour[i].className='';
				aDivFour[i].style.display='none';
			}
			this.className='active';
			aDivFour[this.index].style.display='block';
		};
		
	};
	//four_nav导航事件开始	
	
	//3d旋转事件开始	
	var oApp = document.getElementById("app");
	var aLiApp = oApp.children;
	var len = aLiApp.length;
	var q = len - 1;
	var timer1 = null;
	
	
	timer1 = setInterval(function(){
		
		
		aLiApp[q].style.transform = " rotateY("+360/len*q+"deg) translateZ(300px)";
		
		q--;
		if(q == -1){
			clearInterval(timer1);
		}	
	},30);
	
	
	
	var speedX = 0;
	var speedY = 0;
	var x = 150;
	var y = 0;
	var lastx = 0;
	var lasty = 0;
	
	var times = null;
	
	document.onmousedown = function(ev){
		var disX = ev.clientX - y;
		var disY = ev.clientY - x;	
		clearInterval(times);
		
		document.onmousemove = function(ev){
			y = ev.clientX - disX;
			x = ev.clientY - disY;
			
			if(x > 600){
				x = 600;
			} else if(x < -600){
				x = -600;
			}
			
			oApp.style.transform = "perspective(800px)  rotateX("+-x/10+"deg) rotateY("+y/10+"deg) "; 	
			
			speedX = x - lastx;
			speedY = y - lasty;
			
			lastx = x;
			lasty = y;
			
		};
		
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;	
			
			clearInterval(times);
			timer = setInterval(function(){
				x += speedX;
				y += speedY;
				
				speedX *= 0.95;
				speedY *= 0.95; 
				
				if(x > 600){
					x = 600;
				} else if(x < -600){
					x = -600;
				}
				
				if(Math.abs(speedX) < 1){
					speedX = 0;
				}
				if(Math.abs(speedY) < 1){
					speedY = 0;
				}
				
				if(speedX == 0 && speedY == 0){
					clearInterval(times);
				}
				 
				oApp.style.transform = "perspective(800px)  rotateX("+-x/10+"deg) rotateY("+y/10+"deg) ";
			
			},30);
			
			 
		};
		return false;
	}
	//3d旋转事件结束
	
	iconWheel();
	
	
	  
	

};
	
























