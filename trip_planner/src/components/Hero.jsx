import React from "react";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <p className="hero-subtitle">Welcome To</p>
        <h1 className="hero-title">
          NEXT<span className="highlight">ESCAPE</span>
        </h1>
        <h2>Discover Your Next Adventure!</h2>
        <p className="hero-description">
          Looking for travel inspiration? Let our app surprise you with random
          destination suggestions and activities, or search for your dream
          location and see what exciting adventures await. Save your favorite
          spots and create a personalized travel bucket list. Whether you're in
          the mood for relaxation or thrill-seeking, we've got the perfect
          destination for you. Start exploring now and make your travel dreams a
          reality!
        </p>
      </div>
      <div className="scroll-indicator">
        <i className="fa-solid fa-arrow-down fa-3x"></i>
      </div>
    </div>
  );
}
