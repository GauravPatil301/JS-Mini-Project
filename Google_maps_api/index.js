// set map
// function initialize() {
//   let mapOptions = {
//     // zoom of map on start
//     zoom: 10,
//     // Initial center cordinates on start (New York)
//     center: new google.maps.LatLng(40.7128, -74.006),
//     // Type of map (RoadMap, Satellite,Hybrid,Terrain)
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     // Minimum zoom of map
//     minZoom: 2,
//   }
//   // Create a new map instance using provided options
//   let map = new google.maps.Map(document.getElementById('map'), mapOptions)

//   // Create an info window to display location info
//   let infoWindow = new goole.maps.InfoWindow()

//   //Create a marker for example : Iran, Zanjan
//   let marker = new google.maps.Marker({
//     // Cordinates for Iran, Zanjan
//     position: new google.maps.LatLng(36.6769, 48.4963),
//     // Attach the marker
//     map: map,
//     // Tooltip on hover
//     title: 'Iran, Zanjan',
//   })
//   // Add click event listener for marker
//   marker.addListener('click', function () {
//     infoWindow.setContent(marker.title)
//     infoWindow.open(map, marker)
//   })
// }

function initMap() {
  const myLatlng = { lat: -25.363, lng: 131.044 }
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatlng,
  })
  const marker = new google.maps.Marker({
    position: myLatlng,
    map,
    title: 'Click to zoom',
  })

  map.addListener('center_changed', () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map.panTo(marker.getPosition())
    }, 3000)
  })
  marker.addListener('click', () => {
    map.setZoom(8)
    map.setCenter(marker.getPosition())
  })
}

window.initMap = initMap

// initialize the map when window loading finished
// google.maps.event.addEventListener(window, 'load', initMap)
