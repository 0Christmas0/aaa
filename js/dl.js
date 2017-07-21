var ni = document.getElementById("ni");
var mi = document.getElementById("mi");
var zhu = document.getElementById("zhu");
var nn = document.getElementsByClassName("nn");
var sj = document.getElementById("sj");
var yz = document.getElementById("yz")
ni.onblur = function() {
	var reg = /^\w{8,16}$/g;
	if(ni.value == "") {
		nn[0].innerHTML = "<img src='img/false.png'/>";
	} else if(!reg.test(ni.value)) {
		nn[0].innerHTML = "<img src='img/false.png'/>";
	} else {
		
		nn[0].innerHTML = "<img src='img/true.png'/>";
	}
}
mi.onblur = function() {
	var reg = /^\w{6,12}$/;
	if(mi.value == "") {
		nn[1].innerHTML = "<img src='img/false.png'/>";
	} else if(reg.test(mi.value)) {
	
		nn[1].innerHTML = "<img src='img/true.png'/>";
	} else {

		nn[1].innerHTML = "<img src='img/false.png'/>";
	}
}
function suiji() {
	var q = Math.floor(Math.random() * 10);
	var w = Math.floor(Math.random() * 10);
	var e = Math.floor(Math.random() * 10);
	var r = Math.floor(Math.random() * 10);
	sj.innerHTML = q.toString() + w + e + r;
}
window.onload = function() {
	suiji()
}
//yz.onblur = function() {
//	if(yz.value != sj.innerHTML) {
//		nn[5].style.color = "red";
//		nn[].innerHTML = "<img src='img/false.png'/>";
//	} else {
//		nn[5].style.color = "green";
//		nn[5].innerHTML = "<img src='img/true.png'/>"
//	}
//	suiji();
//}
sj.onclick = function() {
	suiji();
}