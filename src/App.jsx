import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";
import HotelDetailsCard from "./components/HotelCard/HotelDetailsCard"

function App() {
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <div><Loading/></div>;
  }
  return (
    <>
    <Navbar/>
          <Routes>
              <Route path="/" element={<HomePage/>}/>    
              <Route path="/hotel" element={<HotelCardDetails/>}/>   
          </Routes>
  <Footer/>
    </>
  )
}

export default App
