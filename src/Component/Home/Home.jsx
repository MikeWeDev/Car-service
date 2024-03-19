import homeCarImage from "../images/home-car.png";
import facebook from "../images/facebook.png";
import insta from "../images/insta.png";
import telegram from "../images/telegram.png";
import logos from "../images/logos.png"
import './Home.css'
function Home() {
  return (
  <> 

<div className="home-container">
  <div className="nav-container">
    <div className="logo">
      <img src={logos} alt="logo" />
    </div>
    <div className="nav-bar">
      <p>Home</p>
      <p>About</p>
      <p>Product</p>
      <p>Service</p>
      <p>Contact</p>
    </div>
  </div>
<div className="home-info">
  <div className="home-description">Lorem ipsum dolor sit amet consectetur 
   elit. Rerum, nihil.</div>
  <div className="home-media">
  <img src={facebook} alt="facebook" />
  <img src={insta} alt="insta" />
  <img src={telegram} alt="telegram" />
  </div>
</div>
</div>

<div className="home-image-container">
<img src={homeCarImage} alt="HomeCar" />
</div>

<div className="home-nav-button">
  <button>Call US</button>
</div>

   </>
   )
}

export default Home
