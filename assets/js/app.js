var latitude, longitude;

document.getElementById('encuentrame').addEventListener('click', search);

function initMap() {
  var location = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: location
  });
  var marker = new google.maps.Marker({
  position: location,
  map: map
  });
}  

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
  zoom: 15,
  center: location
  });
  var marker = new google.maps.Marker({
  position: location,
  map: map
  });
  map.setZoom(18);
  map.setCenter(position);
}

var error = function (error) {
  alert('Tenemos problemas para encontrar tu ubicación.');
}



