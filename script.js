/*global $*/

$(document).ready(function() {
	$("#button1").click(function(){
		$("#button1").hide("fast");
	});
	$("#stream1_btn").click(function(){
		$(".stream1").fadeOut(1000, 0.4);
		$(".stream1").fadeIn(1000, 1);
	});
}); 