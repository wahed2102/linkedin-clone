import React from "react";
import "./App.css";
import { CreatePost } from "./Components/CreatePost/CreatePost";
import { Login } from "./Components/Login";
import { ProfilePic } from "./Components/ProfilePic";

function App() {
  return (
    <div>
      <CreatePost />
      {/* <ProfilePic/> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
