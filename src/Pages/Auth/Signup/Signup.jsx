import React from 'react'
import netflixlogo from "../../../Assests/netflix.svg"
import './signup.css'
import Button from '../../../Components/Button/Button'
import Formsignup from '../../../Components/Form/Formsignup'
import { Link } from 'react-router-dom'
 const Signup = () => {
  return (
   <div className='signup-page'>
     <div>
        <img src={netflixlogo} alt="" className='netflix-signup'/>
        <Link to="/signin">
        <Button  content={"Signin"} name={'Button-signup'} />
        </Link>
       
        <hr className='hrline' />
    </div>
    <div>
        <Formsignup/>
    </div>

   </div>
  )
}

export default Signup;
