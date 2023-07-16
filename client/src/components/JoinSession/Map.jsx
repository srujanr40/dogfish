import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: '400px',
  height: '600px'
};

export default function Map(props) {
  const [center, setCenter] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API,
  });

  useEffect(() => {
    if (isLoaded) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: props.session.location }, (results, status) => {
        if (status === "OK" && results.length > 0) {
          const { lat, lng } = results[0].geometry.location;
          setCenter({ lat: lat(), lng: lng() });
        }
      });
    }
  }, [isLoaded, props.session.location]);

  return (
    <div>
      {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          >
            {center && <Marker position={center} />}
          </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
