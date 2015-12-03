// JavaScript Document

window.onload = function(){
	
	var oApp = document.getElementById("app");
	var aLiApp = oApp.children;
	var len = aLiApp.length;
	var i = len - 1;
	var timer = null;
	timer = setInterval(function(){
		
		aLiApp[i].style.transform = " rotateY("+360/len*i+"deg) translateZ(300px)";
		
		i--;
		if(i == -1){
			clearInterval(timer);
		}	
	},30);
	
	
	
	var speedX = 0;
	var speedY = 0;
	var x = 150;
	var y = 0;
	var lastx = 0;
	var lasty = 0;
	
	var timer = null;
	
	document.onmousedown = function(ev){
		var disX = ev.clientX - y;
		var disY = ev.clientY - x;	
		clearInterval(timer);
		
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
			
			clearInterval(timer);
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
					clearInterval(timer);
				}
				 
				oApp.style.transform = "perspective(800px)  rotateX("+-x/10+"deg) rotateY("+y/10+"deg) ";
			
			},30);
			
			 
		};
		return false;
	}
	
	
};
