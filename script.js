$(function () {
	var iframeW = $('#iframe-wrapper');

	$('#btn-inc').on('click', function () {
		iframeW.height(1.1 * iframeW.height());
	});

	$('#btn-dec').on('click', function () {
		iframeW.height(.9 * iframeW.height());
	});
});

//$(function () {
//	var way = false;
//	var timer;
//	var percent = 0;
//	var progress = $('.progress');
//
//	function renderBar() {
//		progress.width(percent + '%');
//	}
//
//	function inc() {
//		percent++;
//		percent++;
//
//		if (percent < 100) {
//			renderBar();
//		} else {
//			tadam()
//		}
//	}
//
//	function dec() {
//		percent--;
//		percent--;
//
//		if (percent > 0) {
//			renderBar();
//		} else {
//			tadam()
//		}
//	}
//
//	function tadam() {
//		clearInterval(timer);
//
//		if (way = !way) {
//			timer = setInterval(inc, 100)
//		} else {
//			timer = setInterval(dec, 100)
//		}
//	}
//
//	tadam();
//});
//
