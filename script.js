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

　   const { map, overlays } = windyAPI;
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

    
    // JSONデータの読み込み。サンプルとしてgeoJSON形式の座標データをポイント表示できるか試す
    const jsonData = {
     "type": "FeatureCollection",
        {
  "markers": [
    {
      "lat": "33.21722222",
      "lng": "132.53277778",
      "pointId": "11114",
      "pointName": "宇和島 ③第二出荷場（U-6）",
      "speciesId": null,
      "speciesValueAM": "0",
      "speciesValuePM": "",
      "saisuiValueAM": "0",
      "saisuiValuePM": "",
      "gatherYMD": "2023-11-15",
      "speciesNameKana": "珪藻類合計",
      "icon": "×",
      "color_code": "#000000",
      "icon_size": 25,
      "maxvalue": "0"
    },
    {
      "lat": "33.22607000",
      "lng": "132.54432000",
      "pointId": "1979",
      "pointName": "宇和島 ⑮戎山（港の西側）",
      "speciesId": null,
      "speciesValueAM": "0",
      "speciesValuePM": "",
      "saisuiValueAM": "3",
      "saisuiValuePM": "",
      "gatherYMD": "2023-11-15",
      "speciesNameKana": "珪藻類合計",
      "icon": "×",
      "color_code": "#000000",
      "icon_size": 25,
      "maxvalue": "0"
    },
    {
      "lat": "33.23947700",
      "lng": "132.52393500",
      "pointId": "1760",
      "pointName": "宇和島 ⑬荒網代（U-5）（魚類97）",
      "speciesId": null,
      "speciesValueAM": "4",
      "speciesValuePM": "",
      "saisuiValueAM": "3",
      "saisuiValuePM": "",
      "gatherYMD": "2023-11-15",
      "speciesNameKana": "珪藻類合計",
      "icon": "●",
      "color_code": "#00FF00",
      "icon_size": 25,
      "maxvalue": "4"
    },
    {
      "lat": "33.23718000",
      "lng": "132.51468700",
      "pointId": "1981",
      "pointName": "宇和島 九島裏（U-2）",
      "speciesId": null,
      "speciesValueAM": "6",
      "speciesValuePM": "",
      "saisuiValueAM": "3",
      "saisuiValuePM": "",
      "gatherYMD": "2023-11-15",
      "speciesNameKana": "珪藻類合計",
      "icon": "●",
      "color_code": "#00FF00",
      "icon_size": 25,
      "maxvalue": "6"
    },
    {
      "lat": "33.20257100",
      "lng": "132.49297100",
      "pointId": "1861",
      "pointName": "宇和島 ⑦小池漁場（U-1)（珠87）",
      "speciesId": null,
      "speciesValueAM": "14",
      "speciesValuePM": "",
      "saisuiValueAM": "3",
      "saisuiValuePM": "",
      "gatherYMD": "2023-11-15",
      "speciesNameKana": "珪藻類合計",
      "icon": "●",
      "color_code": "#FCFF00",
      "icon_size": 25,
      "maxvalue": "14"
    },
    {
      "lat": "33.25377670",
      "lng": "132.52486500",
      "pointId": "1758",
      "pointName": "宇和島 ⑪吉田（U-4）（魚類80）",
      "speciesId": null,
      "speciesValueAM": "16",
      "speciesValuePM": "",
      "saisuiValueAM": "3",
      "saisuiValuePM": "",
      "gatherYMD": "2023-11-15",
      "speciesNameKana": "珪藻類合計",
      "icon": "●",
      "color_code": "#FCFF00",
      "icon_size": 25,
      "maxvalue": "16"
    },
    {
      "lat": "33.24638889",
      "lng": "132.47444444",
      "pointId": "11130",
      "pointName": "宇和島 ⑩野島（U-3）",
      "speciesId": null,
      "speciesValueAM": "20",
      "speciesValuePM": "",
      "saisuiValueAM": "3",
      "saisuiValuePM": "",
      "gatherYMD": "2023-11-15",
      "speciesNameKana": "珪藻類合計",
      "icon": "●",
      "color_code": "#FCFF00",
      "icon_size": 25,
      "maxvalue": "20"
    }
  ]
}
     }
    
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
    if (overlays.wind) {
        overlays.wind.changeColor(newColorScale);
    }
});
