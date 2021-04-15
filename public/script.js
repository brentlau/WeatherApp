require(["esri/config","esri/Map", "esri/views/MapView"], function (esriConfig,Map, MapView) {

    esriConfig.apiKey = "AAPK3dfd2b3bda30421daec34ec011931126o1pE-QU8tkz-Lp9GRA0YU4LnDxb4r8UjR4ZTo0neNYyvYzTPwI-k7-PIp7cCdFWp"

    const map = new Map({
      basemap: "arcgis-topographic" // Basemap layer service
    });

    const view = new MapView({
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 13, // Zoom level
      container: "viewDiv" // Div element
    });
  });