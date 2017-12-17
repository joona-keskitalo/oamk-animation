function posterFade(posterImage){
	$('#moviePoster').fadeOut(250, function(){
		$(this).html(posterImage).fadeIn(250);
	})
}
function movieName(movie, studio, released, length, rating, desc){
	$('#movieName').html(movie);
	$('#movieStudio').html(studio);
	$('#movieReleased').html(released);
	$('#movieLength').html(length);
	$('#movieRating').html(rating);
	$('#movieDescription').html(desc);
}
// function movieReleased(movie){
// 	$('#movieName').html(movie);
// }
$(document).ready(function() {
	$('#p1').on('click', function() {
		movieName("Alien","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_001.jpg'</img>");
	});
	$('#p2').on('click', function() {
		movieName("Aftermath","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_002.jpg'</img>");
	});
	$('#p3').on('click', function() {
		movieName("Baby Driver","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_003.jpg'</img>");
	});
	$('#p4').on('click', function() {
		movieName("Guardians of the Galaxy Vol. 2","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_004.jpg'</img>");
	});
	$('#p5').on('click', function() {
		movieName("Moonlight","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_005.jpg'</img>");
	});
	$('#p6').on('click', function() {
		movieName("NAME","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_005.jpg'</img>");
	});
	$('#p7').on('click', function() {
		movieName("NAME","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_005.jpg'</img>");
	});
	$('#p8').on('click', function() {
		movieName("NAME","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_005.jpg'</img>");
	});
	$('#p9').on('click', function() {
		movieName("NAME","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_005.jpg'</img>");
	});
	$('#p10').on('click', function() {
		movieName("NAME","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_005.jpg'</img>");
	});










$(".popup").click(function () {
    var $this = $(this);
    var $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width": 400, "height": 300});
    var $title = $("<h1>").text($this.data("title"));
    $("#video-view").html($title).append($iframe);
    $iframe.wrap("<div class='class-video'>");
});





// var wrap = $("#wrap");

// wrap.on("scroll", function(e) {

//   if (this.scrollTop > 147) {
//     wrap.addClass("fix-search");
//   } else {
//     wrap.removeClass("fix-search");
//   }

// });

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
        $('#sticky-anchor').height($('#sticky').outerHeight());
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-anchor').height(0);
    }
}

// $(function() {
//     $(window).scroll(sticky_relocate);
//     sticky_relocate();
// });

// var dir = 1;
// var MIN_TOP = 200;
// var MAX_TOP = 350;

// function autoscroll() {
//     var window_top = $(window).scrollTop() + dir;
//     if (window_top >= MAX_TOP) {
//         window_top = MAX_TOP;
//         dir = -1;
//     } else if (window_top <= MIN_TOP) {
//         window_top = MIN_TOP;
//         dir = 1;
//     }
//     $(window).scrollTop(window_top);
//     window.setTimeout(autoscroll, 100);
// }























});