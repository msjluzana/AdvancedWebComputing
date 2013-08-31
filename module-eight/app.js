$(function() {

	$('body').append('<h1>Movies</h1>');
	var server='http://api.rottentomatoes.com/api/public/v1.0/movies.json';
	
	function search(movie_name){
	$.ajax({
		url: server,
		dataType:'jsonp',
		data:{
			q: movie_name,
			apiKey: 'qryeuuwpseykp2res3n89mv9'
		},
		success: showMovies

	});
}

		function showMovies(response) {
		console.log('response', response);
		var movies = response.movies;
		for (var i=0; i<movies.length; i++) {
			var movie = movies[i];
			$('body').append('<h3>' + movie.title + '</h3>');
		    $('body').append('<img src="' + movie.posters.thumbnail + '" />');
			$('body').append('<h4>' + movie.posters.ratings + '</h4>');
		    
		}
}
	

search('batman');

