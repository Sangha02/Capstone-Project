import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import Zaikaar from './Zaikaar.png'
import images from '../../constants/images';
import './Navbar.css';

const Navbar = ({nav}) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return(
   <nav className="app__navbar">
     <div className="app__navbar-logo">
      <img src={Zaikaar} alt="app logo" height={55} width={100} />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#menu">Menu</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className="p__opensans" onClick={()=>nav('/register')}>Log In / Register</a>
      <div />
      <a className="p__opensans" onClick={()=>nav('/bookTable')}>Book Table</a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

      {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
      <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
      <ul className="app__navbar-smallscreen_links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu" onClick={()=>nav('/menu')}>Menu</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>
      </div>
      )}

     </div>
</nav>
 )
}

export default Navbar;
