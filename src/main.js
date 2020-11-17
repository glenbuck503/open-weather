import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './weather-service.js'

function clearFields() {
  $('#location').val("");
  $('.showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
}

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    clearFields();
    let promise = WeatherService.getWeather(city);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});









  // $('#zipCode').click(function () {
  //   const zip = $('#zipcode').val();
  //   $('#zipcode').val("");

  //   let request = new XMLHttpRequest();
  //   const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${process.env.API_KEY}`;

  //   request.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const response = JSON.parse(this.responseText);
  //       getElements(response);
  //     }
  //   }

  //   request.open("GET", url, true);
  //   request.send();

  //   function getElements(response) {
  //     $('.showHumidity2').text(`The humidity in ${zip} is ${response.main.humidity}%`);
  //     $('.showTemp2').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
  //     $('.showWindSpeed2').text(`The wind speed is ${response.wind.speed} mph.`);
      
  //   }
  // });