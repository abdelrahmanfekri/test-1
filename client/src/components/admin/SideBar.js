import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { SideBarcontent } from './SideBarcontent';
import './SideBar.css';
import { IconContext } from 'react-icons';
import { useAppContext } from '../../context/App/appContext';

function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const {user,token} = useAppContext();
  const navigate = useNavigate();
  if(user.type!=="Admin"){
    navigate('/not-allowed');
  }
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar bg-dark adminbackground'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              
            </li>
            {SideBarcontent.map((item, index) => {
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

export default SideBar;
