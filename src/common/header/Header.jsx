import React from 'react';
import './Header.css';
import Search from './Search';
import Navbar from './Navbar';

import PropTypes from 'prop-types';

const Header = ({ CartItem }) => {
  return (
    <>
      <Search CartItem={CartItem} />
      <Navbar />
    </>
  );
};

Header.propTypes = {
  CartItem: PropTypes.any.isRequired,
};

export default Header;
