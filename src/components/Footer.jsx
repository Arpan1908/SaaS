import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className="container">
    <section style={{ height: 80 }} />
    <div className="row" style={{ textAlign: "center" }}>
      
    </div>
    {/*--------- Footer ----------*/}
    <footer className="footer-bs">
      <div className="row">
        <div className="col-md-3 footer-brand animated fadeInLeft">
          <h2>CatalystHub</h2>
          <p>
            Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam
            porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget
            faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi
            ut sem.
          </p>
          <p>© 2014 BS3 UI Kit, All rights reserved</p>
        </div>
        <div className="col-md-4 footer-nav animated fadeInUp">
          
      
          <div className="col-md-6">
            <ul className="list">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="#">Terms &amp; Condition</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 footer-social animated fadeInDown">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">RSS</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 footer-ns animated fadeInRight">
          <h4>Newsletter</h4>
          <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
          <p></p>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">
                <span className="glyphicon glyphicon-envelope" />
              </button>
            </span>
          </div>
          {/* /input-group */}
          <p />
        </div>
      </div>
    </footer>
    
  </div>
  
  )
}

export default Footer