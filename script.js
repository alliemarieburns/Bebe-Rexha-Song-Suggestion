var songTitles = [
  "I'm a Mess",
  "Meant To Be",
  "Take Me Home",
  "Harder",
  "I Got You",
  "In The Name of Love",
  "Small Doses",
  "Gone",
  "Atmosphere",
  "Last Hurrah",
  "Sad",
  "Grace",
  "Ferrari",
  "That's It",
  "Call You Mine",
  "Steady",
  "Self Control",
  "No Broken Hearts",
  "Girls",
  "Don't Get Any Closer",
  "Say My Name",
  "Love Don't Live Here Anymore",
  "Me, Myself & I"
];

document.getElementById("button").addEventListener("click", () => {
  var songSuggestion =
    songTitles[Math.floor(Math.random() * songTitles.length)];
  document.getElementById("randomSong").innerHTML = songSuggestion;
});
