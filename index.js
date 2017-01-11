$(document).ready(function() {
  var pushpins = { pp: "38.889586530732335,-77.05010175704956;23;LM", pp: "38.88772364638439,-77.0472639799118;7;KM", pp: "38.890479451480054,-77.04744637012482;1;VM", pp: "38.8896854931628,-77.03519403934479;45;WM" };
  var requestUrl = "http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/?key=lolz";
  console.log(jQuery.param(pushpins));

  $.ajax({
    type: "POST",
    contentType: 'text/plain;charset=utf-8',
    url: encodeURIComponent(requestUrl) + '&responseType=' + 'image/png',
    processData: false,
    data: jQuery.param(pushpins),
    success: function (response) {
      console.log("Success");
      var image = decodeURIComponent(escape(atob(response))); 
      document.getElementById('content').innerHTML = '<img src="data:image/png;base64,' + image + '"/>';

    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log(xhr.status);
      console.log(thrownError);
    }
  });
});
