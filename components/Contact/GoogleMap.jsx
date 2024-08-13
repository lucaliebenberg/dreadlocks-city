import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  onLoad
} from "@react-google-maps/api";
import Button from "../Button";
const containerStyle = {
  maxWidth: "669px",
  width: "100vw",
  height: "431px",
};

const center = {
  lat: 42.330612,
  lng: -71.192118,
};
const divStyle = {
  background: `white`,
};
export default function Map() {
  const [map, setMap] = React.useState(null);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  return (
    <div className="md:w-max w-full ml-auto">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_googleMapsApiKey}>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexFlow: "column nowrap",
            padding: 0,
            gap: "2rem",
          }}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker position={center}>
              <InfoWindow position={center}>
                <div style={divStyle}>
                  <h1 className="text-2xl bold" style={{ color: "#895B4A" }}>
                    <a href="https://g.co/kgs/YKjX8vp=en">
                      Dreadlocks City International
                    </a>
                  </h1>
                </div>
              </InfoWindow>
            </Marker>
          </GoogleMap>
          <a
            className="contents"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KWfptYQNQ8wdMY22b4VY8m_H&daddr=13+Old+Stanhope+Rd,+Claremont,+Cape+Town,+7708=en"
          >
            <Button className="ml-auto">Get directions</Button>
          </a>
        </div>
      </LoadScript>
    </div>
  );
}
