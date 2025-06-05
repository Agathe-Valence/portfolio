import React from "react";

const Hobbies: React.FC = () => {
  return (
    <section
      id="hobbies"
      style={{
        borderRadius: "16px",
        border: "1px solid #ff00ea",
        boxShadow: "0 4px 24px #0006",
        padding: "32px",
        maxWidth: 900,
        margin: "32px auto",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <h2
        style={{
          color: "#ff00ea",
          fontSize: "2rem",
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        Mes Hobbies & Passions
      </h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ marginBottom: "20px" }}>
          <strong>American Football</strong>: I played this sport for 2 years in a club. I particularly enjoy the team spirit and the fact that every member is important to the team.
        </li>
        <li style={{ marginBottom: "20px" }}>
          <strong>Drones</strong>: I own my own drone and was a board member of my school’s drone club. I organized the event “FlyForEveryone”: outings to allow hospitalized people to escape for a moment by experiencing immersive flights.
        </li>
        <li style={{ marginBottom: "20px" }}>
          <strong>Travel</strong>: I have had the opportunity to travel to the US West Coast, New York, Croatia, the United Kingdom, the Canary Islands, Belgium, Luxembourg, Switzerland, Canada, Guadeloupe, Martinique, and Hungary.
        </li>
        <li >
          <strong>Animals</strong>: I am passionate about animals.
        </li>
      </ul>
    </section>
  );
};

export default Hobbies;
