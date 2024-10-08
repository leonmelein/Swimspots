import { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './Map.css';
import PropTypes from 'prop-types';

export default function Map({lng, lat}) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const zoom = 14;
    const API_KEY = 'BS1MIzBdZcrywSSRfQpf';

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom: zoom,
            interactive: false
        })

        new maplibregl.Marker()
            .setLngLat([lng, lat])
            .addTo(map.current);

    }, [API_KEY, lng, lat, zoom]);

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}

Map.propTypes = {
    lng: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired
}

