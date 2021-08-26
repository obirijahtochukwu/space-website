import React from 'react';
import { Link } from "react-router-dom";
import { links } from './data';


export default function NavBar() {
 return (
  <div className='navbar'>
   <div className='text-uppercase p-2' style={{fontSize: '1.4rem'}}>planets</div>
   <div >
   {
    links.map((link, index)=>{
     const {url, text} = link;
     return(
      <div className="navbara">
       <Link to={url} className='m-1 a' key={index}>{text}</Link>
      </div>
     )
    })
   }
   </div>
   <div className="underline mt-3"></div>
  </div>
 )
}
