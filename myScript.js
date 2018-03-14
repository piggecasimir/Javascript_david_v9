let movieData = require("./data");
var $ = require("jquery");
renderMovie(movieData);
function renderMovie(movieData) {
    document.getElementById("bildFilm").setAttribute("src", movieData.imageUrl);
    document.getElementById("titel").innerText = movieData.title;
    document.getElementById("description").innerText = movieData.text;

    let actors = movieData.listnames.split("%");
    actors.forEach(element => {
        let hej = document.createElement("li");
        hej.innerText = element;
        document.getElementById("listActors").appendChild(hej);
    });
    let i = 1;
    movieData.stars.forEach(element => {

        let stars = document.createElement("td");
        stars.setAttribute("Value", i);
        stars.classList.add("stars");
        stars.innerText = element;
        document.getElementById("stars").appendChild(stars);
        i++;

    });


};

let savedRating = 0;
console.log("")
$("#realstars").on("click", ".stars", function () {

    let rating = Number(this.getAttribute("Value"));
    savedRating = rating;
    document.getElementById("stars").innerHTML = "";
    for (let index = 0; index < rating; index++) {

        let stars = document.createElement("td");
        stars.setAttribute("Value", index + 1);
        stars.classList.add("stars");
        stars.classList.add("starsyellow");
        stars.innerText = "★";

        document.getElementById("stars").appendChild(stars);
    }
    for (let index = rating; index < 5; index++) {

        let stars = document.createElement("td");
        stars.setAttribute("Value", index + 1);
        stars.classList.add("stars");
        stars.classList.add("starsBlack");
        stars.innerText = "★";
        document.getElementById("stars").appendChild(stars);
    }

});

$("#realstars").on("mouseleave", ".stars", function () {

    let rating = savedRating;
    $("#stars").html("");
    for (let index = 0; index < rating; index++) {

        let stars = document.createElement("td");
        stars.setAttribute("Value", index + 1);
        stars.classList.add("stars");
        stars.classList.add("starsyellow");
        stars.innerText = "★";

        document.getElementById("stars").appendChild(stars);
    }
    for (let index = rating; index < 5; index++) {

        let stars = document.createElement("td");
        stars.setAttribute("Value", index + 1);
        stars.classList.add("stars");
        stars.classList.add("starsBlack");
        stars.innerText = "★";
        document.getElementById("stars").appendChild(stars);
    }
});

$("#realstars").on("mouseenter", ".stars", function () {
    let rating = Number(this.getAttribute("Value"));
    let allTds = $(".stars");
    for (let index = 0; index < rating; index++) {

        allTds[index].removeClass("starsBlack");
        allTds[index].addClass("starsyellow");
    }
    for (let index = rating; index < 5; index++) {

        allTds[index].removeClass("starsyellow");
        allTds[index].addClass("starsBlack");
    }

});


console.log("plz");
