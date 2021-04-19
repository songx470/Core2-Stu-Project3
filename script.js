var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keyIHtpPY0omZcC9J" }).base(
  "appu6pQmnIFhS0jVz"
);

base("Collection")
  .select({})
  .eachPage(gotPageOfPerfumes, gotAllPerfumes);

var perfumes = [];

function gotPageOfPerfumes(records, fetchNextPage) {
  console.log("gotPageOfPerfumes()");
  perfumes.push(...records);
  fetchNextPage();
}

function gotAllPerfumes(err) {
  console.log("gotAllPerfumes()");

  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }



  showPerfumes();
}

function consoleLogPerfumes() {
  console.log("consoleLogPerfumes()");
  perfumes.forEach(perfume => {
    console.log("Perfumes:", perfume);
  });
}
var index = 0;






var perfumeLink = document.createElement("a");
perfumeLink.classList.add("perfume-name");
perfumeLink.href = perfume.fields["More Info."];
perfumeLink.target = "_blank";
perfumeLink.rel = "noreferrer nofollow";
perfumeLink.textContent = perfume.fields.name;
perfumeDropdowncontent.append(perfumeImage, perfumeLink);







function showPerfumes() {
  console.log("showPerfumes()");
  perfumes.forEach(perfume => {

    const dropdown = document.getElementById("dropdowncontent");
    console.log(dropdown);

     var img = document.createElement("img");
    img.src = perfume.fields.image[0].url;
    console.log(img);
    dropdown.append(img);

    var div = document.createElement("div");
    div.innerText = perfume.fields.name;
    console.log(div);
    dropdown.append(div);






    var perfumeContainer = document.createElement("div");
    perfumeContainer.classList.add("perfume-container");
    document.querySelector(".containerInner").append(perfumeContainer);

    var perfumeImage = document.createElement("img");
    perfumeImage.classList.add("perfume-image");
    perfumeImage.src = perfume.fields.image[0].url;
    perfumeContainer.append(perfumeImage);


     var perfumeFog = document.createElement("img");
    perfumeFog.classList.add("perfume-fog");
    perfumeFog.src = perfume.fields.fog[0].url;
    perfumeContainer.append(perfumeFog);

    var perfumeName = document.createElement("h1");
    perfumeName.classList.add("perfume-name");
    perfumeName.innerText = perfume.fields.name;
    perfumeContainer.append(perfumeName);

    perfumeContainer.setAttribute('bottle-img',perfume.fields.bottle[0].url); 
    perfumeContainer.setAttribute('scent-h1',perfume.fields.scent); 






    var perfumeGenre = perfume.fields.genre;

    var filterPop = document.querySelector(".pop");
    filterPop.addEventListener("click", function() {
      if (songContainer.classList.contains("pop")) {
        songContainer.style.background = "red";
      } else {
        songContainer.style.background = "white";
      }
    });

    var filterIndie = document.querySelector(".indie");
    filterIndie.addEventListener("click", function() {
      if (soapContainer.classList.contains("indie")) {
        soapContainer.style.background = "red";
      } else {
        soapContainer.style.background = "white";
      }
    });
    
    var filterShoegaze = document.querySelector(".shoegaze");
    filterShoegaze.addEventListener("click", function() {
      if (songContainer.classList.contains("shoegaze")) {
        songContainer.style.background = "red";
      } else {
        songContainer.style.background = "white";
      }
    });

    var filterReset = document.querySelector(".js-reset");
    filterReset.addEventListener("click", function() {
      soapContainer.style.background = "white";
    });
  });






  showCur();
}
function prev(){
  index--;
  showCur();
}
function next(){
  index++;
  showCur();
}
function showCur(){
  document.querySelector(".containerInner").style.left = index*-832+"px";
  var bottleimg = document.getElementsByClassName("perfume-container")[index].getAttribute("bottle-img");
  document.querySelector(".animationbox").style.background = "url("+bottleimg+") no-repeat";
  document.querySelector(".animationbox").style.backgroundSize = "contain";
    var scenth1 = document.getElementsByClassName("perfume-container")[index].getAttribute("scent-h1");
  document.querySelector(".animationbox").style.background = "url("+scenth1+") no-repeat";
  document.querySelector(".animationbox").style.backgroundSize = "contain";
}

