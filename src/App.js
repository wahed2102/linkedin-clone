import React from "react";
import "./App.css";
import { PostButton } from "./Components/CreatePostButton.jsx/PostButton";
import { Login } from "./Components/Login";
import {Feed} from './Components/PostFeed/Feed'


function App() {
  return (
    <div>
      
      <PostButton />
      <Feed />
      {/* <ProfilePic/> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
