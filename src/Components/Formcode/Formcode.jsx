import React from 'react'
import './formcode.css'
// import Input from '../Input/Input'
import Inputsignin from '../Input/Inputsignin'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
// import Footersignin from '../Footersignin/Footersignin'

 const Formcode = () => {
  return (
    
        <div className='signin'>
        <form action="">
            <h2>Signin</h2>
            
            <Inputsignin className="input-sign" placeholder="Email or Phone number"/>
            <p className='usecode'>Message and data rates may apply</p>
            {/* <Inputsignin className="input-sign1" placeholder="Password"/> */}
            <Button content={"Send Sign-In-code"} name={"signin-button"} />
            <p className='or'>OR</p>
            <Button content={"use password"} name={"use-signin"}/>
           <p className='forget'> <Link to="#" style={{color:'white'}}>Forget email or Phone number</Link></p>
           <div>
            <Inputsignin type={"checkbox"} className={"check"} />
            <p className='remember'>Remember me</p>
           </div>
           <div>
            <p className='new-netflix'>New to netflix?</p>
            <p className='signup'><Link to="/landingpage" style={{color:"white"}}>Signup</Link></p>
           </div>
           <p className='learn-more'>This page is protected by Google reCAPTCHA to <br />ensure you are not a bot. Learn more</p>
          </form>
          {/* <Footersignin/> */}
            
            
        
        </div>
  
  )
}

export default Formcode
