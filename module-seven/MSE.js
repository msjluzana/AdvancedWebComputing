$(function(){

	
	$("<h1>Movie Sneak Peek</h1>", {
   rel: "stylesheet",
   type: "text/css",
   href: "/styles/mse.css"
}).appendTo("body");


	$('body').append('<input type="text" id="search_input" class="search_input" maxlength="40">');

	$('body').append('<input type="button" id="search_button" value="Search">');	
	

	var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';



	$('#search_button').click(
		function(){
		$.ajax({
			url: server,
			dataType: 'jsonp',
			data: {
				q:$('#search_input').val(),
				apiKey: 'qryeuuwpseykp2res3n89mv9'
			},
			success: showMovies
		})

		$(this).css(
			{"margin-left":"5px",
			"height":"40px",
			"width":"70px",
			"background-color":"blue"
		});
		
	});

	function showMovies(response){
		console.log('response', response);	
		var movies = response.movies;
		for (var i = 0; i < movies.length; i++) {
			
			
			 	$("<h2>"+ movies[i].title+"</h2>", {
  				 rel: "stylesheet",
  				 type: "text/css",
  				 href: "/styles/mse.css"
				}).appendTo("body");



		

			 	$("<h3>"+ "(" + movies[i].year + ")"  +"</h3>"+ "</br>", {
  				 rel: "stylesheet",
  				 type: "text/css",
  				 href: "/styles/mse.css"
				}).appendTo("body");


				$("<h4>"+ '<img class="box" src="' + movies[i].posters.thumbnail + '"/>'  +"</h4>"+ "</br>", {
  				 rel: "stylesheet",
  				 type: "text/css",
  				 href: "/styles/mse.css"
				}).appendTo("body");

		

				 if(movies[i].synopsis == '')

				$("<h5>"+ "No Synopsis Available" +"</h5>"+ "</br>", {
  				 rel: "stylesheet",
  				 type: "text/css",
  				 href: "/styles/mse.css"
				}).appendTo("body");

				else

				$("<h5>"+ "Synopsis: " +"</br>"+"</br>"+ movies[i].synopsis +"</h5>"+ "</br>", {
  				 rel: "stylesheet",
  				 type: "text/css",
  				 href: "/styles/mse.css"
				}).appendTo("body");


				 

		};

	}
		
});