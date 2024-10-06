import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import localImage from 'map-marker.png'; // Your custom marker image
import 'MapComponent.css'; // Import the CSS file for styles

const MapComponent = () => {
  const initialPosition = [43.7831, -79.1873]; // University of Toronto Scarborough
  const [position, setPosition] = useState(initialPosition);
  const [locationInput, setLocationInput] = useState("");
  const [locationName, setLocationName] = useState("UTSC"); // State for location name
  const [showCoordinates, setShowCoordinates] = useState(false); // State to track if coordinates should be shown
  const mapRef = useRef();

  const customIcon = L.icon({
    iconUrl: localImage,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });



  const updatePosition = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationInput)}`);
      const data = await response.json();

      if (data.length > 0) {
        const newPosition = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
        setPosition(newPosition); // Update the position state to the new coordinates
        setLocationName(data[0].display_name); // Update the location name to the new name
        setShowCoordinates(true); // Set to show coordinates
        mapRef.current.setView(newPosition, 15); // Set zoom level to 12
      } else {
        alert("Location not found. Please try a different search.");
      }
    } catch (error) {
      console.error("Error fetching location data:", error);
      alert("There was an error fetching the location. Please try again.");
    }
  };



  return (
    <div style={{ marginTop: '150px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '10px' }}>Find Location Here</h2>
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

      <MapContainer center={position} zoom={12} style={{ height: "400px", width: "100%" }} ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div>
              <p><strong>{locationName}</strong></p>
              {showCoordinates ? (
                <p>Coordinates: {position[0]}, {position[1]}</p> // Show coordinates if a new location is entered
              ) : (
                <p>Postal Code: M1C 1A4</p> // Show postal code initially
              )}
            </div>
          </Popup>
        </Marker>

        {/* Marker for World Action Foundation */}
        <Marker position={[43.7426, -79.2224]} icon={customIcon}>
          <Popup>
            <div>
              <p><strong>World Action Foundation</strong></p>
              <p>Postal Code: M1J 2H2</p>
            </div>
          </Popup>
        </Marker>

        
      </MapContainer>
    </div>
  );
};

export default MapComponent;
