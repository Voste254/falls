import React from 'react';
import '../../App.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">FOLLS</div>

      <div className="search">
        <input type="text" placeholder="Search......." />
      </div>

      <div className="icons">
        <button className="icon-circle">
          <img src='https://i.ibb.co/BHxC3vxW/pngegg.png' alt='Notifications' />
        </button>
        <button className="icon-circle">
          <img src='https://i.ibb.co/wZYKTmGt/pngegg-1.png' alt='Dark Mode' />
        </button>
        <div className="profile-container">
        <button className="icon-button profile-photo">
            <img src="https://i.ibb.co/Fq85sGjC/pngegg-2.png" alt="Profile" />
        </button>
        <p className="username-tag">@falls</p>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
