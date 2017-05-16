function runMethod1() {
    alert("Clicked button");

    $("#para1").on("click", function() {
        $("#para1").append('<p id="newParagraph">This is a dynamically-generated paragraph!</p>');
        $("#newParagraph").css({"color": "red"});
    });
}

function addDivBorder() {
 //$("#para1").css({"border": "2px solid purple", "background-color": "lightgray", "padding-left": "5px"}); 
 $("#para1").css({"background-color": "lightgray"});  
}