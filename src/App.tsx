import "./styles.css";
import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function App() {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map", // container id
      style: "https://demotiles.maplibre.org/style.json", // style URL
      center: [100.4957085, 13.6951642], // starting position [lng, lat]
      zoom: 6, // starting zoom
      dragPan: false, // disable drag pan
      scrollZoom: false, // disable scrollZoom
      doubleClickZoom: false // disable dbClickZoom
    });
    map.on("load", () => {});
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
}
