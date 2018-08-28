$(document).ready(function (){
	$("#next").click(function (){
		var url=window.location.toString();
		var len = (url.match("[A-z]+.html"))[0].length;
		url = url.substring(0,url.length-len);
		window.location=url+"booking.html";
	});
});
