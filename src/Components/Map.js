import React from "react";
import { GoogleMap } from "@react-google-maps/api";

import img from "./../img.webp";

const Map = (props) => {
  const { isLoaded } = props;

  const containerStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
  };

  const mapContainerStyle = {
    width: "70%",
    height: "100%",
  };

  const center = {
    lat: 20.2961,
    lng: 85.8245,
  };

  return (
    isLoaded && (
      <div style={containerStyle}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        ></GoogleMap>
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <div style={{ height: "50%", display: "flex", alignItems: "start", gap: "5px", padding: "10px" }}>
            <button style={{ padding: "10px 15px", flexGrow: 1 }}>Quick</button>
            <button style={{ padding: "10px 15px", flexGrow: 1 }}>
              Button 2
            </button>
            <button style={{ padding: "10px 15px", flexGrow: 1 }}>
              Button 3
            </button>
            <button style={{ padding: "10px 15px", flexGrow: 1 }}>
              Statics
            </button>
          </div>
          <div style={{ height: "50%" }}>
            <img
              src={img}
              alt={"logo"}
              style={{ width: "100%", height: "98%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Map;
