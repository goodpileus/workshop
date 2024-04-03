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

	$("img, h2 .word").each(function () {
		var randomtop = Math.floor(Math.random() * ( 15)),
				randomleft = Math.floor(Math.random() * ( 15))
		$(this).css({
				"top": randomtop,
				"left": randomleft
		});
});
});