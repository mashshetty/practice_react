import React from 'react'
import { useEffect, useState } from 'react'
import Nav from './Nav';
import Footer from './Footer';
import {useParams} from 'react-router-dom';


function Profile(props) {
  const { id } = useParams();

  
 
    localStorage.setItem('obj', id);

    const [count, setCount] = useState(0);

 
 
    
  return (
    <div>
        <Nav />
        
        
        <h1>helllo its me {id} here!!</h1>
        
        <Footer />
    </div>
    
   
  )
}

export default Profile