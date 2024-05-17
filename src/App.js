import { fetchUser } from "./utils";
import { Logo } from "./Logo";
import React from "react";
import "./styles.css";
import Conditional from "./components/Conditional";
import {BrowserRoute, Route, Routes} from "react-router-dom";
import JobsLayout from "./pages/JobsLayout";
import Job from "./pages/Job";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";


export default function App() {
  return (
    <BrowserRoute>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/JobsLayout" element={<JobsLayout />}/>
          <Route path="/Job" element={<Job />}/>
      </Routes>
    </BrowserRoute>
    );
}
