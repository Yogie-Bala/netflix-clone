import React from 'react'
import './signin.css'
import Navbar from '../../../Components/Navbar/Navbar'
import { Form } from '../../../Components/Form/Form'
import Footersignin from '../../../Components/Footersignin/Footersignin'
export const Signin = () => {
  return (
    <div className='signin-back'>
        <Navbar/>
       <Form/>
       <Footersignin/>
    </div>
  )
}
