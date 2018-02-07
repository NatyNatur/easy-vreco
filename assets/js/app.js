var success = function getLocationSucces (position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  navigator.geolocation
}

var error = function (error) {
  alert('Tenemos problemas para encontrar tu ubicación.');
}

function initMap() {
  var location = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: location
  });
  var marker = new google.maps.Marker({
  position: location,
  map: map
  });
}