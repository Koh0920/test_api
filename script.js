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
    //表示するタイルレイヤのURLとAttributionコントロールの記述を設定して、地図に追加する
    L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
        attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>",
        opacity: 0.8
    }).addTo(map);
});
