var latitude, longitude;

document.getElementById('findMe').addEventListener('click', search);

function initMap() {
  var location = {lat: -33.45, lng: -70.6667};
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: location
  });
  var marker = new google.maps.Marker({
  position: location,
  map: map
  });

  var inputPartida = document.getElementById('startingPoint');
  var inputDestino = document.getElementById('destination');

  new google.maps.places.Autocomplete(inputPartida);
  new google.maps.places.Autocomplete(inputDestino);
};


function search () {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error)
  }
}

var success = function getLocationSuccess (position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  var location = {lat: latitude, lng: longitude};
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 17,
  center: location
  });
  var marker = new google.maps.Marker({
  position: location,
  map: map
  });
  /*map.setZoom(16);
  map.setCenter(position);*/


}

var error = function (error) {
  alert('Tenemos problemas para encontrar tu ubicación.');
}


