$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.


      var markup =
      "<h1>Chicago Weather</h1>" +

      "<h3>Current Conditions</h3>" +
      "<ul><li>It is currently " + data.currently.summary +

      "<li>The temperature is " + data.currently.temperature +
      "<li>It feels like " + data.currently.apparentTemperature +
      "<li> degrees and the windspeed is " + data.currently.windSpeed + " mph.</ul>" +

      "<h3>3-Day Forecast</h3>" +
      "<ul><li>Tomorrow, the high will be " + data.daily.data[1].temperatureMax + " degrees." +
      "<li>The next day, the high will be " + data.daily.data[2].temperatureMax + " degrees." +
      "<li>Three days from now, the high will be " + data.daily.data[3].temperatureMax + " degrees.</ul>" +

      "<h3>7-Day Forecast</h3>" +
      "<ul><li>" + data.daily.summary

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
