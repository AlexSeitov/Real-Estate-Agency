// Modal window

$('#popup-btn').click(function() { 
	
	$('#popup-overlay').fadeIn();
	$('#popup-overlay').addClass('disabled');
});

$('#close-popup').click(function() { 
	$('#popup-overlay').fadeOut();
	
});

$(document).mouseup(function (e) { 
	var popup = $('#popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('#popup-overlay').fadeOut();
		
	}
});

// $(window).on('load', function () { 
// 	setTimeout(function(){
// 		if($('#popup-overlay').hasClass('disabled')) {
// 			return false;
// 		} else {
			
// 			$("#popup-overlay").fadeIn();
// 		}
// 	}, 5000);
// });