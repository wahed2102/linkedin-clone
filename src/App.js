import React from "react";
import "./App.css";
import {SigninPage} from "./Components/SigninPage"
import { LandingPage } from "./Components/LandingPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>     
      <SigninPage/>
      <LandingPage></LandingPage>
      <Footer />
    </div>
  )
}

export default App;