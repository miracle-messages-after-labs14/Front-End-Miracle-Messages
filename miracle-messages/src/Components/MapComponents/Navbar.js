import React from 'react';
import logo from '../../Assets/Imgs/MM_Logo.png';

import './Navbar.scss';

class Navbar extends React.Component {
  render() {
    return (
      <div className='navbar-map'>
        <a href='https://miraclemessages.org/'>
          <img src={logo} alt='logo' />
        </a>
        <nav>
          <a href='https://miraclemessages.org/'>HOME</a>
          <a href='https://miraclemessages.org/who'>ABOUT</a>
          <a href='https://miraclemessages.org/partner'>REUNION SERVICE</a>
          <a href='https://miraclemessages.org/getinvolved'>GET INVOLVED</a>
          <a href='https://www.classy.org/give/231839/#!/donation/checkout'>
            DONATE
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
