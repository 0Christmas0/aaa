$(function() {
	var $width = $("#img").width();
	var index = 0;
	$(".dian>li").eq(0).css("backgroundColor", "white")
	function run() {
		index++;
		lunbo();
	}
	var timer = setInterval(run, 3000);
	function lunbo() {
		if(index == 5) {
			$(".tu").css({
				"transition": "0s",
				"transform": "translateX(0px)"
			});
			//console.log($(".tu").position().left);
			index = 1;
		}
		if(index == -1) {
			$(".tu").css({
				"transition": "0s",
				"transform": "translateX(" + -3 * $width + "px)"
			});
			//console.log($(".tu").position().left);
			index = 3;
		}
		$(".dian>li").css("backgroundColor", "rgba(0,0,0,0)");
		if(index == 4) {
			$(".dian>li").eq(0).css("backgroundColor", "white");
		}
		$(".dian>li").eq(index).css("backgroundColor", "white");
		$(".tu").css({
			"transition": "0.5s",
			"transform": "translateX(" + -index * $width + "px)"
		});
	}
	//左滑右滑
	document.addEventListener("touchmove", function(e) {
		e.preventDefault();
	}, {
		passive: false
	})
	$(".banner").on("touchstart", function() {
		clearInterval(timer);
	})
	$(".banner").on("touchend", function() {
		timer = setInterval(run, 3000);
	})
	$(".banner").on("swipeLeft", function() {
		index++;
		lunbo();
	})
	$(".banner").on("swipeRight", function() {
		index--;
		lunbo();
	})
})