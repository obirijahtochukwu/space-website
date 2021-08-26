import React, {useState} from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import {links} from './data';

export default function SideBar() {
 const [isSidebar, setIsSidebar] = useState(false);
 const openNav = () =>{
  setIsSidebar(true);
 }
 const closeNav = () =>{
  setIsSidebar(false);
 }
 return (
  <div className="oga">
    <div className="navbar-header">
      <span className='mx-2'>spaceX</span>
      <button className='mx-3' onClick={openNav}><FaBars/></button>
    </div>
    <div className="underline"></div>
    <b className={isSidebar ? 'sidebar-wrapper show' : 'sidebar-wrapper'}>
      <div className="side">
        <button onClick={closeNav} className='closebtn'><FaTimes/> </button>
        {links.map((link, index)=>{
          const {url, text} = link;
          return (
            <div className='sidenav'>
            <Link className='a' key={index} to={url}>
            <h2>{text}</h2>
            </Link>
            </div>
          )
        })}
      </div>
    </b>
  </div>
 )
}
