$(document).ready(function(){

	var colors = ["fuchsia","mocassin","goldenrod","powderblue","lime","orchid","cyan","deepskyblue","whiteash"];
	var index=null;
	

	$(".mall").hover(
		function(){
			index = Math.floor(Math.random()*9);
			$(this).css({"background":colors[index],"font-size":"2em"});
		},
		function(){
			index = Math.floor(Math.random()*9);
			$(this).css({"background":colors[index],"font-size":"1em"});
		});
	$(".mall").click(function (){
			var url=window.location.toString();
			var len = (url.match("[A-z]*[0-9].html"))[0].length;
			url = url.substring(0,url.length-len);
			window.location=url+"mallsbook.html";
	});

});
