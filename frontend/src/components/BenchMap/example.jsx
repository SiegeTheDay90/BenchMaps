import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@googlemaps/react-wrapper';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const initialLocations = [
  { lat: -3.744832, lng: -38.539110 },
  { lat: -3.752956, lng: -38.536304 },
  { lat: -3.754622, lng: -38.546131 }
];

function Map() {
  const [locations, setLocations] = useState(initialLocations);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (map) {
      markers.forEach(marker => {
        marker.setMap(null);
      });

      const newMarkers = locations.map(location => {
        return new window.google.maps.Marker({
          position: location,
          map
        });
      });

      setMarkers(newMarkers);
    }
  }, [locations, map]);

  const onLoad = React.useCallback(map => {
    setMap(map);
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY_HERE"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
      />
    </LoadScript>
  )
}

export default Map;
