
//global variables 
  

var pos = {};
var request = {};
var icon = 'images/marker.png';



// onload function to create the map and get the current location

function initMap() {
        // Create a map object and specify the DOM element for display.
       var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 15 
        });
    
  var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
          pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

          marker = new google.maps.Marker({
          position: pos,
          icon:icon,
          animation: google.maps.Animation.DROP,
          map: map,
          title: 'You are here'
        });



            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });

        } 

        else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

}

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'I am Error: The Geolocation service failed.' :
                              'I am Error: Your browser doesn\'t support geolocation.');
      }




// function for the bouncing pin animation



   function toggleBounce(marker) {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }

      }





// onlclick event for comic shops

function comics(){ 

navigator.geolocation.getCurrentPosition(function(position) {
          pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };)
}



//create the request object to search for book stores

 request = {
    location: pos,
    radius: '5000',
    name:'books',
    type: ['book_store']

  };

  // Create the PlaceService and send the request.
  // Handle the callback with an anonymous function.
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        // If the request succeeds, draw the place location on
        // the map as a marker, and register an event to handle a
        // click on the marker.
  
          marker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,
          icon:icon,
          map: map,
          position: place.geometry.location
        });

      }
  
    }
  });
}





// onclick event for record stores


function music() {
  //alert ("You clicked vinyl, cds and cassettes");
// Specify location, radius and place types for your Places API search.
    
    

    request = {
    location: pos,
    radius: '50000',
    name:['music','record','records']

  };

  // Create the PlaceService and send the request.
  // Handle the callback with an anonymous function.
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        // If the request succeeds, draw the place location on
        // the map as a marker, and register an event to handle a
        // click on the marker.
  
        var marker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,
          map: map,
          position: place.geometry.location
        });

      }
    }
  });
}






// onclick event for video game stores

function vgames(){

  // Specify location, radius and place types for your Places API search.
    request = {
    location: pos,
    radius: '10000',
    name: ['video','games'],
    type: ['store']

  };

  // Create the PlaceService and send the request.
  // Handle the callback with an anonymous function.
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        // If the request succeeds, draw the place location on
        // the map as a marker, and register an event to handle a
        // click on the marker.
        var marker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,
          map: map,
          position: place.geometry.location
        });
      }
    }
  });
}





function toys(){
 // alert ("You clicked cards and collectables");



var request = {
    location: pos,
    radius: '30000',
    query: 'collectables',
    keyword: 'toys', 

  };

  var service = new google.maps.places.PlacesService(map);
 service.nearbySearch(request, function(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        // If the request succeeds, draw the place location on
        // the map as a marker, and register an event to handle a
        // click on the marker.
        var marker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,
          map: map,
          position: place.geometry.location
        });
      }
    }
  });
}

