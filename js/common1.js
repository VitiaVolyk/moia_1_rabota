$(document).ready(function() {
	
	$(".popup_c").magnificPopup( );
	
	
	$(".click").click(function() {
		if ($(this).parent().children("ul").is(":visible")) {
			$(this).parent().children("ul").stop(false,true).slideUp();
			
		} else {
			
			$(this).parent().children("ul").stop(false,true).slideDown();
			
			}
	});
	
	$(".arr1").click(function() {
		
			
		$(this).parent().parent().children(".year").children(".s").stop(false,true).removeClass("hidden");
		$(this).parent().parent().children(".year").children(".t").stop(false,true).addClass("hidden");
	});
	
	$(".a_1").click(function() {
		
		$("body .im_s .a_c").addClass("hidden");
		$("body .im_s .a_b").addClass("hidden");
		$("body .wrapp .im_s .a_a").removeClass("hidden");
		$("body .im_s .a_1").addClass("act");
		$("body .im_s .a_2").removeClass("act");
		$("body .im_s .a_3").removeClass("act");
	});
	$(".a_2").click(function() {
		
		$("body .im_s .a_c").addClass("hidden");
		$("body .im_s .a_a").addClass("hidden");
		$("body .wrapp .im_s .a_b").removeClass("hidden");
		$("body .im_s .a_2").addClass("act");
		$("body .im_s .a_1").removeClass("act");
		$("body .im_s .a_3").removeClass("act");
	});
	$(".a_3").click(function() {
		
		$("body .im_s .a_b").addClass("hidden");
		$("body .im_s .a_a").addClass("hidden");
		$("body .wrapp .im_s .a_c").removeClass("hidden");
		$("body .im_s .a_3").addClass("act");
		$("body .im_s .a_2").removeClass("act");
		$("body .im_s .a_1").removeClass("act");
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				// save instance in magnificPopup variable
				magnificPopup.close(); 
				// Close popup that is currently opened
				ths.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});