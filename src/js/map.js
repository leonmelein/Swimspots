import { Map, NavigationControl, GeolocateControl, Popup } from "maplibre-gl";

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
        fitBoundsOptions: {
            maxZoom: 12
        },
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
    map.addControl(geoLocation)

    map.on("load", function () {
        map.addSource("swimming", {
            type: "geojson",
            data: "/data/locations.geojson",
        });

        map.addLayer({
            id: "swim",
            type: "circle",
            source: "swimming",
            paint: {
                "circle-radius": 15,
                "circle-color": "#5390E9"
            }
        });
        map.resize();
    });

    // inspect a cluster on click
    map.on('click', 'clusters', async (e) => {
        const features = map.queryRenderedFeatures(e.point, {
            layers: ['clusters']
        });
        const clusterId = features[0].properties.cluster_id;
        const zoom = await map.getSource('swim').getClusterExpansionZoom(clusterId);
        map.easeTo({
            center: features[0].geometry.coordinates,
            zoom
        });
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'swim', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const name = e.features[0].properties.name;
        const alternate_name = e.features[0].properties.alternate_name;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new Popup()
            .setLngLat(coordinates)
            .setHTML(`<h2>${name}</h2><em>${alternate_name}</em>`)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'swim', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'swim', () => {
        map.getCanvas().style.cursor = '';
    });

    return {map, geoLocation};
}