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

    {/*
    // JSONデータの読み込み。サンプルとしてgeoJSON形式の座標データをポイント表示できるか試す
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
        "coordinates": [139.6917, 35.6895] // 東京の座標
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
        "coordinates": [135.7681, 35.0116] // 京都の座標
      }}]}
    
    //JSONデータを地図上に新しいレイヤーとして表示
    L.geoJSON(jsonData).addTo(map);
    */}
    
    const customIcon = L.icon({
    iconUrl: 'alart.svg',
    iconcolor: "red",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32] 
    });

    //アイコンをマーカーとしてアップ
    const marker = L.marker([34.64063537041167, 134.235169250691], { icon: customIcon }).addTo(map);

    marker.bindPopup('赤潮発生中！！').openPopup();

    // Define a new color scale
    let newColorScale = {
        "0": [255, 200, 200, 0.5],  // Light red for low values
        "10": [255, 150, 150, 0.75],
        "20": [255, 100, 100, 1.0], // Dark red for high values
        // Add more steps as needed
    };

    // Apply the new color scale to a specific layer, e.g., temperature
    if (map.temp) {
        map.temp.changeColor(newColorScale);
    }
});
