import React from 'react'
import './form.css'
// import Input from '../Input/Input'
import Inputsignin from '../Input/Inputsignin'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
// import Footersignin from '../Footersignin/Footersignin'

export const Form = () => {
  return (
    
        <div className='signin'>
        <form action="">
            <h2>Signin</h2>
            {/* <input type="" /> */}
            
            <Inputsignin className="input-sign" placeholder="Email or Phone number"/>
            <Inputsignin className="input-sign1" placeholder="Password" type="password"/>
            <Button content={"Sign-In"} name={"signin-button"}/>
            <p className='or'>OR</p>
            <Link to="/Signincode">
            <Button content={"use a signin-code"} name={"use-signin"}/>
            </Link>
           
           <p className='forget'> <Link to="#" style={{color:'white'}}>Forget Password?</Link></p>
           <div>
            <Inputsignin type={"checkbox"} className={"check"} />
            <p className='remember'>Remember me</p>
           </div>
           <div>
            <p className='new-netflix'>New to netflix?</p>
            <p className='signup'><Link to="/landingpage" style={{color:"white", marginTop:"-46px"}}>Signup</Link></p>
           </div>
           <p className='learn-more'>This page is protected by Google reCAPTCHA to <br />ensure you are not a bot. Learn more</p>
          </form>
          {/* <Footersignin/> */}
            
            
        
        </div>
  
  )
}
