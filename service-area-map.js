// A1 Concrete Coatings - Service Area Map
// Grand Rapids, MI | 100-mile standard | 150-mile extended

document.addEventListener('DOMContentLoaded', function () {
  const mapContainer = document.getElementById('service-area-map');
  if (!mapContainer) return;

  // Grand Rapids, MI coordinates
  const center = [42.9634, -85.6681];

  const map = L.map('service-area-map', {
    center: center,
    zoom: 7,
    zoomControl: true,
    scrollWheelZoom: false,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // 150-mile extended radius (for larger commercial jobs)
  L.circle(center, {
    color: '#1D5A99',
    fillColor: '#1D5A99',
    fillOpacity: 0.08,
    weight: 1.5,
    dashArray: '6, 4',
    radius: 241402 // 150 miles in meters
  }).addTo(map).bindPopup('<strong>Extended Service Area</strong><br>Up to 150 miles for larger commercial projects');

  // 100-mile standard radius
  L.circle(center, {
    color: '#24A7E0',
    fillColor: '#24A7E0',
    fillOpacity: 0.15,
    weight: 2,
    radius: 160934 // 100 miles in meters
  }).addTo(map).bindPopup('<strong>Standard Service Area</strong><br>100-mile radius from Grand Rapids, MI');

  // HQ Marker
  const hqIcon = L.divIcon({
    className: '',
    html: `<div style="background:#24A7E0;width:14px;height:14px;border-radius:50%;border:3px solid white;box-shadow:0 0 0 2px #24A7E0;"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7]
  });

  L.marker(center, { icon: hqIcon }).addTo(map)
    .bindPopup('<strong>A1 Concrete Coatings HQ</strong><br>Grand Rapids, MI 49546')
    .openPopup();
});
