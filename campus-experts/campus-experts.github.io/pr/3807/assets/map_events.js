// create the map object and set the cooridnates of the initial view:
var map = L.map('map').setView([15, 15], 2);
var flagicon = L.icon({
  iconUrl: '/assets/images/marker-icon.png',
  iconRetinaUrl: '/assets/images/marker-icon-2x.png',
  shadowUrl: '/assets/images/marker-shadow.png',

  iconSize: [41, 41], // size of the icon
  shadowSize: [41, 6], // size of the shadow
  iconAnchor: [10, 38], // point of the icon which will correspond to marker's location
  shadowAnchor: [10, 0], // the same for the shadow
  popupAnchor: [10, -20], // point from which the popup should open relative to the iconAnchor
});

// create the tile layer with correct attribution:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

render.features.forEach(function (feature) {
  L.geoJson(feature, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: flagicon });
    },
    onEachFeature: onEachFeature,
  }).addTo(map);
});

function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties) {
    layer.bindPopup(function () {
      var popupstring = feature.properties.title;
      return (
        "<a href='" +
        feature.properties.url +
        "' target='_blank' >" +
        popupstring +
        '</a><p>' +
        feature.properties.description +
        ' <br> ' +
        feature.properties.city +
        ', ' +
        feature.properties.date +
        '</p>'
      );
    });
  }
}
