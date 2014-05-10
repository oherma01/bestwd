

//Hook up the flexslider

$(document).ready(function() {
	$('.flexslider').flexslider({
		directionNav: false,
	});
});


//dropdown select-->

$(document).ready(function() {

	//build dropdown
	$("<select />").appendTo(".navigation nav div");
	
	// Create default option "Navigate to..."
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Navigate to..."
	}).appendTo("nav select");	
	
	// Populate dropdowns with the first menu items
	$(".navigation nav li a").each(function() {
	 	var el = $(this);
	 	$("<option />", {
	     	"value"   : el.attr("href"),
	    	"text"    : el.text()
	 	}).appendTo("nav select");
	});
	
	//make responsive dropdown menu actually work			
  	$("nav select").change(function() {
    	window.location = $(this).find("option:selected").val();
  	});

});	
