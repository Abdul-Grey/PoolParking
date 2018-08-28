$(document).ready(function (){
		$("#validate").click(function (){
			var name = document.getElementById("name").value.toString().toLocaleLowerCase();
			var password = document.getElementById("password").value.toString().toLocaleLowerCase();

			document.getElementById("name").value="";
			document.getElementById("password").value="";


			var url=window.location.toString();
			var filename=url.match("[A-z]*.html");
			var loc=url.substring(0,url.length-filename[0].length);
			console.log(loc);

			if(name === "test" && password === "test")
			{
				window.location=loc+"search.html"
			}
			else if( name==="admin" && password ==="admin")
			{
				window.location=loc+"admin.html";
			}
			else
			{
				alert("Did not match\nPlease try again");
				window.location=loc+"dashboard.html";
			}
		});

		$(".navigation").hover(function (){$(this).css({"text-decoration":"underline"})},function (){$(this).css({"text-decoration":"none"})});

});


