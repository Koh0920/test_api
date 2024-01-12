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
  const { map } = windyAPI;

  // Creating a custom icon
  const warningIcon = L.icon({
      iconUrl: './possibility.svg',
      iconSize: [200, 200], // Size of the icon
      iconAnchor: [5, 5], // Anchor point of the icon
  });

  // Adding a marker with the custom icon to the map
  const possibility = L.marker([34.5, 134.1], { icon: warningIcon }).addTo(map);

  // Creating a custom icon
  const emergencyIcon = L.icon({
    iconUrl: './emergency.svg',
    iconSize: [50, 50], // Size of the icon
    iconAnchor: [25, 25], // Anchor point of the icon
  });

// Adding a marker with the custom icon to the map
  const emergency = L.marker([34.7, 134.15], { icon: emergencyIcon }).addTo(map);

});
