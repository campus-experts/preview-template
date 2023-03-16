
// create the map object and set the cooridnates of the initial view:
    var map = L.map('map').setView([15, 15], 2);
    var flagicon = L.icon({
    iconUrl: '/assets/images/marker-icon.png',
    iconRetinaUrl: '/assets/images/marker-icon-2x.png',
    shadowUrl: '/assets/images/marker-shadow.png',

    iconSize:     [41, 41], // size of the icon
    shadowSize:   [41, 6], // size of the shadow
    iconAnchor:   [10, 38], // point of the icon which will correspond to marker's location
    shadowAnchor: [10, 0],  // the same for the shadow
    popupAnchor:  [10, -20] // point from which the popup should open relative to the iconAnchor
    });

    // create the tile layer with correct attribution:
    L.tileLayer('https://api.mapbox.com/styles/v1/github/cjhhxery8665u2sqcpantwo5o/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2l0aHViIiwiYSI6ImNqaGh3Z2p1ZDA3ZngzNm1wMmVrbmVnM3MifQ.xsTr-3ER9TPJuzODE-_dtw', {
        maxZoom: 18
    }).addTo(map);


    render.features.forEach(function(feature){
      L.geoJson(feature, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {icon: flagicon});
        },
        onEachFeature: onEachFeature
      }).addTo(map);
    });

    function onEachFeature(feature, layer) {
      // does this feature have a property named popupContent?
      if (feature.properties) {
          layer.bindPopup(function(){
            var userstring = "http://githubcampus.expert/"+feature.properties.username;
            var popupstring = feature.properties.shortname+"'s profile";
            return "<a href="+userstring+">"+popupstring+"</a>";
          });
      }
  }
