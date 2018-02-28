$( document ).ready(function() { // COMPLETELY CRITICAL TO GET BUTTONS TO POPULATE WHEN PAGE LOADS // 
   
    // Array of topics and new topics will be pushed here as well //
        var topics = ["Gundam", "Star Wars", "Regular Show", "Deal With It", "Intensifies", "Transformers", "Power Rangers", "Pokemon", "Comics", "Video Games"];
        
        // Function for making buttons for topics //
        function displayGifButtons(){
            
            // Uses JQuery to delete or empty buttons out of the "buttons-view" div element in the DOM before making new ones in order to avoid repeat buttons //
            $("#gifButtonsView").empty(); 
            
            // For loop for running through the entire topics array //
            for (var i = 0; i < topics.length; i++){
                
                var gifButton = $("<button>");  // Sets a variable and uses JQuery to create a button element in the DOM for each value in the loop //
                gifButton.addClass("action");  // Adds a class to the "button" elements //
                gifButton.addClass("btn btn-primary")  // Adds a class to the "button" elements //
                gifButton.attr("data-name", topics[i]);  // Assigns the attribute of the topics array values to each button created in the loop //
                gifButton.text(topics[i]);   // Assigns text to the buttons created in the loop //
                $("#gifButtonsView").append(gifButton);  // Uses JQuery to append each button created in the loop to the "gift-view" div element in the DOM //
            }
        }
        // Function to add a new topic button //
        function addNewButton(){
            $("#addGif").on("click", function(){
            var newTopic = $("#topic-input").val().trim();
            if (newTopic == ""){
              return false; // Added so user cannot add a blank button. If button is not blank, the function continues //
            }
            topics.push(newTopic);
        
            displayGifButtons();
            return false;
            });
        }
        // Function to remove last topic button
        function removeLastButton(){
            $("removeGif").on("click", function(){
            topics.pop(newTopic);  // Dedfinitely had to look this up //
            displayGifButtons();
            return false;
            });
        }
        // Function to show gifs //
        function displayGifs(){
            var gifs = $(this).attr("data-name");  // Sets a variable where "this" refers to the window and assigns the data from the topics array used in the AJAX call //
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifs + "&api_key=XpskAUNFvqoc7Eng4J1vDoNVut6RD6vo&limit=10";
            
            $.ajax({  // Make the AJAX call to the queryURL //
                url: queryURL,
                method: 'GET'
            })
            .then(function(response) {  // After call is made, run this function to populate the gifs //
                $("#gifsView").empty(); // Uses JQuery to delete or empty gifs out of the "gifs-view" div element in the DOM before making new ones in order to avoid repeat gifs //
                var results = response.data;  // Shows gif results //
                
                // For loop for running through the results of the topics //    
                for (var i=0; i<results.length; i++){
        
                    var gifDiv = $("<div>"); // Sets a variable and uses JQuery to create a div element in the DOM to contain the results of each value in the loop // 
                    gifDiv.addClass("gifDiv");  // Adds "gifDiv" class to the gifDiv variable //
                    
                    var gifRating = $("<p>").text("Rating: " + results[i].rating);  // Sets a variable and uses JQuery to create a paragraph element in the DOM for each gif returned from the results //
                    gifDiv.append(gifRating);  // Appends the value of the gifRating variable to the gifDiv variable //
                   
                    var gifImage = $("<img>");   // Sets a variable and uses JQuery to create an image element in the DOM to contain the images of the gifs // 
                    gifImage.attr("src", results[i].images.fixed_height_small_still.url); // Grabs still image from the resuts object and adds it to the gifImage variable //
                    gifImage.attr("data-still",results[i].images.fixed_height_small_still.url); // Grabs still image from the resuts object and adds the data to the gifImage variable //
                    gifImage.attr("data-animate",results[i].images.fixed_height_small.url); // Grabs animated image from the resuts object and adds the data to the gifImage variable //
                    gifImage.attr("data-state", "still"); // Sets the image state of the gifImage variable //
                    gifImage.addClass("image");  // Adds the "image" class to the gifImage variable //
                    gifDiv.append(gifImage);  // Pulls the still image of the gifs //
                    
                    $("#gifsView").prepend(gifDiv);  // Adds the div of gifs to gifsView div //
                }
            });
        }
        
        // REMEMBER TO CALL FUNCTIONS AFTER DEFINING THEM //
        displayGifButtons();
        addNewButton();
        removeLastButton();
        
        // On Click listeners for gif still and animation states //
        $(document).on("click", ".action", displayGifs);
        $(document).on("click", ".image", function(){
            var state = $(this).attr('data-state');
            if ( state == 'still'){
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            }else{
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            }
        });
        });