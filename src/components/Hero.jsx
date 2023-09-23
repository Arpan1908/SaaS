import { useEffect, useRef } from "react";
import './Cart.css'
import { useAuth0 } from "@auth0/auth0-react";
import {  Link } from 'react-router-dom';
import "./Navbar.css"

export default function Hero() {
  const { loginWithRedirect } = useAuth0();
  const { logout,isAuthenticated,user } = useAuth0();



  const heroRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = ev;
      heroRef.current.style.setProperty("--x", `${clientX}px`);
      heroRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const heroStyle = {
    height: "100vh",
    width: "100%",
   
    backgroundImage: `radial-gradient(
      circle farthest-side at var(--x, 100px) var(--y, 100px),
      #000445 0%,
      transparent 100%
    )`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const titleStyle = {
    fontSize: "50px",
    
    transform: `rotate(10deg) translateX(calc(var(--x) / 10, 0px))`,
  };

  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div className="container">
    {/* Navbar Brand (Logo) */}
    <a className="navbar-brand" href="#">
    CatalystHub
    </a>
    {/* Toggle Button for Mobile */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    {/* Navbar Links (for Desktop) */}
    <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        {/* Add your navigation links here */}
      </ul>
    </div>
    {/* Buttons (for Desktop) */}
    <div className="d-none d-lg-flex">
    {isAuthenticated }
    {
      isAuthenticated ? (
        <div className='nav-icon'>
      <button className="btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
</button>
<Link to="/shop" className="btn" >Dashboard</Link>
</div>
   ) :(
  <button className="btn" onClick={() => loginWithRedirect()}>Login</button>
   )
  }
      <a href="#" className="btn btn1" role="button">
        Get started
      </a>
    </div>
  </div>
</nav>

      <div ref={heroRef} style={heroStyle} className="style-0 fade-in">
      
      <div class="style-5">
        <h2 class="style-6">Welcome to CatalystHub</h2><br class="style-7" /><h1 class="style-7">Where Ideas Ignite, Innovation Takes Flight, and Success Finds Its Spark!"</h1>
    </div>
    <div className="style-9">
    <button className="style-12" href="#">Know More</button>
    </div>
    
      </div>
      
    </>
  );
}
