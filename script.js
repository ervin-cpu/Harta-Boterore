function initialize(){
    var mapOption = {
        // Zoom level for better view of Kosovo
        zoom: 8, 
        // Initial center coordinates set to Kosovo, with Prishtina coordinates
        center: new google.maps.LatLng(42.6629, 21.1655), // Coordinates for Prishtina
        // Type of map (ROADMAP, SATELLITE, HYBRID, TERRAIN)
        mapType: google.maps.MapTypeId.ROADMAP, 
        // Minimum zoom of map
        minZoom: 6
    };

    // Create a new map instance using the provided options
    var map = new google.maps.Map(document.getElementById('map'), mapOption); 

    // Create an info window to display location info
    var infoWindow = new google.maps.InfoWindow();

    // Create a marker for Prishtina
    var markerPrishtina = new google.maps.Marker({
        // Coordinates for Prishtina
        position: new google.maps.LatLng(42.6629, 21.1655),
        // Attach the marker to the map
        map: map,
        // Tooltip on hover
        title: 'Prishtina, Kosovo'
    });

    // Add click event listener for the Prishtina marker
    markerPrishtina.addListener('click', function(){
        infoWindow.setContent(markerPrishtina.title);
        infoWindow.open(map, markerPrishtina);
    });

    // Adjust Map center when the window is resized 
    google.maps.event.addDomListener(window, "resize", function(){
        map.setCenter(mapOption.center);
    });
}

// Initialize the map when the window loading is finished 
google.maps.event.addDomListener(window, 'load', initialize);
