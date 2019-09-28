var x,y;		
var step=10;	
var message="点照片";		
message=message.split("");	

var xpos=new Array()		
for (i=0;i<message.length;i++) {
	xpos[i]=-50;
}
var ypos=new Array()		
for (i=0;i<message.length;i++) {
	ypos[i]=-50;
}

for (i=0;i<message.length;i++) {  
	document.write("<span id='span"+i+"' class='spanstyle'>");
	document.write(message[i]);
	document.write("</span>");
}

if (document.layers){
	document.captureEvents(Event.MOUSEMOVE);
}

function handlerMM(e){ 
	e=e||window.event;
	x = (document.layers) ? e.pageX : document.body.scrollLeft+e.clientX-220;
	y = (document.layers) ? e.pageY : document.body.scrollTop+e.clientY-35;
}

function makesnake() {  
	if (document.all) { 
		for (i=message.length-1; i>=1; i--) {
			xpos[i]=xpos[i-1]+step;  
			ypos[i]=ypos[i-1];  
		}
		xpos[0]=x+step 
		ypos[0]=y
		 
	
		for (i=0; i<=message.length-1; i++) {
			var thisspan = eval("span"+(i)+".style");  
			thisspan.posLeft=xpos[i];
			thisspan.posTop=ypos[i];
		}
	}
	else{
		for (i=message.length-1; i>=1; i--) {
			xpos[i]=xpos[i-1]+step;
			ypos[i]=ypos[i-1];
		}
		xpos[0]=x+step;
		ypos[0]=y;
		for (i=0; i<=message.length-1; i++) {
			var thisspan = document.getElementById("span"+i).style;
			thisspan.left=xpos[i];
			thisspan.top=ypos[i];
		}
	}
	var timer=setTimeout("makesnake()",10) 
}
document.onmousemove = handlerMM;