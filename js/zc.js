var ni = document.getElementById("ni");
var mi = document.getElementById("mi");
var que = document.getElementById("que");
var you = document.getElementById("you");
var shou = document.getElementById("shou");
var nian = document.getElementById("nian");
var sheng = document.getElementById("sheng");
var shi = document.getElementById("shi");
var zhu = document.getElementById("zhu");
var qx = document.getElementById("qx");
var tbody = document.getElementById("tbody");
var shan = document.getElementById("shan");
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
		nn[1].style.color = "#ADFF2F";
		nn[1].innerHTML = "<img src='img/true.png'/>";
	} else {

		nn[1].innerHTML = "<img src='img/false.png'/>";
	}
}
que.onblur = function() {
	var reg = /^\w{6,12}$/;
	if(que.value == "") {
		nn[2].innerHTML = "<img src='img/false.png'/>";
	} else if(que.value != mi.value) {
		nn[2].innerHTML = "<img src='img/false.png'/>";
	} else {
		nn[2].style.color = "#ADFF2F"
		nn[2].innerHTML = "<img src='img/true.png'/>"
	}
}
you.onblur = function() {
	if(you.value == "") {
		nn[3].innerHTML = "<img src='img/false.png'/>";
	} else if(you.value.indexOf("@") == -1 ||
		you.value.indexOf(".") == -1) {
		nn[3].innerHTML = "<img src='img/false.png'/>"
	} else {
		nn[3].style.color = "#ADFF2F"
		nn[3].innerHTML = "<img src='img/true.png'/>"
	}
}
qq.onblur = function() {

	var reg = /^\w[1-9][0-9]{4,11}$/;
	if(qq.value == "") {
		nn[4].innerHTML = "<img src='img/false.png'/>";
	} else if(!reg.test(qq.value)) {
		nn[4].innerHTML = "<img src='img/false.png'/>";
	} else {
		nn[4].style.color = "#ADFF2F";
		nn[4].innerHTML = "<img src='img/true.png'/>";
	}
}
shou.onblur = function() {
	var reg = /^1\d{10}$/;
	if(shou.value == "") {
		nn[5].innerHTML = "<img src='img/false.png'/>";
	} else if(!reg.test(shou.value)) {
		nn[5].innerHTML = "<img src='img/false.png'/>";
	} else {
		nn[5].style.color = "#ADFF2F";
		nn[5].innerHTML = "<img src='img/true.png'/>";
	}
}
//
//function suiji() {
//	var q = Math.floor(Math.random() * 10);
//	var w = Math.floor(Math.random() * 10);
//	var e = Math.floor(Math.random() * 10);
//	var r = Math.floor(Math.random() * 10);
//	sj.innerHTML = q.toString() + w + e + r;
//}
//window.onload = function() {
//	suiji()
//}
yz.onblur = function() {
	if(yz.value != sj.innerHTML) {
		//nn[5].style.color = "red";
		nn[5].innerHTML = "<img src='img/false.png'/>";
	} else {
		//nn[5].style.color = "green";
		nn[5].innerHTML = "<img src='img/true.png'/>"
	}
	suiji();
}
//sj.onclick = function() {
//	suiji();
//}

var p = document.getElementById("djs")
var btn = document.getElementById("btn")
var timer = null;
btn.onclick = function() {
	timer = setInterval(fn, 1000)
	btn.style.background = "lightgray";
	p.style.background = "lightgray";
  	btn.disabled = true;
  	p.innerText= 60;
	function fn() {
		p.innerHTML--;
		if(p.innerHTML == 0) {
			clearInterval(timer)
			p.innerText ="";
			btn.disabled = false;
		}
	}
}

