import React from 'react'
import netflixlogo from "../../../Assests/netflix.svg"
import './signup2.css'
import Button from '../../../Components/Button/Button'
import Text from '../../../Components/Text'
import Footersignup from '../../../Components/Footersignin/Footersignup'
// import Language from '../../../Components/Language/Language'
import { Link } from 'react-router-dom'
import Language2 from '../../../Components/Language/Language2'

 const Signup2 = () => {
  return (
    <div >
        <div>
          <img src={netflixlogo} alt="" className='netflix-signup2'/>
          <Link to="/signout">
          <Button  content={"Signout"} name={'Button-signup'} />
          </Link>
          <hr className='hrline' />
        </div>
      <div className='signup2-hole'>
        <form action="">
        <svg id='tick-svg1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


            <p className='step2'>STEP 2 0f 3</p>
            <Text value="Choose your plan."  className="line1"/>
            <svg id='tick-svg2'  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <Text value= { <pre>No commitments, cancel <br />anytime </pre>} className="line2"/>
            
            <svg id='tick-svg3'  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <Text value= { <pre>Everything on Netflix for one low<br />price </pre>}   className="line3"/>
           
            <svg id='tick-svg4'  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <Text value= { <pre>No adds and no extra fees. Ever. </pre>} className="line4"/>
            <Link to="/signup3">
            <Button content="Next" name="signup2-next"/>
            </Link>
            

        </form>
      </div>
      <div className="footer-signup">
                <div className="signup-call"> <br />
                <Text value={"Questions? call" } className="call1"/>
                <p className="signup-num" style={{textDecoration:"underline", }}>000-800-919-1694</p>
                </div>
                <div className="signup-foot">
                <Footersignup content={"Faq"}/>
                <Footersignup content={"Help Center"}/>
                <Footersignup content={"Netflix Shop"}/>
                <Footersignup content={"Terms of Use"}/>
                <Footersignup content={"Privacy"}/>
                <Footersignup content={"Cookie Preferences"}/>
                <Footersignup content={"Corporate information"}/>
                </div>
                <div className="signup-lang">
                 <Language2/>
                <p className="foottt">Netflix India</p>
                </div>
             
      </div>
    </div>
  )
}
 export default Signup2;
