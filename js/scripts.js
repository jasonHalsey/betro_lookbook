$(document).ready(function(){
  
// Refills sliding menu
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close,.main_logo').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });

// Lazyload images
  $(function() {
    $("img.lazy").lazyload();
  });

//Back To Top Scrolling
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

//Waypoints
	$('.byebye').waypoint(function() {
	   $('.byebye img').fadeTo( 3000, 0.4);
	   $('.byebye_overlay').fadeIn(3000).delay(3000).fadeOut("slow").stop();
	   },
	{ offset: '10%' });


}); //end doc.ready


