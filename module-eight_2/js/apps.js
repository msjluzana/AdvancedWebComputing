$(function(){

  $('#box-search').keypress(function(){
    $('#box-search').attr({ placeholder: ""});
  });
  
  var app = {};
  var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
  var server_boxoffice = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json';
  var server_intheater = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
  var server_upcomingmovies = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json';
  var input = $('#box-search').val();

     $('#btn-submit').click(function(){
        $.ajax({
            url: server,
            dataType: 'jsonp',
            data: {
                q: $('#box-search').val(),
                apiKey: 'qryeuuwpseykp2res3n89mv9',
            },
            success: showMovies
        });

    });

     $('#box-office').click(function(){
      $.ajax({
            url: server_boxoffice,
            dataType: 'jsonp',
            data: {
                apiKey: 'qryeuuwpseykp2res3n89mv9',
            },
            success: showMovies
        });

    });    
    

    $('#in_theater').click(function(){
      $.ajax({
            url: server_intheater,
            dataType: 'jsonp',
            data: {
                apiKey: 'qryeuuwpseykp2res3n89mv9',
            },
            success: showMovies
        });

    });    


    $('#upcoming_movies').click(function(){
      $.ajax({
            url: server_upcomingmovies,
            dataType: 'jsonp',
            data: {
                apiKey: 'qryeuuwpseykp2res3n89mv9',
            },
            success: showMovies
        });

    });    
    
    
     function getTemplate(template_name, data) {
        var markup = "";
        var template = $('#' + template_name).html();
        var $template = Handlebars.compile(template);
        markup = $template(data);
        return markup;
    }

     function showMovies(response) {
      console.log('response', response);
      var movies = response.movies;
      var input = $('#box-search').val();
      $('.result').html('');
      $('.result').height('absolute');
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
               $('.result').append(getTemplate('tpl-movie', movie));
        }  
    }

 });



         