var locations = ["Guntur","Vijayawada","Vizag","Tirupati","Kakinada","Ongole","Rajahumandary","Anantapur"];

$(document).ready(function (){
		$("#submit").click(function (){
			var location=$("#search").val().toString().toLocaleLowerCase();
			var name = $("#name").val().toString().toLocaleLowerCase();
			var password = $("#password").val().toString().toLocaleLowerCase();

			$("#name").html("");
			$("#password").html("");


			validate(name,password,location);
			alert("Location is "+location);
		});

		$(".navigation").hover(function (){$(this).css({"text-decoration":"underline"})},function (){$(this).css({"text-decoration":"none"})});

});


function validate(name,password,location){
	if(name == "admin" && password == "admin")
		loadLocation(location);
	else
		alert("Invalid User");
}


function loadLocation(location){
	var stat=locations.include(location);
	var url=window.location.toString();
	var len=0;
	var location_file=null;

	var pattern=url.match("[A-z].html");
	if(pattern==null)
	{
		len=url.length;
	}
	else
	{
		len=url.length - pattern[0].length;
	}

	location_file=url.substring(0,len)+"places/"+location+".html";
	window.location=location_file;
}
