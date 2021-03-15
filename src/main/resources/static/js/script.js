$(document).ready(function(){
	$("#email-thumbnail").hover(function(){
		$("#email-thumbnail").css("cursor","pointer");
	});
	$("#email-thumbnail").click(function(){
		window.prompt("Copy to clipboard by pressing Ctrl+C/Command+C, then click OK", document.getElementById('email-text').innerHTML);
	});
	$("footer").html("&copy; " + new Date().getFullYear() + " Copyright Omar Alkhalili");
});
$(window).scroll(function() {
	$(".slideanim").each(function(){
		var pos = $(this).offset().top;
		var winTop = $(window).scrollTop();
		if (pos < winTop + 200) {
			$(this).addClass("slide");
		}
	});
});