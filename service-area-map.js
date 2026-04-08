// Service Area Map Initialization
document.addEventListener('DOMContentLoaded', function () {
  // Initialize map centered on Crestview, FL
  const crestviewCoords = [30.7621, -86.5704];

  const map = L.map('service-area-map', {
    center: crestviewCoords,
    zoom: 9,
    scrollWheelZoom: false,
    zoomControl: true
  });

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  // Add 50-mile radius circle (50 miles = 80467.2 meters)
  const serviceRadius = L.circle(crestviewCoords, {
    color: '#CBFA37',       // Volt yellow border
    fillColor: '#CBFA37',   // Volt yellow fill
    fillOpacity: 0.15,
    weight: 3,
    radius: 80467.2         // 50 miles in meters
  }).addTo(map);

  // Add center marker for Crestview
  const marker = L.marker(crestviewCoords, {
    title: 'Blackops Coating - Crestview, FL'
  }).addTo(map);

  // Add popup to marker
  marker.bindPopup('<b>Blackops Coating</b><br>Crestview, FL').openPopup();

  // Fit map to show full circle
  map.fitBounds(serviceRadius.getBounds(), {
    padding: [20, 20]
  });
});
