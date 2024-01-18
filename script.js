const options = {
    // API key
    key: "ZmpxA056VyRp6YBbexNbWLWcZQRUIJia", 

    // Put additional console output
    verbose: true,

    // mapの緯度・経度の初期値
    lat: 34.5,
    lon: 134,
    // 初期のzoom度合
    zoom: 5,
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
  const possibility = L.marker([34.5, 134], { icon: warningIcon }).addTo(map);

  // Creating a custom icon
  const emergencyIcon = L.icon({
    iconUrl: './emergency.svg',
    iconSize: [50, 50], // Size of the icon
    iconAnchor: [25, 25], // Anchor point of the icon
  });

// Adding a marker with the custom icon to the map
  const emergency1 = L.marker([34.55, 134.1], { icon: emergencyIcon }).addTo(map);
  const emergency2 = L.marker([34.57, 134.15], { icon: emergencyIcon }).addTo(map);
  const emergency3 = L.marker([34.58, 134.18], { icon: emergencyIcon }).addTo(map);
  const emergency4 = L.marker([34.59, 134.2], { icon: emergencyIcon }).addTo(map);

}
windyInit(options, windyAPI => {
  const { map, store, overlays } = windyAPI;

  // Custom icons and markers...

  windyAPI.on('mapLoaded', () => {
    // レイヤーを潮流に変更
    store.set('overlay', 'currents');

    // 利用可能なレイヤーのリストを取得
    const availableLayers = Object.keys(overlays);

    // レイヤーの数を表示
    console.log(`利用可能なレイヤーの数: ${availableLayers.length}`);

    // レイヤーのリストを表示
    console.log('利用可能なレイヤー:', availableLayers);
  });
});
         
         );
