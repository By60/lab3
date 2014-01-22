'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(submitForm);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the element that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
		var this_description = $(containingProject).find(".project-description");
		this_description.hide();
		this_description.fadeIn();
    } else { 
    	var this_description = $(containingProject).find(".project-description");
		this_description.fadeToggle();
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}

function submitForm(e) {
	e.preventDefault();

	// Get form data
	var project = $("#project").val();
	var width = $("#width").val();
	var description = $("#description").val();

	// Get element objects
	var containingProject = $(project);
	var descriptionObj = $(containingProject).find(".project-description");

	// Setting description text
	if(descriptionObj.length == 0) {
		//$(containingProject).append("<div class='project-description'><p>" + description + "</p></div>"); 
	} else {
		descriptionObj.html("<p>" + description + "</p>");
	}

	// Setting width
	$(project).animate({
		width: $('#width').val()
	});

}