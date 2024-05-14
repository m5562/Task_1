import React from 'react';
import { GoogleMap } from '@react-google-maps/api';

const Map = (props) => {
  const { isLoaded } = props;

  const containerStyle = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
  };

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const leftDivStyle = {
    width: '30vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const subDivStyle = {
    flex: 1,
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    margin: '5px',
    display: 'flex',
    flexDirection: 'column',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
  };

  const buttonStyle = {
    margin: '5px',
    padding: '10px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const center = {
    lat: 20.2961,
    lng: 85.8245,
  };

  return isLoaded && (
    <div style={containerStyle}>
      <div style={mapContainerStyle}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
        </GoogleMap>
      </div>
      <div style={leftDivStyle}>
        <div style={subDivStyle}>
          <div style={buttonContainerStyle}>
            <button style={buttonStyle}>Button 1</button>
            <button style={buttonStyle}>Button 2</button>
            <button style={buttonStyle}>Button 3</button>
            <button style={buttonStyle}>Button 4</button>
          </div>
        </div>
        <div style={subDivStyle}>
          {/* Content for the second sub-div */}
        </div>
      </div>
    </div>
  );
};

export default Map;
