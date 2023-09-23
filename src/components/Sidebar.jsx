// import React from 'react';
// import './Sidebar.css'


// const body = document.querySelector("body"),
// navBar = document.querySelector("nav"),
// menuBtns = document.querySelectorAll(".menu-icon"),
// overlay = document.querySelector(".overlay"),
// modeSwitch = body.querySelector(".toggle-switch"),
// modeText = body.querySelector(".mode-text");

// menuBtns.forEach((menuBtn) => {
// menuBtn.addEventListener("click", () => {
//   navBar.classList.toggle("open");
// });
// });

// overlay.addEventListener("click", () => {
// navBar.classList.remove("open");
// });


// function Sidebar() {

  
//   return (
  

//     <>
//     <nav class="open">
//   <div class="logo">
//     <i class="bx bx-menu menu-icon"></i>
//     <span class="logo-name">CatalystHub</span>
//   </div>
//   <div class="sidebar">
//     <div class="logo">
//       <i class="bx bx-menu menu-icon"></i>
//       <span class="logo-name">CatalystHub</span>
//     </div>

//     <div class="sidebar-content">
//       <ul class="lists">
//         <li class="list">
//           <a href="/paraphrase" class="nav-link">
//             <i class="bx bx-home-alt icon"></i>
//             <span class="link">Paraphraser</span>
//           </a>
//         </li>
//         <li class="list">
//           <a href="/summary" class="nav-link">
//             <i class="bx bx-bell icon"></i>
//             <span class="link">Summarizer AI</span>
//           </a>
//         </li>
//         <li class="list">
//           <a href="/qrgen" class="nav-link">
//             <i class="bx bx-message-rounded icon"></i>
//             <span class="link">QR Generator</span>
//           </a>
//         </li>
       
//       </ul>

//       <div class="bottom-content">
      
//         <li class="mode">
//           <div class="sun-moon">
//             <i class='bx bx-moon icon moon'></i>
//             <i class='bx bx-sun icon sun'></i>
//           </div>
//           <span class="mode-text text">Dark mode</span>

//           <div class="toggle-switch">
//             <span class="switch"></span>
//           </div>
//         </li>
//       </div>
//     </div>
//   </div>
// </nav>

// <section class="overlay"></section>
//     </>
//   );
// }

// export default Sidebar;


import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className={isSidebarOpen ? 'open' : ''}>
        <div className="logo">
          <i className="bx bx-menu menu-icon" onClick={toggleSidebar}></i>
          <span className="logo-name">CatalystHub</span>
        </div>
        <div className="sidebar">
          <div className="logo">
            <i className="bx bx-menu menu-icon"></i>
            <span className="logo-name">CatalystHub</span>
          </div>

          <div className="sidebar-content">
            <ul className="lists">
              <li className="list">
                <a href="/paraphrase" className="nav-link">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="link">Paraphraser</span>
                </a>
              </li>
              <li className="list">
                <a href="/summary" className="nav-link">
                  <i className="bx bx-bell icon"></i>
                  <span className="link">Summarizer AI</span>
                </a>
              </li>
              <li className="list">
                <a href="/qrgen" className="nav-link">
                  <i className="bx bx-message-rounded icon"></i>
                  <span className="link">QR Generator</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="mode">
              <div className="sun-moon">
                <i className='bx bx-moon icon moon'></i>
                <i className='bx bx-sun icon sun'></i>
              </div>
              <span className="mode-text text">Dark mode</span>
              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>

      {isSidebarOpen && <section className="overlay" onClick={closeSidebar}></section>}
    </>
  );
}

export default Sidebar;

