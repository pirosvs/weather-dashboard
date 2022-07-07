// Check if thats the length or how to get five

// Need to store recent searches but as a link to that search

// recent searches need to persist (pain)

const apiKey = "c590985f7e1c9e9101b244703998cb68";
const weatherURL =  "https://api.openweathermap.org/data/2.5/forecast";
var city = $('#searchbar');

var submitBtnEl = $('.submitBtn');

var dayOneDisplay = $('#day1');
var dayTwoDisplay = $('#day2');
var dayThreeDisplay = $('#day3');
var dayFourDisplay = $('#day4');
var dayFiveDisplay = $('#day5');

// Test static location to see if code is working 
var locationRequestURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=" + apiKey;

// Actual variable that takes in user input city to find weather information
// var locationRequestURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + apiKey;

var temp = "";
var humidity;
var uv;

// $("button").click(function(event) {

// Make our request to the geocoding API to get coordinates for the searched city
fetch(locationRequestURL, {
  cache: 'reload'
}).then(function (response) {

  return response.json();
//   Has an issue with line below
}).then(function (data) {
  // Grab our lat and longitude from the city we made a request about 
//   var latitude = data[0].lat;
    var testLat = 51.5073219;
  console.log(testLat);
//   var lon = data[0].lon;
    var testLon = -0.1276474;

 // Make a request url using the latitude and longitude we got in our response -- currently using static test variables,
 //  meant to take in commented out variables instead
  var weatherRequestURL = weatherURL + "?" + "lat=" + testLat + "&lon=" + testLon + "&appid=" + apiKey;

  // Make our weather request -- has an issue with line below
  fetch(weatherRequestURL)
  .then(function (response) {
    // Update the UI with data we get from our second request's response
    // var responseJson = response.json(); -- was using instead of second data
    return response.json();
   // temperatureText.value = responseJson.current.temp;
  }).then(function(data) {
    console.log(data.list[0].main.temp)
    temp.text(data.list[0].main.temp);
//    $('temp').text(data.temp);
   console.log(temp);
   var oneParaEl = $("p")
   $(temp).appendTo(oneParaEl);
   $(oneParaEl).appendTo(dayOneDisplay);
});

// what I have tried --> 
// temp.text('responseJson.temp');
// $('#temp1').append(temp);

// $('temp').text(responseJson.temp); 
// temp.textContent = responseJson.temp;
// all of these but with responseJson.current.temp;
// temp.textContent = temp.val();
// temp.textContent = temp.val(responseJson.temp);
// temp.text(temp.val(responseJson.temp));

    humidity = data.humidity;
    uv = data.uvi;
   // update ui

  });
// });
// });