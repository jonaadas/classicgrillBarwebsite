function initMap()  {
        var uluru = {lat: -1.2422791, lng: -78.6306363};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 19,
          center: uluru
        });

        var marker = new google.maps.Marker({
         position: uluru,
         map: map
       });
      }
var button = document.getElementById("button"),
    paragraph = document.getElementById("paragraph");

button.addEventListener("click", function(){
  if (paragraph.style.display == 'block') {
    paragraph.style.display = 'none';
  } else {
    paragraph.style.display = 'block';
  }
}, false);
