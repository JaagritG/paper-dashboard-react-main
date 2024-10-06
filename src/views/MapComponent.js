import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import localImage from 'map-marker.png'; // Your custom marker image
import 'MapComponent.css'; // Import the CSS file for styles

const MapComponent = () => {
  const initialPosition = [43.7831, -79.1873]; // University of Toronto Scarborough
  const [position, setPosition] = useState(initialPosition);
  const [locationInput, setLocationInput] = useState("");
  const [charities, setCharities] = useState([]); // State for charities
  const mapRef = useRef();

  const customIcon = L.icon({
    iconUrl: localImage,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const fetchCharities = async () => {
    try {
      const response = await fetch('URL_TO_YOUR_CHARITY_API'); // Replace with actual API URL
      const data = await response.json();
      setCharities(data); // Set charities in state
    } catch (error) {
      console.error("Error fetching charity data:", error);
    }
  };

  const updatePosition = async (e) => {
    e.preventDefault();
    // Existing code to update position...
  };

  useEffect(() => {
    fetchCharities(); // Fetch charities on component mount
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(position, 15);
    }
  }, [position]);

  return (
    <div style={{ marginTop: '150px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '10px' }}>Find Location Here</h2> {/* Label above the input */}
      <form onSubmit={updatePosition} style={{ marginBottom: '20px', display: 'inline-block' }}>
        <input 
          type="text" 
          value={locationInput} 
          onChange={(e) => setLocationInput(e.target.value)} 
          required 
          className="location-input" 
          placeholder="Enter location..." 
        />
        <button type="submit" className="show-location-button">Show Location</button> 
      </form>

      <MapContainer center={position} zoom={15} style={{ height: "400px", width: "100%" }} ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div>
              <p>Location: {position[0]}, {position[1]}</p>
            </div>
          </Popup>
        </Marker>

        {charities.map((charity, index) => (
          <Marker 
            key={index} 
            position={[charity.latitude, charity.longitude]} 
            icon={customIcon}
          >
            <Popup>
              <div>
                <p>{charity.name}</p>
                <p>{charity.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
