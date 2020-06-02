var map;
var marker;
var polygon;
var bounds;
window.onload = initMap;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: center,
		zoom: 14,
		scaleControl: true
	});
	bounds = new google.maps.LatLngBounds();
	google.maps.event.addListenerOnce(map, 'tilesloaded', function(evt) { 
		bounds = map.getBounds();
	});
		marker = new google.maps.Marker({
			position: center
		});
		polygon = new google.maps.Polygon({
		path: area,
		geodesic: true,
		strokeColor: '#FFd000',
		strokeOpacity: 1.0,
		strokeWeight: 4,
		fillColor: '#FFd000',
		fillOpacity: 0.35
	});

	polygon.setMap(map);	
	  
	var input = /** @type {!HTMLInputElement} */(
		document.getElementById('pac-input'));
        var types = document.getElementById('type-selector');
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.addListener('place_changed', function() {
		marker.setMap(null);
		var place = autocomplete.getPlace();
		var newBounds = new google.maps.LatLngBounds();
		newBounds = bounds;
          if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
          };
		  marker.setPosition(place.geometry.location);
		  marker.setMap(map);
		  newBounds.extend(place.geometry.location);
		  map.fitBounds(newBounds);
		  if (google.maps.geometry.poly.containsLocation(place.geometry.location, polygon)){
			alert('The area contains the address');  
		  } else {
			alert('The address is outside of the area.');  
		  };
	   });
}

var center = new google.maps.LatLng(41.3899621, 2.1469796);
var area= [
{lat: 41.3749971 , lng: 2.1669979},
{lat: 41.3749569 , lng: 2.1683179},
{lat: 41.3759391 , lng: 2.1690059},
{lat: 41.3780967 , lng: 2.1652293},
{lat: 41.3777424 , lng: 2.1645641},
{lat: 41.380383 , lng: 2.1611738},
{lat: 41.3820333 , lng: 2.1634162},
{lat: 41.3837962 , lng: 2.1614313},
{lat: 41.3956283 , lng: 2.1772671},
{lat: 41.4000548 , lng: 2.1715379},
{lat: 41.3973829 , lng: 2.16156},
{lat: 41.3970609 , lng: 2.1603155},
{lat: 41.3981555 , lng: 2.158041},
{lat: 41.3990569 , lng: 2.1534061},
{lat: 41.400924 , lng: 2.1511316},
{lat: 41.4019541 , lng: 2.1492863},
{lat: 41.4015678 , lng: 2.1472263},
{lat: 41.400087 , lng: 2.1439648},
{lat: 41.4014068 , lng: 2.1419048},
{lat: 41.3997651 , lng: 2.1375704},
{lat: 41.3980911 , lng: 2.1330643},
{lat: 41.3957088 , lng: 2.1283007},
{lat: 41.3930689 , lng: 2.1241379},
{lat: 41.3883039 , lng: 2.1270561},
{lat: 41.3882556 , lng: 2.128129},
{lat: 41.3857442 , lng: 2.1296847},
{lat: 41.3831039 , lng: 2.130897},
{lat: 41.3805882 , lng: 2.1322328},
{lat: 41.3769615 , lng: 2.1339547},
{lat: 41.3761192 , lng: 2.1343651},
{lat: 41.3753413 , lng: 2.1350651},
{lat: 41.3751301 , lng: 2.1405369},
{lat: 41.3750193 , lng: 2.1458101},
{lat: 41.3747598 , lng: 2.1521402},
{lat: 41.374651 , lng: 2.1585345},
{lat: 41.3746349 , lng: 2.1606589},
{lat: 41.3747476 , lng: 2.1653795},
{lat: 41.3749971, lng: 2.1669979}
];