$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.


      var markup =
      "<p>It is currently " + data.currently.summary +
      " and " + data.currently.temperature +
      " degrees.</p>" +

      "<p>It feels like " + data.currently.apparentTemperature +
      " degrees and the windspeed is " + data.currently.windSpeed + " mph.</p>" +

      "<br>Tomorrow, the high will be " + data.daily.data[1].apparentTemperatureMax + " degrees." +

      "<br>Tomorrow, the high will be " + data.daily.data[1].apparentTemperatureMax + " degrees." +
      "<br>The next day, the high will be " + data.daily.data[2].apparentTemperatureMax + " degrees." +
      "<br>Three days from now, the high will be " + data.daily.data[3].apparentTemperatureMax + " degrees."

    // var markup2 = "<p>It is " + data.currently.icon + " and windspeed is " + data.currently.windSpeed + ".</p>"
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
