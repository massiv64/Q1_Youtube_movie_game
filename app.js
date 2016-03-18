$(document).ready(function(){
	

	var videoList = ["Sazz3NDldwY", "OjxZfKLO1M0","jP5e2XJsB_4", "LGmthB51XUc", "kg7goEASO5E", "LBBni_-tMNs", 
	"MsSPAEtYaZE", "0lq1JIWQSlc", "qgmcXs02URY", "xJjCnWm5cvE", "1rlSjdnAKY4", "BsxYfYCbVC0", "veztNJQyRJg",
	"uUPHlAbAf2I", "pYdjNeFh6zw", "k26hmRbDQFw", "Ocr0aNwQvVg", "zcgxBHBsl-4", "o9guyPNZglE", "a2Th8JGsJuo", 
	"s9JqbCH4aVw", "BKDnwX9P7vo", "IKiSPUc2Jck", "d921M-ACMM4", "GQ5ICXMC4xY"];	

	var newVideo = videoList[0];
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var player;
	function onYouTubeIframeAPIReady() {
	    player = new YT.Player('player', {
			height: '390',
			width: '640',
			videoId: 'uUPHlAbAf2I',
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
	    });
		

	}
	function onPlayerReady(event) {
		event.target.playVideo();
	}
	var getVideos = function(){
		$.ajax({
      		url: "https://www.googleapis.com/youtube/v3/videos" + newVideo,
      	dataType: "jsonp",
      	data: {
         key: "AIzaSyD22hZD7Qk15yyx-VHFuiYYdpjQAPe6nfM",
         q: "cat",
         id: "Sazz3NDldwY",
         part: "snippet"
      	},
      	success: function(data){
               console.log(data);           
      	},
      	error: function(jqXHR, textStatus, errorThrown) {
          alert (textStatus, + ' | ' + errorThrown);
     	 }
  	});
};
	




});


//Next steps:
// 1) Play videos function (take from array, shift off array after it's task is done)
//
// 2) Scorekeeping functionality (localStorage)
//
// 3) USERANSWER VALIDATION COMPARED TO JSON OBJECT -> SNIPPET OBJECT -> TITLE KEY:VALUE
//
// 4) WRITE HIDDEN HTML ELEMENTS TO BE DISPLAYED ONCE ARRAY IS EMPTY
//
// 5) ADD RESET BUTTON AND TRANSPORT LOCALSTORAGE DATA FROM CURRENT SCORE TO HIGH SCORE.
//
// 6) Bootstrap aesthetic (go ham, bruh)





