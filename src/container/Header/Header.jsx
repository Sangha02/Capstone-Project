import React from 'react';
import {SubHeading} from '../../components';
import headfod from './headfood.jpg'
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin:'2rem 0' }}>The true mark of professionalism is the ability to respect everyone else for their styles and always find something positive in every dining experience and highlight it in your thoughts and words.</p>
      <button type="buton" className="custom__button">Explore Menu</button>   
    </div>
    <div className="app__wrapper_img">
      <img src={headfod} alt="header img" />
    </div>
  </div>
);

export default Header;
