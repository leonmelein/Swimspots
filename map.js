import { Map, NavigationControl, GeolocateControl } from "maplibre-gl";

export async function setUpMap() {
    // Maps
    var map = new Map({
        container: "map", // container id
        style: "/map/style.json",
        center: [13.404954, 52.520008], // starting position
        zoom: 3 // starting zoom
    });

    // Add zoom and rotation controls to the map.
    var nav = new NavigationControl();
    map.addControl(nav, "top-right");

    let geoLocation = new GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
    map.addControl(geoLocation)

    map.on("load", function () {
        map.addSource("swimming", {
            type: "geojson",
            data: "/data/locations.geojson"
        });

        map.addLayer({
            id: "swim",
            type: "circle",
            source: "swimming",
            paint: {
                "circle-radius": 5,
                "circle-color": "#5390E9"
            }
        });
        map.resize()
    });

    return {map, geoLocation};
}