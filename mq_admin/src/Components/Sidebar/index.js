import React, { useState } from "react";
import { Link } from "react-router-dom";

import './index.css'

import { AiFillDashboard, AiOutlineUserAdd } from 'react-icons/ai';
import { Auth } from "../../context/Auth.Context";

const SideBar = () => {


  const auth = Auth();

  const [active, setActive] = useState(1);

  const [activebutton, setActiveButton] = useState();



  return (
    <div className="sidebar col-3">
      {/* <img src="/Untitled design.png" style={{ height: '220px', width: '220px', marginLeft: '2rem' }} /> */}
      <ul className="list-unstyled user-menubar" style={{ paddingLeft: '1.5rem', paddingTop: '2rem' }}>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/dashboard" className="menu-item" >
            <span className='d-flex'>
              <AiFillDashboard style={{ color: 'white', fontSize: '20px' }} />
              <p style={{ fontSize: '15px' }}> Dashboard </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/category" className="menu-item" >
            <span className='d-flex'>
              <AiFillDashboard style={{ color: 'white', fontSize: '20px' }} />
              <p style={{ fontSize: '15px' }}> Category </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/sub-category" className="menu-item" >
            <span className='d-flex'>
              <AiFillDashboard style={{ color: 'white', fontSize: '20px' }} />
              <p style={{ fontSize: '15px' }}> Sub Category </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/companies" className="menu-item" >
            <span className='d-flex'>
              <AiFillDashboard style={{ color: 'white', fontSize: '20px' }} />
              <p style={{ fontSize: '15px' }}> Trusted Companies </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/businesses" className="menu-item" >
            <span className='d-flex'>
              <AiFillDashboard style={{ color: 'white', fontSize: '20px' }} />
              <p style={{ fontSize: '15px' }}> Trending Businesses </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/deals" className="menu-item" >
            <span className='d-flex'>
              <AiFillDashboard style={{ color: 'white', fontSize: '20px' }} />
              <p style={{ fontSize: '15px' }}> Deals </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/dubai" className="menu-item" >
            <span className='d-flex'>
              <AiFillDashboard style={{ color: 'white', fontSize: '20px' }} />
              <p style={{ fontSize: '15px' }}> Dubai </p>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
