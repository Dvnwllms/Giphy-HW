// Function to show gifs //
function showGifs() {
    var gif = $(this).attr("data-name");  // Sets a variable where "this" refers to the window and assigns the data from the topics array used in the AJAX call //
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=XpskAUNFvqoc7Eng4J1vDoNVut6RD6vo&limit=10"

    $.ajax({ // Make the AJAX call to the queryURL //
        url: queryURL,
        method: "GET"
      
        }).then(function(response) { // After call is made, run this function to populate the gifs //
          console.log(response);
        $("#gifs-view").empty(); // Uses JQuery to delete or empty gifs out of the "gifs-view" div element in the DOM before making new ones in order to avoid repeat gifs //
        var results = response.data(); // Shows gif results //
    });

    // For loop for running through the results of the topics //    
    for (var i = 0; i < results.length; i++) {
        
        var gifDiv = $("<div>"); // Sets a variable and uses JQuery to create a div element in the DOM to contain the results of each value in the loop // 
        var gifRating = $("<p>"); // Sets a variable and uses JQuery to create a paragraph element in the DOM for each gif returned from the results //
        gifdiv.append(gifRating); // Appends the value of the gifRating variable to the gifDiv variable //
        var gifImage = $("<img>")  // Sets a variable and uses JQuery to create an image element in the DOM to contain the images of the gifs // 
        gifImage.attr("src", results[i].images.fixed_height_small_still.url);  // Grabs still image from the resuts object and adds it to the gifImage variable //


    }

}
