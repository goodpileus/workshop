// var e = document.getElementById('words');

// e.innerHTML = e.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="word">$2</span>');

var words = document.getElementsByClassName("words");
for (var i = 0; i < words.length; i++) {
	var word = words[i];
	word.innerHTML = word.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="word dr">$2</span>');
}

$(".dr").draggable({
	stack: '.dr',
	containment: "body",
	start: function( event, ui ) {
		$(this).addClass('being-dragged'); 
    $(".reset-btn").fadeIn();
	},
	stop: function( event, ui ) {
		$(this).removeClass('being-dragged');
		
		if ($(this).hasClass("scrap")) {
			moveDiv(this);
		}
		
	},
});

$(".gallery img").click(function(){
	$(this).toggleClass("large");
});


$(".debug-btn").click(function(){
	$('.debug-menu').toggleClass("active");
});

$(".reset-btn").click(function(){
	location.reload();
});



$('input[type=radio][name=typeface]').on('change', function(){
	
	$('body').removeClass("nanum");
	$('body').removeClass("rounded");
	$('body').removeClass("inconsolata");
	$('body').removeClass("assistant");
	$('body').removeClass("gothic");
	$('body').removeClass("barlow");
	$('body').removeClass("questrial");
	$('body').removeClass("montserrat");
	$('body').removeClass("music");
	$('body').removeClass("symbols");
	$('body').removeClass("scribbles");
	$('body').removeClass("yarndings");

	switch($(this).val()){
			case 'nanum' :
					$('body').addClass("nanum");
					break;
			case 'rounded' :
					$('body').addClass("rounded");
					break;
			case 'inconsolata' :
					$('body').addClass("inconsolata");
					break;
			case 'assistant' :
					$('body').addClass("assistant");
					break;
			case 'gothic' :
					$('body').addClass("gothic");
					break;
			case 'barlow' :
					$('body').addClass("barlow");
					break;
			case 'questrial' :
					$('body').addClass("questrial");
					break;
			case 'montserrat' :
					$('body').addClass("montserrat");
					break;
			case 'scribbles' :
					$('body').addClass("scribbles");
					break;
			case 'yarndings' :
					$('body').addClass("yarndings");
					break;
	}            
});


$(document).ready(function () {
	$(".word").each(function () {
			var randomtop = Math.floor(Math.random() * (- 3)),
					randomleft = Math.floor(Math.random() * (- 3))
			$(this).css({
					"top": randomtop,
					"left": randomleft
			});
	});

	$("img, .scatter").each(function () {
		var randomtop = Math.floor(Math.random() * ( 12)),
				randomleft = Math.floor(Math.random() * ( 12))
		$(this).css({
				"bottom": randomtop,
				"left": randomleft
		});
	});	
});

function moveDiv(myclass) {

	var maxLeft = $(window).width() - $(myclass).width();
	var maxTop = $(window).height() - $(myclass).height();
	var leftPos = Math.floor(Math.random() * (maxLeft + 1));
	var topPos = Math.floor(Math.random() * (maxTop + 1));

	$(myclass).css({ top: topPos, left: leftPos });

	console.log(myclass);
	
};

$(".scrap").each( function() {
  // var rNum = Math.round((Math.random() * 360) + 1);  
	var rNum = parseInt(Math.random()*359,0)>180?"+"+(Math.random()*359):"-"+(Math.random()*359);
	console.log(rNum);
  $(this).css( {   
    '-webkit-transform': 'rotate('+ rNum + 'deg)',
    '-moz-transform': 'rotate('+ rNum + 'deg)'  
  } );  
} );

// first move
moveDiv('.a');
moveDiv('.b');
moveDiv('.c');
moveDiv('.d');
moveDiv('.e');

moveDiv('.f');
moveDiv('.g');
moveDiv('.h');

// second move
moveDiv('.a');
moveDiv('.b');
moveDiv('.c');
moveDiv('.d');
moveDiv('.e');

moveDiv('.f');
moveDiv('.g');
moveDiv('.h');

// third staggered moves
setTimeout(function() {
	offset('.a');
}, 1000);

setTimeout(function() {
	offset('.b');
}, 6000);

setTimeout(function() {
	offset('.c');
}, 14000);

setTimeout(function() {
	offset('.d');
}, 26000);

setTimeout(function() {
	offset('.e');
}, 37000);

setTimeout(function() {
	offset('.f');
}, 2000);

setTimeout(function() {
	offset('.g');
}, 10000);

setTimeout(function() {
	offset('.h');
}, 18000);

function offset(myclass) {
	setInterval(function () {
		moveDiv(myclass);
	}, 40000);
}


// --- smooth scroll on clicking nav items
$('a').click(function(){
	$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
	}, 350);
	return false;
});