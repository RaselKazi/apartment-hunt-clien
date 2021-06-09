import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faHdd,
  faCommentAlt,
  faPlus,
  faUserPlus,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { AdminContext, AdminContextTemp, UserContext } from '../../../App';

const Sidebar = () => {
  // Admin context from App.js
  const [isAdmin, setIsAdmin] = useContext(AdminContext);
  const [isAdminTemp, setIsAdminTemp] = useContext(AdminContextTemp);

  return (
    <div className='sidebar d-flex flex-column justify-content-between py-5 px-4'>
      <ul className='list-unstyled'>
        
        {isAdmin || isAdminTemp ? (
          <>
            <li>
              <Link to='/admin-booking-lists' className='text-dark'>
                <FontAwesomeIcon icon={faHdd} /> <span>Booking List</span>
              </Link>
            </li>
            <li>
              <Link to='/addHouse' className='text-dark'>
                <FontAwesomeIcon icon={faPlus} /> <span>Add House</span>
              </Link>
            </li>
            <li>
              <Link to='/makeAdmin' className='text-dark'>
                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            {/* <li>
              <Link to='/order' className='text-dark'>
                <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
              </Link>
            </li> */}

            <li>
              <Link to='/my-rent' className='text-dark'>
                <FontAwesomeIcon icon={faHdd} /> <span>My Rent</span>
              </Link>
            </li>

            {/* <li>
              <Link to='/add-feedback' className='text-dark'>
                <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
              </Link>
            </li> */}
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
