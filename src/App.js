import Map from "./Components/Map";
import Navbar from "./Components/Navbar";
import {useJsApiLoader } from '@react-google-maps/api';

import { mapOptions } from "./Components/MapConfiguration";
function App() {
  const { isLoaded } = useJsApiLoader({
    id:mapOptions.googleMapsApiKey,
    googleMapsApiKey: mapOptions.googleMapsApiKey
  })
  return (
  <div className="App">
    <Navbar/>
<Map isLoaded={isLoaded}/>
  </div>
  );
}

export default App;
