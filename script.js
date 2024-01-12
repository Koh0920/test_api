const options = {
    // API key
    key: "ZmpxA056VyRp6YBbexNbWLWcZQRUIJia", 

    // Put additional console output
    verbose: true,

    // mapの緯度・経度の初期値
    lat: 34.5,
    lon: 134.1,
    // 初期のzoom度合
    zoom: 10,
};

windyInit(options, windyAPI => {
  const { map, store } = windyAPI;

  // Creating a custom icon
  const warningIcon = L.icon({
      iconUrl: './possibility.svg',
      iconSize: [200, 200], // Size of the icon
      iconAnchor: [25, 25], // Anchor point of the icon
  });

  // Adding a marker with the custom icon to the map
  const marker = L.marker([34.5, 134.1], { icon: warningIcon }).addTo(map);

  // Custom control for the icon
  const CustomControl = L.Control.extend({
    onAdd: function() {
        const img = L.DomUtil.create('img');
        img.src = './warning.svg';
        img.style.width = '100px'; // Adjust the size as needed
        img.style.height = '100px'; // Adjust the size as needed
        return img;
    },

    onRemove: function() {
        // Nothing to do here
    }
  });
  
  // Adding the custom control to the map
  new CustomControl({ position: 'topleft' }).addTo(map);
});
