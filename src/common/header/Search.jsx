import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Search = ({ CartItem }) => {
  window.addEventListener('scroll', function () {
    const search = document.querySelector('.search');
    search.classList.toggle('active', window.scrollY > 100);
  });

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <Link to='/uretkenakademip4' className='logo width '>
            BayStore
          </Link>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? '' : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Search.propTypes = {
  CartItem: PropTypes.array.isRequired,
};

export default Search;
