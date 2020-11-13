import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

import './Navbar.css';
import { IconContext } from 'react-icons';
import * as IoIcons from 'react-icons/io';
import Home from '../Pages/Home';

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const [clicked , setclick] =useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const handleclick =()=> setclick(true); 
  
 

  return (
    <>

    
      <IconContext.Provider value={{ color: '#fff' }} >
        <div className='navbar'>
           
        
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="navbar-text">
  <h3 className="text">Welcome {props.name} {props.last}</h3>
    <div className="Profile-image">

  <img src={props.imageURL} alt="profile" height="50px" width="50px"></img></div>
                {/* <button className="logout-btn" onClick={handleclick}>Logout</button>
                {clicked? <logout /> : null} */}
    
        
            </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    

    </>
  );
}

export default Navbar;