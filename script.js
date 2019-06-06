
const dataUrl = "https://plain-plain-text.github.io/simple-data-site/favorite-songs.csv";
d3.csv(dataUrl).then(function(songs) {
  // print the value of the songs parameter
  console.log(songs);
  const app = new Vue({
    el: "#main-container",
    data: {
      card: "card made by Vue!",
      songs: songs
    }
  });
});
