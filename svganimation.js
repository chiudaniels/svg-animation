var requestID;
var svgEle = document.getElementById("space");
var grow = true;
var width= svgEle.getAttribute("width");
var height= svgEle.getAttribute("height")
var radius = 0;

var clearWindow = function(){
    svgEle.innerHTML="";
}

var animateCircle= function(){

    // window.cancelAnimationFrame(requestID);
    // if (radius > 250){
	// grow=false;
    // }
    // else if (radius < 0){
	// grow=true; 
    // }

    // if (grow){
	// radius++;
    // }
    // else{
	// radius--;
    // }
	
    // clearWindow();
    // console.log(radius);
	console.log("entered")
	var circle = document.createElementNS("https://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", 250);
    circle.setAttribute("cy",250);
    circle.setAttribute("r", 100);
    circle.setAttribute("fill","red");
    svgEle.appendChild(circle);
	console.log(svgEle.innerHTML)
    // requestID= window.requestAnimationFrame(animateCircle);
}

var animateDVD = function (){
	
}

var stop = function(){
	window.cancelAnimationFrame(requestID);
}
