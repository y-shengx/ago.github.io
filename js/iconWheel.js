// JavaScript Document
function getStyle(obj,style){
	
	return obj.currentStyle?obj.currentStyle[style]:getComputedStyle(obj,false)[style];
}
function iconWheel(){
	

//图标临摹无缝滚动事件开始
	var oInBox=document.getElementById('inBox');
	
    var oInUl1=document.getElementById('inUl1');
	
    var oOl=document.getElementById('ol1');
	
    var oPrev=document.getElementById('prev');
    var oNext=document.getElementById('next');
	
    var aHead=oOl.getElementsByTagName('li');
    var aBody=oInUl1.getElementsByTagName('li');
    var now=0;
	var ready = true;
	
	
	var aBodyW = parseInt(getStyle(aBody[0],"width"));
	
	oInUl1.innerHTML+=oInUl1.innerHTML;
    oInUl1.style.width=aBodyW*oInUl1.children.length+'px';
	
	oInUl1W = parseInt(getStyle(oInUl1,"width"));
    //alert(oInUl1W) 
  for(var i=0;i<aHead.length;i++){
	   (function(index){
		   aHead[i].onmouseover=function(){
			   now=index;
			   tab();
		   };
		})(i);   
   }
    
   var timerX=setInterval(function(){
	       oNext.onclick();
	   },3000);
   
   oNext.onclick=function(){
	   if(!ready) return;
	   next();   
   };
   oPrev.onclick=function(){
	   //now--;
	   //if(now<0) now=aHead.length-1;
	   if(!ready) return; 
	   if(now==0){
		  now=aHead.length-1;
		  oInUl1.style.left=-oInUl1W/2+'px';
	   }else{
		   now--;
	   }
	   tab(); 
   };
   
   oInUl1.onmouseover=function(){
	   clearInterval(timerX);
   };
   oInUl1.onmouseout=function(){
	   timerX=setInterval(function(){
	       oNext.onclick();
	   },3000);
   };
   
   function next(){
	   now++;
	   //if(now>=aHead.length) now=0;
	   tab();
   }
   function tab(){
	   for(var i=0;i<aHead.length;i++){
		   aHead[i].className='';
	   }
	   if(now==aHead.length){
		   aHead[0].className='active';
	   }else{
		   aHead[now].className='active';
	   }
	   
	   ready=false;
	   
	   move(oInUl1,{left:-now*aBodyW},{time:1000,fn:function(){
		        ready=true;
				
		        if(now==aHead.length){
					oInUl1.style.left=0;
					now=0;
			    }
				
	  }});
   }
   
	//图标临摹无缝滚动事件结束
	
	
}
