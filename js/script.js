



// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" w3-white", "");
//   }
//   x[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " w3-white";
// }








function posterFade(posterImage){
	$('#moviePoster').fadeOut(300, function(){
		$(this).html(posterImage).fadeIn(300);
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
		movieName("All the Money in the World","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_006.jpg'</img>");
	});
	$('#p7').on('click', function() {
		movieName("Pirates of the Caribbean","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_007.jpg'</img>");
	});
	$('#p8').on('click', function() {
		movieName("Ethan Hawke","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_008.jpg'</img>");
	});
	$('#p9').on('click', function() {
		movieName("Star Wars: Rogue One","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_009.jpg'</img>");
	});
	$('#p10').on('click', function() {
		movieName("Kill Bill","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_010.jpg'</img>");
	});
	$('#p11').on('click', function() {
		movieName("Divergent","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_011.jpg'</img>");
	});













	$('#sw-trailer-btn').on('click', function() {
		document.getElementById("bannerImageID").style.display = "none";
		document.getElementById("videoPlay").innerHTML = "<video id='sw-trailer'  width='100%' height='auto' autoplay controls> <source src='vid/vid.mp4' type='video/mp4'> Your browser does not support the video tag. </video>";
		var video = document.getElementById('sw-trailer');
		video.volume = 0.5;
	});








});
