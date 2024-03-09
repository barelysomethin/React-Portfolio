import React from 'react'
import { useState } from 'react';
import './nav.css'


function Navbar()
{

 const [menuopen, setmenuopen]=useState(false);
const menutoggle=()=>{
  setmenuopen(!menuopen);
}

return(

<nav className='navbar'>
    <div className='brand' >brand</div>

    <div className='toggle-menu' onClick={menutoggle}>menu</div>
 <div className={`menu ${menuopen ? 'open': ''}`}> 
 <ul>
  <li>Home</li>
  <li>About</li>
  <li>contact</li>

 </ul>
 
 </div>
  <div className='breadcrumb'><span>Home</span>/
  <span>About</span>
  </div>
  
  </nav>
)

}



export default Navbar;