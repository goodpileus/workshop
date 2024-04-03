$(".box").draggable({
	containment: ".container",
	obstacle: ".placed", 
	preventCollision: true,

	// animate on start of drag (using jQuery UI)
  start: function(e, ui) {
		$(this).removeClass('placed'),
		$('.placed').addClass('boundary');
	},

	// animate on end of drag (using jQuery UI)
	stop: function(e, ui) {
			$(this).addClass('placed'),
			$('.placed').removeClass('boundary');
	}
});

