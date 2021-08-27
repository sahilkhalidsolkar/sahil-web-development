// fetch("https://theaudiodb.p.rapidapi.com/mvid.php?i=112024", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "c4b84efa04mshdcf57e319b33bd5p122c2fjsn9fb91f4ed22a",
// 		"x-rapidapi-host": "theaudiodb.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
// 
fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c4b84efa04mshdcf57e319b33bd5p122c2fjsn9fb91f4ed22a",
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});