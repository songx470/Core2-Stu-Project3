// console.log("Is our script file working?");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
// console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyIHtpPY0omZcC9J" }).base(
  "appu6pQmnIFhS0jVz"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("Collection")
  .select({})
  .eachPage(gotPageOfPerfumes, gotAllPerfumes);

// an empty array to hold our data
var perfumes = [];

// callback function that receives our data
function gotPageOfPerfumes(records, fetchNextPage) {
  console.log("gotPageOfPerfumes()");
  // add the records from this page to our array
  perfumes.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllPerfumes(err) {
  console.log("gotAllPerfumes()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogPerfumes();
  showPerfumes();
}

// just loop through the books and console.log them
function consoleLogPerfumes() {
  console.log("consoleLogPerfumes()");
  perfumes.forEach(perfume => {
    console.log("Perfumes:", perfume);
  });
}

// look through our airtable data, create elements
function showPerfumes() {
  console.log("showPerfumes()");
  perfumes.forEach(perfume => {

    
    // create container for each song
    var perfumeContainer = document.createElement("div");
    perfumeContainer.classList.add("perfume-container");
    document.querySelector(".container").append(perfumeContainer);

    var perfumeImage = document.createElement("img");
    perfumeImage.classList.add("perfume-image");
    perfumeImage.src = perfume.fields.image[0].url;
    perfumeContainer.append(perfumeImage);

    // add song titles
    var perfumeName = document.createElement("h1");
    perfumeName.classList.add("perfume-name");
    perfumeName.innerText = perfume.fields.name;
    perfumeContainer.append(perfumeName);

    // add event listener to add active class to song container
    perfumeContainer.addEventListener("click", function(event) {
      perfumeImage.classList.toggle("active");
      perfumeScent.classList.toggle("active");
    });

    // get genre field from airtable
    // loop through the array and add each genre as
    // a class to the song container

    var perfumeGenre = perfume.fields.genre;

    // clicking on filter by pop
    // change background of pop genres to red
    // else change to white
    var filterPop = document.querySelector(".pop");
    filterPop.addEventListener("click", function() {
      if (songContainer.classList.contains("pop")) {
        songContainer.style.background = "red";
      } else {
        songContainer.style.background = "white";
      }
    });

    // filter by indie music
    var filterIndie = document.querySelector(".indie");
    filterIndie.addEventListener("click", function() {
      if (soapContainer.classList.contains("indie")) {
        soapContainer.style.background = "red";
      } else {
        soapContainer.style.background = "white";
      }
    });
    
    // filter by shoegaze music
    var filterShoegaze = document.querySelector(".shoegaze");
    filterShoegaze.addEventListener("click", function() {
      if (songContainer.classList.contains("shoegaze")) {
        songContainer.style.background = "red";
      } else {
        songContainer.style.background = "white";
      }
    });

    // filter reset
    var filterReset = document.querySelector(".js-reset");
    filterReset.addEventListener("click", function() {
      soapContainer.style.background = "white";
    });
  });
}


