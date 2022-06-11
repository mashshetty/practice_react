import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    
        <div className="main">
        
         <div className="nav">
         <div className="navitems">
            <Link className='lnk' to='/'>Home</Link>
            <Link className='lnk' to='#'>About</Link>
            <Link className='lnk' to='/profile'>Profile</Link>
        </div>

           
        </div>
         </div>
   
  )
}

export default Nav