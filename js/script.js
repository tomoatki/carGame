// script.js

$(function() {
     
    $("button").click(function() {
        $('#box').fadeOut(1000);
    });
    
    /* -----------------
       jQUERY SELECTORS
       ----------------- */
    
    // Grouping selector
    // $('h2,h3,h4').css('border','solid 1px red');
    
    // ID selector
    // $('div#container').css('border','solid 1px red');
    
    // Class selector
    // $('p.lead').css('border','solid 1px red');
    
    // Pseudo-element selector - selects first element
    // $('li:first').css('border','solid 1px red');
    
    // Pseudo-element selector - selects even P tags
    // $('p:even').css('border','solid 1px red');
    
    // Descendant selector
    // $('div em').css('border','solid 1px red');
    
    // Child selector
    // $('div > p').css('border','solid 1px red');
    
    // jQuery Header selector
    // $(':header').css('border','solid 1px red');
    
    // jQuery Contains selector
    // $('div:contains("Brad")').css('border','solid 1px red');
    
    /* --------------------
       jQUERY EVENT METHODS
       -------------------- */
    
    $('#box').click(function() {
        alert('you just clicked the box');
    });
    
    $("input").blur(function() {
        
        if( $(this).val() == "" ) {
            $(this).css('border','solid 1px red');
            $('#box').text('Forgot to add text?');
        }
        
    });
    
    $("input").keydown(function() {
        
        if( $(this).val() !== "" ) {
            $(this).css('border','solid 1px #777');
            $('#box').text('Thanks for that!');
        }
        
    });
    
    $('#box').hover(function() {
        
        $(this).text('you hovered in!');
        
    }, function() {
        
        $(this).text('you hovered out!');
        
    });
	
	$('#go').click(function() {
		
		function checkIfComplete() {
			
			if( isComplete == false ) {
				isComplete = true;
			} else{
				place = 'second';
			}
		}
		
		var carWidth = $('#car1').width();
		// get racetrack width;
		
		var raceTrackWidth = $(window).width() - carWidth;
		
		// generate a random value
		
		var raceTime1 = Math.floor( (Math.random() * 5000) + 1);
		var raceTime2 = Math.floor( (Math.random() * 5000) + 1);
		
		// set a flag variable to False by default
		var isComplete = false;
		
		// set a flag variable to first by default
		var place = 'first';
		
		// animate car 1
		$('#car1').animate({
			
			left: raceTrackWidth
			// move the car the width of the racetrack
			
		}, raceTime1, function() {
		
		// animation is complete
		
		// run a function
		checkIfComplete();
		
		$('#raceInfo1 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' miliseconds!' );
		
		
	
		});
		
		
		$('#car2').animate({
			
			left: raceTrackWidth
			// move the car the width of the racetrack
			
		}, raceTime2, function() {
		
		// animation is complete
		
		// run a function
		checkIfComplete();
		
		$('#raceInfo2 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' miliseconds!' );
		
		
	
		});
    
    
	});
	
	$('#reset').click(function(){
		$('.car').css('left','0');
		$('#raceInfo span').text;
		
	});

});
   