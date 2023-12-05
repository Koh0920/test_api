const options = {
    // API key
    key: 'ZmpxA056VyRp6YBbexNbWLWcZQRUIJia', 

    // Put additional console output
    verbose: true,

    // mapの緯度・経度の初期値
    lat: 34.5,
    lon: 134.1,
    // 初期のzoom度合
    zoom: 10,
};

// Initialize Windy API
windyInit(options, windyAPI => {

    const { map } = windyAPI;
    // .map is instance of Leaflet map
    //ライブラリLはLeafletの地図ライブラリ
    L.popup()
        .setLatLng([34.457995350589165, 133.97495926489265])
        .setContent('Hello World')
        .openOn(map);
});
