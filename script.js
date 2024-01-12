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
  const { store } = windyAPI;
  // All the params are stored in windyAPI.store

  const levels = store.getAllowed('availLevels');
  // levels = ['surface', '850h', ... ]
  // Getting all available values for given key

  let i = 0;
  setInterval(() => {
      i = i === levels.length - 1 ? 0 : i + 1;

      // Changing Windy params at runtime
      store.set('level', levels[i]);
  }, 500);

  // Observing change of .store value
  store.on('level', level => {
      console.log(`Level was changed: ${level}`);
  });
});
