var requestID;
var svgEle = document.getElementById("space");
var grow = true;
var width= svgEle.getAttribute("width");
var height= svgEle.getAttribute("height")
var radius = 0;
var x=Math.round(Math.random() * canv.width);
var y=Math.round(Math.random() * canv.height);

var clearWindow = function(){
    svgEle.innerHTML="";
}

var animateCircle= function(){

    window.cancelAnimationFrame(requestID);
    if (radius > 250){
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
    // console.log(radius);
	// console.log("entered")
	var circle = document.createElementNS("https://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", 250);
    circle.setAttribute("cy",250);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill","red");
    svgEle.appendChild(circle);
	// console.log(svgEle.innerHTML)
    requestID= window.requestAnimationFrame(animateCircle);
}

var animateDVD = function (){
	window.cancelAnimationFrame(requestID)
	xVel=1;
	yVel=1;
	var moveDVD = function(){
		window.cancelAnimationFrame(requestID);
		clearCanv();
		var dvd= document.createElementNS("https://www.w3.org/2000/svg", "image");
		dvd.setAttributeNS("http://www.w3.org/1999/xlink", "href","dvdicon.jpg");
		dvd.setAttribute({
			x: x,
			y: y,
			height: 75,
			width: 150;
		})

		if (x >= canv.width - 150 || x<=0){
			xVel *= -1;
		}
		if (y >= canv.height - 75|| y<=0){
			yVel *= -1;
		}
		x += xVel;
		y += yVel;
		requestID = window.requestAnimationFrame(moveDVD);
		console.log(x,y)
	}
	
	requestID = window.requestAnimationFrame(moveDVD);
}

var stop = function(){
	window.cancelAnimationFrame(requestID);
}
