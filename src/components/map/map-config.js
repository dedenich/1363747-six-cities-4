import leaflet from 'leaflet';

let map; let icon; let _markers = [];

const configureMap = (places) => {

  const city = [52.38333, 4.9];
  icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });
  const zoom = 12;

  if (document.getElementById(`map`)) {
    map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    places.forEach((el) => {
      let lMarker = leaflet
      .marker(el, {icon})
      .addTo(map);
      _markers.push(lMarker);
    });
  }
};

export const updateMarkers = (places) => {
  _markers.forEach((el) => {
    el.removeFrom(map);
  });

  places.forEach((el) => {
    let lMarker = leaflet
      .marker(el, {icon})
      .addTo(map);
    _markers.push(lMarker);
  });
};

export default configureMap;
