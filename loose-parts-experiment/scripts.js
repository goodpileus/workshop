// var e = document.getElementById('words');

// e.innerHTML = e.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="word">$2</span>');

var words = document.getElementsByClassName("words");
for (var i = 0; i < words.length; i++) {
	var word = words[i];
	word.innerHTML = word.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="word">$2</span>');
}

$(".word").draggable({
	stack: '.word'
});

$("img").click(function(){
	$(this).toggleClass("large");
});

$(document).ready(function () {
	$(".word").each(function () {
			var randomtop = Math.floor(Math.random() * (- 2)),
					randomleft = Math.floor(Math.random() * (- 2))
			$(this).css({
					"top": randomtop,
					"left": randomleft
			});
	});

	$("img").each(function () {
		var randomtop = Math.floor(Math.random() * ( 12)),
				randomleft = Math.floor(Math.random() * ( 12))
		$(this).css({
				"top": randomtop,
				"left": randomleft
		});
});
});

$(".debug-btn").click(function(){
	$('.debug-menu').toggleClass("active");
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
	}            
});