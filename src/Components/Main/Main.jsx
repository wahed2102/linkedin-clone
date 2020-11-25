import React, { useState, useEffect } from "react";
import Profile from "../../Components/Profile";
import Background from "../../images/photo_background.svg";
import Photo from "../../images/wahed.jpg";
// import { LandingPage } from "../../Components/LandingPage";
// import Footer from "../../Components/Footer";
import { NavBar } from "../../Components/NavBar";
import News from "../../Components/News/News";
import Courses from "../../Courses/Courses";
// import { Login } from "../../Components/Login";
import { PostButton } from "../CreatePostButton/PostButton";

const Main = () => {
	const [user, setUser] = useState([])

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
        <div style={{ flexBasis: "200px" }}>
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
        <div style={{ flexBasis: "555px", marginLeft: 30, marginRight: 30 }}>
          <PostButton />
        </div>
        <div style={{ flexBasis: "315px" }}>
          <News />
          <Courses />
        </div>
      </div>
    </div>
  );
};

export default Main;
