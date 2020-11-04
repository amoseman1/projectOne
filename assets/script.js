$(document).ready(function(){
  var randomREl = document.getElementById("#randomR");
  var recipeEl = document.getElementById("#recipeChoice");   
  var musicEl = document.getElementById("#musicChoice");
  
  $("#randomR").on("click", callFunction);
  
  function callFunction() {
    console.log("inside callFunction");
    getRandomMusic();
    getRecipeRepos();
  }

  function getRecipeRepos() {
  console.log('inside getRecipeRepos')
    var requestUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
     var randomEl = $("<div>").text("Title: " + data.meals[0].strMeal + " Recipe: " + data.meals[0].strInstructions);
        $("#recipeChoice").append(randomEl);
        var recipeImg = $("<img>").attr("src", data.meals[0].strMealThumb);
        var recipeSrc = $("<a>").text("" + data.meals[0].strMeal).attr("href", data.meals[0].strSource);
        //targeting a new page with link
        // recipeSrc.attr(target="_blank");
        $("#recipePic").append(recipeImg);
        $("#recipeLink").append(recipeSrc);
      
   }) //add category and ingredients to .then 

  }

//var songArry = ["lose yourself", "other song"]
//function getsRandomSong() {s
  // get a random song title from Song array

  //then call call getRandomMusic("Lose Yourself")

function getRandomMusic() {
fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "748a15681fmshbba4031511d91cep19839fjsnbcb11ed54479"
}})
.then(response => {
  return response.json()
})
.then(function(data) {
  console.log(data)
  for (i = 0; i <  data.length; i++){
  var randomMusicEl = $("<div>").text("Your song: " + data[i].artist.name + " " + data[i].link);
  $("#musicChoice").append(randomMusicEl);
}
})


//music button appending
// var musicList = ["https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", "https://deezerdevs-deezer.p.rapidapi.com/search?q=shakira", "https://deezerdevs-deezer.p.rapidapi.com/search?q=jurrasicfive"];
// for (var i = 0; i< musicList.length; i++) {
//   var artistList = musicList[i];
//   console.log(musicList[i]);
//   artistList.text(musicList[i]);
//   $("#musicButton").append(artistList);
// }

//try catch then error if it does not hit the api
// .catch(err => {
// 	console.log(err);

      // var randomMusicEl = $("<div>").text("Your song: " + data[0].artist.name + " " + data[0].link);
      // $("musicChoice").append(randomMusicEl);
    // });
  }

  });

 

