import leaflet from 'leaflet';

const configureMap = (places) => {

  const city = [52.38333, 4.9];
  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });
  const zoom = 12;

  if (document.getElementById(`map`)) {
    const map = leaflet.map(`map`, {
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
      leaflet
      .marker(el, {icon})
      .addTo(map);
    });
  }
};

export default configureMap;
