$(function(){
  $(".main__center__poster").on("click", function(){
    function movieRandom(){
      var x = 10000 + Math.floor(Math.random()*(512200 + 1 - 10000 ))
      var url ="https://api.themoviedb.org/3/movie/xxxxxxx?api_key=db926ca771f371cb7a61522df8e0f05e&language=ja&page=1"
      var urls = url.replace(/xxxxxx/, x)
    
      fetch(urls)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        $(".main__center__name").empty().append(data.original_title);
        var pos = "https://image.tmdb.org/t/p/w300/xxxxxx"
        var pospos = pos.replace(/xxxxxx/, data.poster_path);
        $("img").attr('src', pospos);
        if(data.status_code === 34 || data.adult === true || data.release_date === "" || original_language === "en" || original_language === "ja"){
          console.log("ここにきたらリロードさせる処理をしたい")
          movieRandom();
        }else{
        }
      })
      .catch(error => {
        console.log('error');
      });
    }

    movieRandom();
    
  });
});



// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
// Jack Reacherのsearchするにはこのリクエストを出すといくつかの結果が返ってくる
// statuscodeがが34である以上繰り返す。



// status_codeが=34の場合はループ。status_codeが存在しない場合はbreak

// 画像がnullの場合はreload
// 
// 
// 