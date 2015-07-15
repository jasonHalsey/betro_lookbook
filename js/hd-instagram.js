$( document ).ready(function() {


	jQuery.fn.spectragram.accessData = {
	    accessToken: '1693648712.300ab90.b919d8e91c344ab8a7bd58f299674c4c',
	    clientID: '300ab90307264815880a6698e420f317'
	};

	$('ul.jhalzfeed').spectragram('getUserFeed',{
	    query: 'betrosimonecollection',
	    max: 36,
	    size: 'big',
	    wrapEachWith: '<li class="instagram_image"></li>'
	});

});