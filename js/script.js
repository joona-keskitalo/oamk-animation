	function showOverlay() {
		document.getElementsByClassName('bookingPanelLeft')[0].style.display = "block"
		document.getElementsByClassName('bookingPanelRight')[0].style.display = "block"
	}
	function hideOverlay() {
		document.getElementsByClassName('bookingPanelLeft')[0].style.display = "none"
		document.getElementsByClassName('bookingPanelRight')[0].style.display = "none"
	}
	function posterFade(posterImage){
		$('.moviePoster').fadeOut(250, function(){
			$(this).html(posterImage).fadeIn(250);
		})
	}
	function movieName(movie, studio, released, length, rating, desc){
		$('.movieName').html(movie);
		$('.movieStudio').html(studio);
		$('.movieReleased').html(released);
		$('.movieLength').html(length);
		$('.movieRating').html(rating);
		$('.movieDescription').html(desc);
	}
// Change posters & movie info
$(document).ready(function() {
	$('#p1').on('click', function() {
		$('#posters').data("poster") // will return the number 123
		movieName("Alien","20th Century Fox","1979", "1h 57 min", "8.5", "Alien is a 1979 science-fiction horror film directed by Ridley Scott, and starring Sigourney Weaver, Tom Skerritt, Veronica Cartwright, Harry Dean Stanton, John Hurt, Ian Holm and Yaphet Kotto.");
		posterFade("<img src='img/poster_001.jpg'</img>");
	});
	$('#p2').on('click', function() {
		movieName("Aftermath","Lionsgate","2017", "92 minutes", "5.7", "Aftermath (originally titled 478) is a 2017 American drama thriller film directed by Elliott Lester and written by Javier Gullón. The film stars Arnold Schwarzenegger, Scoot McNairy, Maggie Grace and Martin Donovan.");
		posterFade("<img src='img/poster_002.jpg'</img>");
	});
	$('#p3').on('click', function() {
		movieName("Baby Driver","TriStar Pictures & Sony","2017", "1h 53min", "7.8", "Talented getaway driver Baby (Ansel Elgort) relies on the beat of his personal soundtrack to be the best in the game. After meeting the woman (Lily James) of his dreams, he sees a chance to ditch his shady lifestyle and make a clean break. ");
		posterFade("<img src='img/poster_003.jpg'</img>");
	});
	$('#p4').on('click', function() {
		movieName("Guardians of the Galaxy Vol. 2","Marvel Studios","2017", "2h 18min", "7.8", "Peter Quill and his fellow Guardians are hired by a powerful alien race, the Sovereign, to protect their precious batteries from invaders. When it is discovered that Rocket has stolen the items they were sent to guard, the Sovereign dispatch their armada to search for vengeance.");
		posterFade("<img src='img/poster_004.jpg'</img>");
	});
	$('#p5').on('click', function() {
		movieName("Moonlight","A24","2016", "1h 55m", "7.5", "A look at three defining chapters in the life of Chiron, a young black man growing up in Miami. His epic journey to manhood is guided by the kindness, support and love of the community that helps raise him.");
		posterFade("<img src='img/poster_005.jpg'</img>");
	});
	$('#p6').on('click', function() {
		movieName("All the Money in the World","STUDIO","2017", "132 min", "NA", "ALL THE MONEY IN THE WORLD follows the kidnapping of 16-year-old John Paul Getty III (Charlie Plummer) and the desperate attempt by his devoted mother Gail (Michelle Williams) to convince his billionaire grandfather (Christopher Plummer) to pay the ransom.");
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
	$('#p12').on('click', function() {
		movieName("Star Wars: The Empire Strikes Back","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_012.jpg'</img>");
	});
	$('#p13').on('click', function() {
		movieName("Star Wars: Episode VIII - The Last Jedi","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_013.jpg'</img>");
	});
	$('#p14').on('click', function() {
		movieName("Star Wars: The Force Awakens","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_014.jpg'</img>");
	});
	$('#p15').on('click', function() {
		movieName("Star Wars: Return of the Jedi","STUDIO","releaseYEAR", "LENGTH", "RATING", "DESC");
		posterFade("<img src='img/poster_015.jpg'</img>");
	});
	// Hide the div overlaying the trailer
	$('#sw-trailer-btn').on('click', function() {
		document.getElementById("bannerImageID").style.display = "none";
		document.getElementById("videoPlay").innerHTML = "<video id='sw-trailer'  width='100%' height='auto' autoplay controls> <source src='vid/vid.mp4' type='video/mp4'> Your browser does not support the video tag. </video>";
		var video = document.getElementById('sw-trailer');
		video.volume = 0.5;
	});
	// Booking system
	var wrapper = document.getElementById('bookingWrapper');
	var form = document.getElementById('form');
	var theatre = {
		numberOfSeats: 50
	}
	function createSeats(){
		for (var i = 1; i < theatre.numberOfSeats+1; i++){
			var element = document.createElement('div');
			element.id = "seat_"+i;
			element.className= 'available';
			element.innerHTML = i;
			element.addEventListener('click', showForm);
			wrapper.appendChild(element);
		}
	};
	createSeats();
	function showForm(id){
		var picked = document.getElementById('picked_seat');
		form.style.display = "block";
		var currentSeat = document.getElementById('current_seat');
		currentSeat.value = this.id;
		picked.innerText = "You have chosen to reserve seat " + this.id.substr(5,6);
	};
	var formButton = document.getElementById('formButton');
	formButton.addEventListener('click', getFormData);
	function getFormData(formName, formEmail, formSeat) {
		var formName = document.getElementById('form_name');
		var formEmail = document.getElementById('form_email');
		var formSeat = document.getElementById('current_seat');
		var reservationName = formName.value;
		var reservationEmail = formEmail.value;
		var reservationSeat = formSeat.value;
		document.getElementById(reservationSeat).className="unavailable";
		appendFormData(reservationName, reservationEmail, reservationSeat);
		formName.value = "";
		formEmail.value = "";
	};
	function appendFormData(name,email,seat){
		form.style.display = "none";
		var appendSeat = document.getElementById(seat);
		var newElement = document.createElement('div');
		newElement.className = "reservation";
		document.getElementById(seat).appendChild(newElement);
		newElement.innerHTML= '<span class="smallTxt">Reserved for</span><br><h4>' + name + '</h4>';
	};
});
