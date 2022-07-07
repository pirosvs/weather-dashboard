# weather-dashboard

## Deployment Link
(https://pirosvs.github.io/weather-dashboard/)

## Description
This project aims to create a functional weather-checking website through the use of 3rd party weather and geocoding APIs. The site would allow users to input a city to look up, and upon clicking the "go" button be presented with a 5-day forecast for the city they searched, including the temperature, UV index, humidity, and weather forecast (for sun, rain, clouds, etc). The current day would be displayed at the top of the page and larger than the rest, with the next four days following in smaller cards below, each in order and titled with the correct date and information pertaining to that date specifically. This site could allow users to plan ahead for going on any kind of trip, whether a brief excursion to a nearby city to meet a friend for lunch, a work trip across the country, or a vacation on a different continent.

This project also means to display ability to work with multiple 3rd-party APIs together, as well as with 3rd-party APIs as a whole, through linking the results of the geocoding API to the 5-day forecast API and rendering specific key values from the response to their proper containers on the page. Ideally, I will come back and fix this project to allow it to do both of these things, as it currently struggles to do either.

Languages and APIs used include HTML, CSS, Bootstrap, JavaScript, jQuery, and the OpenWeather 5-Day Forecast and Geocoding APIs.

OpenWeather 5-Day Forecast API 2.5 is used for weather information and OpenWeather's Geocoding API 1.0 is used to find the latitude and longitude of a given city, so that users may input a city name instead of having to find that city's coordinates themselves.

jQuery is additionally used to facilitate writing of actual JavaScript code, and Bootstrap is used to create a more responsive and attractive layout. Minimal CSS outside of Bootstrap is also used to give more specific styles such as background colors. HTML is used to set up the page to display the information taken from the APIs.

## Credits
Credit to learning assistant d.kang106 for helping identify the correct API call url for the weather information, as I had been stuck using the paid url instead of the free one and getting stuck on 401 errors because of it. Credit as well to learning assistant dsalas for pointing out why my response data was not pointing correctly. Credit lastly to my housemate Lyra for helping me understand how to link the information obtained from the geocoding API to the weather API link.

## License
This project falls under the MIT license.

## Author
Damien Armstrong can be found on: Linkedin (https://www.linkedin.com/in/damien-armstrong-412319138/) Github (https://github.com/pirosvs)