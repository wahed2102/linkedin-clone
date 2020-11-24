import React from "react";
import "./App.css";
// import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import Background from "./images/photo_background.svg";
import Photo from "./images/wahed.jpg";

function App() {
  return (
    <div>
      {/* <Footer /> */}
      <Profile
        name="Wahed Ali"
        alt="Wahed Ali"
        image={Photo}
        description="Fellow - Full stack Developer Masai School Full-time"
        background={Background}
        connections={33}
        viewed={16}
      />
    </div>
  );
}

export default App;
