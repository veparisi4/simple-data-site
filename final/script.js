const dataUrl = "https://plain-plain-text.github.io/simple-data-site/favorite-songs.csv";

// d3.csv(`http://cors.io/?${dataUrl}`).then(function(songs) {
d3.csv(dataUrl).then(function(songs) {
  const app = new Vue({
    // This designates the el(ement) in which Vue will operate.
    // "#" is short hand for "the element with the id of…"
    el: "#main-container",
    // This designates the data Vue will send to our page. 
    // For example, it defines a "card" property/variable.
    data: {
      card: "card made by Vue!",
      songs: songs
    }
  }); 
});
