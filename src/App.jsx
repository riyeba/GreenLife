import React from "react";

import { Route, Router, Routes } from "react-router";







import GreenLeafLanding from "./components/Welcome";
import GreenLeafSignUp from "./components/SignIn";
import GreenLeafEvents from "./components/Upcoming";
import GreenLeafProfile from "./components/Profile";
// import Header from "./components/Header";
import GreenLeafFeed from "./components/GreenField";
import SportsConnect from "./CoonectScrolldown";
import SkaotsPlatform from "./components/HomeSceenshort";
import Header from "./components/Header";
import SportsRegistration from "./Register";



function App() {
  return (
    <div>
    

<Header/>
      <Routes>
        <Route path="/" element={<GreenLeafLanding/>} />
        <Route path="/signup" element={<GreenLeafSignUp/>} />
        <Route path="/event" element={<GreenLeafEvents/>} />  
        <Route path="/profile" element={<GreenLeafProfile/>} />   
        <Route path="/feed" element={<GreenLeafFeed/>} />  
        <Route path="/connect" element={< SportsConnect />} /> 
        <Route path="/feedingi" element={< SkaotsPlatform />} /> 
        <Route path="/register" element={< SportsRegistration />} /> 
      </Routes>
      
      
    </div>
  );
}

export default App;
