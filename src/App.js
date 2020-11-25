import React from "react";
import "./App.css";
// import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import Background from "./images/photo_background.svg";
import Photo from "./images/wahed.jpg";
import { LandingPage } from "./Components/LandingPage";
import Footer from "./Components/Footer";
import { NavBar } from "./Components/NavBar";
import News from "./Components/News/News";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "1128px",
          margin: "0px auto",
          marginTop: "49px",
        }}
      >
        <div>
          <Profile
            name="Wahed Ali"
            alt="Wahed Ali"
            image={Photo}
            description="Fellow - Full stack Developer Masai School Full-time"
            background={Background}
            connections={33}
            viewed={16}
          />
          {/* <LandingPage></LandingPage>
      <Footer /> */}
        </div>
        <div style={{ float: "right" }}>
          <News />
        </div>
      </div>
    </div>
  );
}

export default App;
