// TODO: Add beach destinations and filtering for different type of destinations
// This feature is currently under development and will be available in a future release.
import React, { useEffect, useState } from "react";
import { DESTINATIONS } from "../utils/Options.js";

export default function Generator() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [favorites, setFavorites] = useState([]);
  //SCROLL

  // STORE FAVORITES IN BROWSER
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // DESTINATION SELECTION INPUT FUNCTION
  const handleSelect = (event) => {
    const selectedName = event.target.value;
    const destination = DESTINATIONS.find((dest) => dest.name === selectedName);
    setSelectedDestination(destination);
  };

  // RANDOM AND NEXT BUTTON

  function handleRandomize() {
    const randomIndex = Math.floor(Math.random() * DESTINATIONS.length);
    const randomDestination = DESTINATIONS[randomIndex];
    setSelectedDestination(randomDestination);
  }

  // ADD AND REMOVE FAVORITE
  const handleFavorite = () => {
    if (selectedDestination) {
      setFavorites((prevFavorites) => {
        const updatedFavorites = new Set(prevFavorites);
        if (updatedFavorites.has(selectedDestination.name)) {
          updatedFavorites.delete(selectedDestination.name);
        } else {
          updatedFavorites.add(selectedDestination.name);
        }
        const updatedFavoritesArray = [...updatedFavorites];
        localStorage.setItem(
          "favorites",
          JSON.stringify(updatedFavoritesArray)
        );
        return updatedFavoritesArray;
      });
    }
  };

  return (
    <div className="generator-container">
      <button className="btn-randomize" onClick={handleRandomize}>
        Randomize!
      </button>
      <p>OR</p>
      <h1>Select your destination</h1>
      <div>
        <select className="destination-select" onChange={handleSelect}>
          <option value="">--Select--</option>
          {DESTINATIONS.map((destination) => (
            <option key={destination.name} value={destination.name}>
              {" "}
              {destination.name}
            </option>
          ))}
        </select>
      </div>
      <div className="activity-container">
        <h2>Recommended activities in:</h2>
        {selectedDestination && (
          <div>
            <i
              onClick={handleFavorite}
              className={`fa-solid fa-star ${
                favorites.includes(selectedDestination.name) ? "favorite" : ""
              }`}
              title="Add to favorites"
            ></i>
            <h3>{selectedDestination.name}</h3>
            <ul>
              {selectedDestination.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
            <button className="btn-randomize" onClick={handleRandomize}>
              Next
            </button>
          </div>
        )}
      </div>
      <div className="favorite-container">
        <p className="destination-header">Your favorite destinations:</p>
        <ul>
          {favorites.map((name) => {
            const destination = DESTINATIONS.find((dest) => dest.name === name);
            return destination ? <li key={name}>{destination.name}</li> : null;
          })}
        </ul>
      </div>
    </div>
  );
}
