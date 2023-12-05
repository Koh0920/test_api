const options = {
    // Required: API key
    key: 'ZmpxA056VyRp6YBbexNbWLWcZQRUIJia', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 34.45767688075902,
    lon: 133.9749163495469,
    zoom: 5,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

});
