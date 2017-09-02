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
		console.log("work");
		// some needed parameters
		var content = document.getElementById("city_name"); 
		var my_temp = document.getElementById("temperature_value");
		var my_wind = document.getElementById("wind_speed");
		var my_clouds = document.getElementById("count_clouds");
		//var my_pressure = document.getElementById("count_pressure");
		//var my_sunrise = document.getElementById("sunrise_time_value");
		//var my_sunset = document.getElementById("sunset_time_value");


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
				my_temp.innerHTML = "";				
				my_wind.innerHTML = "";
				my_clouds.innerHTML = "";
				//my_pressure.innerHTML = "";
				//my_sunrise.innerHTML = "";
				//my_sunset.innerHTML = "";	

				var elem_city = document.createElement("div");
				var elem_temp = document.createElement("div");
				var elem_wind = document.createElement("div");
				var elem_clouds = document.createElement("div");
				//var elem_pressure = document.createElement("div");
				//var elem_sunrise = document.createElement("div");
				//var elem_sunset = document.createElement("div");				

				elem_city.innerHTML = RESP.name;
				elem_temp.innerHTML = Math.round(RESP.main.temp-273.15) + "°C";
				elem_wind.innerHTML = RESP.wind.speed + " m/s";
				elem_clouds.innerHTML = RESP.clouds.all + " %" ;
				//elem_pressure.innerHTML = RESP.main.pressure;
				//elem_sunrise.innerHTML = RESP.sys.sunrise;
				//elem_sunset.innerHTML = RESP.sys.sunse;									



				content.appendChild(elem_city);
				my_temp.appendChild(elem_temp);
				my_wind.appendChild(elem_wind);
				my_clouds.appendChild(elem_clouds);
				//my_pressure.appendChild(elem_pressure);
				//my_sunrise.appendChild(elem_sunrise);
				//my_sunset.appendChild(elem_sunset);								

			}
		}
	}

request(707471);


	/*var cities = document.getElementById("mycity");

	cities.addEventListener("change", function(){
		console.log(cities.value);
		request(cities.value);
	}, false); */

	/* End weather forecast*/