// Need to create a fucking div or card or some shit for each, needs to for five
// Check if thats the length or how to get five

// Need to search using search term from user input to api

// Need to store recent searches but as a link to that search

// recent searches need to persist (pain)

// so index needs a search section (text form submit button), a recent searches section
// a header, a section to display the current day, and a section
// to display the next 5 days

// needs to render to correct case ig

// https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=c442dc651d0e249770d8f3b6c4442612

// https://api.openweathermap.org/data/3.0/onecall
// lat=37.44
// lon=-94.04
// exclude=hourly,daily
// appid=c442dc651d0e249770d8f3b6c4442612

const apiKey = "c590985f7e1c9e9101b244703998cb68";
const weatherURL =  "https://api.openweathermap.org/data/3.0/onecall";
var city = $('#searchbar');
var submitBtnEl = $('.submitBtn');

var locationRequestURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=" + apiKey;

// var locationRequestURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + apiKey;

var temp;
var humidity;
var uv;

// make our request to the API
fetch(locationRequestURL, {
  cache: 'reload'
}).then(function (response) {

  return response.json();
//   Has an issue with line below
}).then(function (data) {
  // we have our lat and longitude from the city we made a request about
//   var latitude = data[0].lat;
    var testLat = 51.5073219;
  console.log(testLat);
//   var lon = data[0].lon;
    var testLon = -0.1276474;

 // make a request url using the latitude and longitude we got in our response
  var weatherRequestURL = weatherURL + "?" + "lat=" + testLat + "&lon=" + testLon + "&appid=" + apiKey;

  // make our weather request -- has an issue with line below
  fetch(weatherRequestURL)
  .then(function (response) {
    // update the UI with data we get from our second request's response
    var responseJson = response.json();
   // temperatureText.value = responseJson.current.temp;
   temp = responseJson.current.temp;
    humidity = responseJson.current.humidity;
    uv = responseJson.current.uvi;
   // update ui
  });
});


// displaying info we need
// 1. making an api request with certain parameters - e.g. the location
// 2. parsing the response 
// 3. display elements using the data from the response