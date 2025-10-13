import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact.jsx";
import Find from "./Component/Find.jsx";
import Signup from "./Component/Signup.jsx";
import Add_tournament from "./Component/Add_tournament.jsx";
import Location from "./Component/Location.jsx";
import Login from "./Component/Login.jsx";
import AdminPanel from "./Component/AdminPanel.jsx";
import Getallpromp from "./Component/Getallpomp.jsx";
import User from "./Component/User.jsx";
import ImageAdminPanel from "./Component/Admin/ImageAdminPanel.jsx";
import ProtectedRoute from "./Component/ProtectedRout.jsx";
import Userpanel from "./Component/UserPanel/Userpanel.jsx";
import MyMatches from "./Component/Matches/MyMatches.jsx";

const App = () => {
  return (
    <div>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/Find" element={<Find />} />
  <Route path="/Sign-up" element={<Signup />} />
  <Route path="/Addtournament" element={<Add_tournament />} />
  <Route path="/local" element={<Location />} />
  <Route path="/Login" element={<Login />} />
 <Route path="/Admin" element={<AdminPanel />} />
  <Route path="/GetPomp" element={<Getallpromp />} />
  <Route path="/User" element={<User />} />
  <Route path="/ImageAdmin" element={<ImageAdminPanel />} />
  <Route path="/UserDadshboard" element={<Userpanel/>}/>
  <Route path="/mymatches" element={<MyMatches/>}/>

</Routes>
    </div>
  );
};

export default App;
