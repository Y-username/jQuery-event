$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
		$(".stream1").fadeTo(2000, 0.5);
		$(".stream1").fadeOut(1000);
		$(".stream1").fadeIn();
	});
	$("#stream2_btn").mouseenter("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").mouseout("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


}); 
