
// import './App.css';
// import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import Home from "./pages/Home";
// import Shop from "./pages/Shop"

// import Navbar from './components/Navbar';


// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/dashboard" element={<Shop />} />
//         {/* <Route path="/lobby" element={<Lobby />} />
//         <Route path="/room:roomId" element={<Room />} /> */}
       
//         </Routes>
        
//       </div>
      
//     </Router>
    
//   );
// }

// export default App;


// src/App.js

import React from 'react';
import {Routes, Route, Switch, Redirect,Navigate,BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Para from './pages/Para';
import Summary from './pages/Summary';
import Qrgenerator from './pages/Qrgenerator';
import Convo from './pages/Convo';
import "./App.css"
function App() {
  // const { isAuthenticated, isLoading } = useAuth0();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Router>
       <Routes>
      <Route exact path="/" element={<Home/>} />
      {/* <Route
       exact path="/shop"
        render={() =>
          isAuthenticated ? <Shop /> : <Navigate to="/" />
        }
      /> */}
      <Route path="/shop" element={<Shop />} />
      <Route path="/paraphrase" element={<Para />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/qrgen" element={<Qrgenerator />} />
      <Route path="/convo" element={<Convo />} />
    </Routes>
    </Router>
   
  );
}

export default App;
