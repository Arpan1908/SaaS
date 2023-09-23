import React, { useEffect,useState } from 'react'
import Navbar from '../components/Navbar'
import "./Home.css"
import axios from 'axios';
import image from "../assets/hello.gif"
import { BrowserRouter as Router, Route,Routes,link } from 'react-router-dom';
import Convo from './Convo';
import Hero from '../components/Hero';
import Sec from '../components/Sec';
import Footer from '../components/Footer.jsx';



function Home() {

  return(
   
   <div className="page">
   <Hero />
   <Sec />
   <Footer />
   </div>
)}
export default Home;







