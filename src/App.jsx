import React, { Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom'

import Nav from "./components/nav/Nav.jsx";
import './App.css';

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
          
          
       

        </Routes>
      
      </Suspense>
      {/* <Footer /> */}
    </>
  );
}

export default App;


