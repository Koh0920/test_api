const options = {
    // Required: API key
    key: 'ZmpxA056VyRp6YBbexNbWLWcZQRUIJia', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 34.457783037504015,
    lon: 133.97465885747226,
    zoom: 5,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([34.457995350589165, 133.97495926489265])
        .setContent('Hello World')
        .openOn(map);
});
