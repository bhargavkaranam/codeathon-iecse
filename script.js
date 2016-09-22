$(document).ready(function(){
	var image =	setInterval(changeImage,1000);
	var i = 0;
	var images = ["flynava.png","https://www.iecsemanipal.com/viewable/iecse.svg"];
	$(".progress").animate({'width' : '100%'},2000,function(){
		clearInterval(image);
		$(".initial").hide();	
		$(".tab").fadeIn();
		$(".code").fadeIn();
		setTimeout(function() {
		 $(".code").fadeOut();
		 $(".code").promise().done(function() {
		 $(".terminal").fadeIn();
		 $(".terminal").promise().done(function() {
		 	$(".terminal-text").typed({
        strings: ["python codeathon.py \n"],
        typeSpeed: 0
      });
		 })
		 })
	},2000);
	});
	function changeImage()
	{
	$("#limage").removeClass('iecse-logo');
		if(i == 0)
		{
			i = 1;
			$("#limage").addClass('iecse-logo');
		}
		else
			i = 0;
		$("#limage").hide().attr('src',images[i]).fadeIn(700);
	}
});
