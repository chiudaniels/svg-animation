var requestID;
var svgEle = document.getElementById("space");
var grow = true;
var dimensions= svgEle.getBBox();

var clearWindow = function(){
    svgEle.innerHTML="";
}

var animateCircle= function(){
    window.cancelAnimationFrame(requestID);
    var radius = 0;
    if (radius > dimensions.width / 2){
	grow=false;
    }
    else if (radius < 0){
	grow=true; 
    }

    if (grow){
	radius++;
    }
    else{
	radius--;
    }
    clearWindow();
    console.log(grow);
    var circle=document.createElementNS("https://www.w3.org/2000/svg",circle);
    circle.setAttribute("cx",dimensions.width / 2);
    circle.setAttribute("cy",dimensions.height / 2);
    circle.setAttribute("r",radius);
    circle.setAttribute("stroke","red");
    svgEle.appendChild(circle);

    
    requestID= window.requestAnimationFrame(animateCircle);
}

var stop = function(){
	window.cancelAnimationFrame(requestID);
}
