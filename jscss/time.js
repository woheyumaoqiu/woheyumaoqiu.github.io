function showTime() { 
	var date=new Date();   
	var year=date.getFullYear();    
	var mon=date.getMonth()+1;    
	var da=date.getDate();    
	var day=date.getDay();   
	var h=date.getHours();    
	var m=date.getMinutes();    
	var s=date.getSeconds();    
	var d=document.getElementById('Date');    

	var currentTimeString = "<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + year+"年"+mon+"月"+da+"日"+"星期"+day+' '+h+':'+m+':'+s
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp"
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
		+	"<c style=\"color: #CCCCCC; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:20px\" ></c>"; 
	document.getElementById("show").innerHTML=currentTimeString;  
	window.setTimeout("showTime()", 1000); 
} 
