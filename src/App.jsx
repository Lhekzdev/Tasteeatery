import React, { Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom'
import './App.css';

import Nav from "./components/nav/Nav.jsx";
const AboutUs = lazy(() => import("./components/aboutUs/AboutUs.jsx"));
const Menu = lazy(() => import("./components/menu/Menu.jsx"));
const Home = lazy(() => import("./components/home/Home.jsx"));


function App() {
  return (

    <>
      <Nav />
      <Suspense
        fallback={
          <div className="font-poppins  text-center text-4xl  font-semibold text-red-600">
            Loading...
          </div>
        }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutcontainer" element={<AboutUs/>} />
          <Route path="/ourmenu" element={<Menu/>} />

        </Routes>
      
      </Suspense>
      {/* <Footer /> */}
    </>
  );
}

export default App;


