import React from 'react'
import './signin.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Footersignin from '../../../Components/Footersignin/Footersignin'
import Formcode from '../../../Components/Formcode/Formcode'
 const Signincode = () => {
  return (
    <div className='signin-back'>
        <Navbar/>
       <Formcode/>
       <Footersignin/>
    </div>
  )
}

export default Signincode;
