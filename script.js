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

const options = {
  key: 'PsLAtXpsPTZexBwUkO7Mx5I', // REPLACE WITH YOUR KEY !!!

  lat: 50.4,
  lon: 14.3,
  zoom: 5,

  timestamp: Date.now() + 3 * 24 * 60 * 60 * 1000,

  hourFormat: '12h',

  // ...etc
};

windyInit(options, windyAPI => {
  const { map, store } = windyAPI;

  // Custom control for the icon
  const CustomControl = L.Control.extend({
    onAdd: function() {
        const img = L.DomUtil.create('img');
        img.src = './possibility.svg';
        img.style.width = '50px'; // Adjust the size as needed
        img.style.height = '50px'; // Adjust the size as needed
        return img;
    },

    onRemove: function() {
        // Nothing to do here
    }
});

// Adding the custom control to the map
new CustomControl({ position: 'topleft' }).addTo(map);

  // Creating a custom icon
  const warningIcon = L.icon({
      iconUrl: './warning.svg',
      iconSize: [32, 32], // Size of the icon
      iconAnchor: [16, 16], // Anchor point of the icon
  });

  // Adding a marker with the custom icon to the map
  const marker = L.marker([50.4, 14.3], { icon: warningIcon }).addTo(map);

  const levels = store.getAllowed('availLevels');
  let i = 0;
  setInterval(() => {
      i = i === levels.length - 1 ? 0 : i + 1;
      store.set('level', levels[i]);
  }, 500);

  store.on('level', level => {
      console.log(`Level was changed: ${level}`);
  });
});
