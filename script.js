// Array of topics and new topics will be pushed here as well //
var topics = ["Gundam", "Star Wars", "Regular Show", "Deal With It", "Intensifies", "Transformers", "Power Rangers", "Pokemon", "Comics", "Video Games"];

// Function for making buttons for topics //
function renderButtons() {

    // Uses JQuery to delete or empty gifs out of the "gif-view" dive element in the DOM before making new ones in order to avoid repeat buttons //
    $("#buttons-view").empty();

    // For loop for running through the entire topics array //
    for (var i = 0; i < topics.length; i++) {
        
        var btn = $("<button>");  // Sets a variable and uses JQuery to create a button element in the DOM for each value in the loop //
        btn.addClass("gif-btn");  // Adds a class to the "button" elements //
        btn.attr("data-name", topics[i]);  // Assigns the attribute of the topics array values to each button created in the loop //
        btn.text(topics[i]);  // Assigns text to the buttons created in the loop //
        $("#buttons-view").append(btn);  // Uses JQuery to append each button created in the loop to the "gift-view" div element in the DOM //
    }
}

// Function to add a new button //
function addNewButton() {
    
}
























// Function to render in the HTML the new content //
function showGifs() {
    var gif = $(this).attr("data-name");  // Sets a variable where "this" refers to the window and assigns the data from the topics array used in the AJAX call //
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=XpskAUNFvqoc7Eng4J1vDoNVut6RD6vo&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
      
    });















}