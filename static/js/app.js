// all imports at top, import config to access api key
import Config from '../../config.js';


// create an instance of the Config class
let config = new Config();


// render the navbar into the header
// $.get('../../components/header.html', function(res) {
//   $('header').html(res);
// });

function convert(num) {
  let deg = (num -273.15) * (9/5) + 32;
  return deg.toFixed(2);
}

// create a function that logs the city entered in the form
function searchCity() {
  // log the city in id "city_search"
  let city = $('#city_search').val();

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${config.getKey()}`;

  $.get(url, function(res) {
    console.log(res);

    $('#city_name').text(`${res.name}, ${res.sys.country}`);
    $('#high').html(`${convert(res.main.temp_max)}&deg;`);
    $('#low').html(`${convert(res.main.temp_min)}&deg;`);
    $('#forecast').text(`${res.weather[0].description}`);
    $('#humidity').text(`${res.main.humidity}%`);

    $('#weather-info').css('display', 'block');
  });
}

// check to see if the submit button is pressed, if it is, stop the event from refreshing the page, and call searchCity()
$('#submit-btn').click(function(e) {
  e.preventDefault();
  searchCity();
});


// make search information not appear until they submit a city
$('#weather-info').css('display', 'none');
