import React, { useEffect, useRef, useState } from 'react'
import Nav from './Nav';
import Profile from './Profile';
import Footer from './Footer';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import '../App.css';

function Home() {

const fcs= useRef("");

useEffect(()=>{

    fcs.current.focus()

}, [])
   





const shoot = (e) => {
    console.log(dta);
    

}

const [dta, setDta] = useState("");
const [pass, setpass] = useState("");

const hold = (e) =>
{

    setDta(e.target.value);


}

const holdpass = (e) =>
{

    setpass(e.target.value);


}




    return (
        <div>


            <Nav />
            <div className="homee">
            <form>
                <div className="form">
                <div class="form-floating mb-3">
                    <input type="text" className="form-control" ref={fcs}  id="floatingInput" value={dta} onChange={hold} placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" className="form-control" onChange={holdpass} id="floatingPassword" placeholder="Password" required/>
                    <label for="floatingPassword">Password</label>    
                   <Link to={`/profile/${dta}`} > <button onClick={shoot} className="btnsub">submit</button></Link>
                </div>
                </div>
                </form>
            </div>

            <Footer />
           

        </div>
    )
}

export default Home