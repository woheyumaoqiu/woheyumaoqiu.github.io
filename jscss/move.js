function move(){
        var obj = document.getElementById("container");
        obj.style.position = "absolute";
        obj.style.opacity = 0;
        var num = 0;
        var left = 630;
        var top = 220;
        var timer  =  setInterval(function(){ 
          if(num==105){ 
            clearInterval(timer); 
          }
          obj.style.left = left + "px";
          obj.style.top = top - num * 2 + "px";
          obj.style.opacity =   num  / 140.0;
          num++;
        },190);
}
