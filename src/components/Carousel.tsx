import React, { useState } from "react";

const images = [
  { src: "/portfolio/assets/drone build.jpg", description: "Drone prototype under construction" },
  { src: "/portfolio/assets/drone max.jpg", description: "Drone in fly" },
  { src: "/portfolio/assets/drone.jpg", description: "FlyForEveryone Event" },
  { src: "/portfolio/assets/wakee.jpg", description: "Wakee energy-saving device" },
  { src: "/portfolio/assets/car.jpg", description: "Autonomous Vehicle Race" },
];

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="carousel"
      style={{
        background: "#23232b",
        borderRadius: "16px",
        boxShadow: "0 4px 24px #0006",
        padding: "24px",
        maxWidth: 900,
        margin: "0 auto",
        position: "relative",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={images[current].src}
          alt={`Slide ${current + 1}`}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "12px",
            background: "#111",
            border: "3px solid #ff00ea",
            boxShadow: "0 2px 12px #0004",
          }}
        />
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            background: "#18181bcc",
            border: "none",
            color: "#00ffe7",
            fontSize: "2rem",
            padding: "8px 14px",
            borderRadius: "50%",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            background: "#18181bcc",
            border: "none",
            color: "#00ffe7",
            fontSize: "2rem",
            padding: "8px 14px",
            borderRadius: "50%",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "16px",
          color: "#fff",
          fontSize: "1rem",
          fontFamily: "sans-serif",
          fontWeight: 300,
          padding: "8px",
          background: "#18181b",
          borderRadius: "8px",
          border: "1px solid #ff00ea",
          marginBottom: "16px",
        }}
      >
        {images[current].description}
      </div>
      <div style={{ textAlign: "center", marginTop: 16 }}>
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              display: "inline-block",
              width: 12,
              height: 12,
              margin: "0 6px",
              borderRadius: "50%",
              background: idx === current ? "linear-gradient(90deg, #00ffe7, #00ffe7)" : "#333",
              border: idx === current ? "2px solid #ff00ea" : "2px solid #23232b",
              cursor: "pointer",
              transition: "background 0.2s, border 0.2s",
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
