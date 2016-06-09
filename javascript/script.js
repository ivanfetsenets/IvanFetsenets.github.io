/* кнопка вверх */
$(document).ready(function()
{
 	$(window).scroll(function()
 		{
			if ($(this).scrollTop() > 10) 
			{
				$('.scrollup').fadeIn();
			} 

			else 
			{
				$('.scrollup').fadeOut();
			}
		});
 
$('.scrollup').click(function()
{
	$("html, body").animate({ scrollTop: 0 }, 600);
	return false;
});
 
});
/* кнопка вверх */

	/* Weather forecast*/

	function request(city_id) 
	{
		// some needed parameters
		var content = document.getElementById("content");
		var my_wind = document.getElementById("wind");
		var my_clouds = document.getElementById("clouds");
		var my_pressure = document.getElementById("pressure");

		var URL = "http://api.openweathermap.org/data/2.5/weather?id="; 
		var API_KEY = "d75da5829ee2244d5a25bbb10c1a7318";

		var REQ_URL = URL + city_id + "&appid=" + API_KEY;


		var XHR = new XMLHttpRequest();
		XHR.open("GET", REQ_URL, true);
		XHR.send();

		// Hadling Server's response
		XHR.onreadystatechange = function() 
		{
			if ((XHR.readyState == 4) && (XHR.status == 200)) 
			{
				RESP = JSON.parse(XHR.responseText);

				// Generating DOM
				content.innerHTML = "";
				my_wind.innerHTML = "";
				my_clouds.innerHTML = "";
				my_pressure.innerHTML = "";								
				/*var elem = document.createElement("div");*/
				content.innerHTML = RESP.name;
				my_wind.innerHTML = Resp.wind;
				
				content.appendChild(elem);
			}
		}
	}

	/*var cities = document.getElementById("mycity");

	cities.addEventListener("change", function(){
		console.log(cities.value);
		request(cities.value);
	}, false); */

	/* End weather forecast*/