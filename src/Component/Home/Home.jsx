import React, { useState } from 'react';
import por from "../images/por.jpg";
import logos from "../images/logos.png";
import facebook from "../images/facebook.png";
import insta from "../images/insta.png";
import telegram from "../images/telegram.png";
//import { GiHamburgerMenu } from "react-icons/gi";
import "./Home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  

  return (
    <>
      <div className="homeImage">
        <img src={por} alt="por" />
      </div>

      <nav>

      <div className="nav-container">
        <div className="logo">
          <img src={logos} alt="logo" />
        </div>
        <div className={`nav-bar${menuOpen ? " open" : ""}`}>
          <p>Home</p>
          <p>About</p>
          <p>Product</p>
          <p>Service</p>
          <p>Contact</p>
        </div>
      </div>
      
      <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
  <span></span>
  <span></span>
  <span></span>
</div>

      </nav>
     
      <div className="socialImage">
        <img src={facebook} alt="facebook" />
        <img src={insta} alt="insta" />
        <img src={telegram} alt="telegram" />
      </div>

      <div className="description">
        <div className="dis-title">
          Moges Motors
        </div>
        <div className="home-description">
         <p> Rev up your ride with the ultimate car market experience!
          <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ea!</p>
       </div>
        <button>Contact Us!</button>
      </div>
    </>
  );
}

export default Home;