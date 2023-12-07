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
    //表示するタイルレイヤのURLとAttributionコントロールの記述を設定して、地図に追加する
    //L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
    //    attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>",
    //    opacity: 1.0
    //}).addTo(map);
    //風向き情報をオーバーレイする
    //const { overlays } = windyAPI;
    //overlays.wind.addTo(map);

    // JSONデータの読み込み。サンプルとしてgeoJSON形式の
    const jsonData = {
     "type": "FeatureCollection",
     "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Location A",
        "category": "Category 1"
     },
      "geometry": {
        "type": "Point",
        "coordinates": [139.6917, 35.6895] // Coordinates for Tokyo
     }
     },
     { 
      "type": "Feature",
      "properties": {
        "name": "Location B",
        "category": "Category 2"
     },
      "geometry": {
        "type": "Point",
        "coordinates": [135.7681, 35.0116] // Coordinates for Kyoto
      }}]}
    
    // Create a custom layer or use an existing one
    // and add your data to the map
    L.geoJSON(jsonData).addTo(map);
});
