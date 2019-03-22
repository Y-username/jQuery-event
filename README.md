### Animation Effect
by following functions

$("#stream1_btn").on("click", function() { \
		$(".stream1").fadeTo(2000, 0.5);  has 2 parameter, speed and opacity \
		$(".stream1").fadeOut(1000); \
		$(".stream1").fadeIn(); \
		$(".stream1").fadeToggle();  \
		$(".stream1").show();  \
		$(".stream1").show('slow'); \
		$(".stream1").show('medium');  \
		$(".stream1").show('fast');  \
		$(".stream1").show(1500);     1500 milisecond  \
		$(".stream1").hide();  \
		$(".stream1").toggle(1000);  make an element hiden or show. but when it hiden, you can not make it visible again  \
		$(".stream1").slideDown();  \
		$(".stream1").slideUp();  \
		$(".stream1").slideToggle(); \
	});