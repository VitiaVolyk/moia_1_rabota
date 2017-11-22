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