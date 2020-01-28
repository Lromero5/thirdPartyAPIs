//This displays current date
var todayIs = moment().format('MMMM Do YYYY, h:mm a');
console.log(todayIs);

//Current date being displayed at the top of the page.
$("#currentDay").text(todayIs);

//this is a test to see what moment().hours() does
console.log("moment", moment().hours());


//This four loop creates the elements on the page
for (var i = 9; i < 18; i++){
    //p variable creates a <p> element will hold the time
    var p = $("<p>").text(i + ":00am  ");
    //this if statement will change the time from military time to standard time
    //standard business hours should be 9 a.m. to 5 p.m.  
        if (i > 12){
            p.text(i - 12 + ":00pm  ");
        }
        //this adds a class to the p element
        p.addClass("hour");

    //this variable will create a text area where users can input data.
    var textbox = $("<textarea>");
    //this will give each of the textarea elements the id of input, plus what number it is on.
    textbox.attr("id", "input"+i);
    textbox.attr("class", "description");

    //this will create a button on the page, and attach attributes
    var button = $("<button>").text("click to save");
    button.attr("name", i)
    button.attr("class", "saveBtn");
    
    //this creates a div on the page
    var divE = $("<div>").append(p, textbox, button);
    divE.addClass("time-block");
   
    //this statement will log and assign classes to past, future, and present
    //The classes assigned will color code to reflect whether the time slot is in the past, the present, or the future. This will change depending on the time of day.

    if ( i > moment().hours()){
      console.log("future event", i);
       divE.attr("class", "future")
    } else if ( i < moment().hours()){
      console.log("this is past event", i);
      divE.attr("class", "past")
    } else if (i == moment().hours()){
      console.log("current", i);
     divE.attr("class", "present")
     }
    //this will append it all to the page
    $(".container").append(divE);
}


//this is the on click event for the saveBtn 
$(document).on("click", ".saveBtn", function(){
    //console log to see if it works 
   console.log("you got clicked", $(this).attr("name"));
   
   //creates variale for what is typed in the text area
   var input = $("#input" + $(this).attr("name")).val(); 
    //test to see if it works
   console.log(input);

   //set to local storage whatever gets inputted to the text field
   localStorage.setItem($(this).attr("name"), input);
   
});

// save to local storage.
$("#input9").val(localStorage.getItem("9"));
$("#input10").val(localStorage.getItem("10"));
$("#input11").val(localStorage.getItem("11"));
$("#input12").val(localStorage.getItem("12"));
$("#input13").val(localStorage.getItem("13"));
$("#input14").val(localStorage.getItem("14"));
$("#input15").val(localStorage.getItem("15"));
$("#input16").val(localStorage.getItem("16"));
$("#input17").val(localStorage.getItem("17"));


