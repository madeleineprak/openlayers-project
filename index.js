import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    projection:'EPSG:3857',
    center: [-11415394.558884, 2738429.945402],
    zoom: 4
  })
});

// "EPSG:4326","EPSG:3857"

// let states = ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Mexico City", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco"];
let states = [
    {
        "name": "Aguascalientes",
        "coordinates": "[]"
    },
    {
        "name": "Baja California Sur",
        "coordinates": "[]"
    },
    {
        "name": "Jalisco",
        "coordinates": "[]"
    }
]
function myZoom() {
    map.setView(new View({
        projection:'EPSG:3857',
        center: [-11394076.755058, 2516514.206381],
        zoom: 8
      }));
}

function selectState() {
    console.log()
}

document.getElementById("zoom").addEventListener("click", myZoom)