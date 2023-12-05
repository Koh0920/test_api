const options = {
    // Required: API key
    key: 'ZmpxA056VyRp6YBbexNbWLWcZQRUIJia', 
    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 34.4573937954458, 
    lon: 133.97470177281804,
    zoom: 5,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([50.4, 14.3])
        .setContent('Hello World')
        .openOn(map);
});
