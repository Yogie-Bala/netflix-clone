import React from 'react'
import netflixlogo from "../../../Assests/netflix.svg"
import './signout.css'
import Button from '../../../Components/Button/Button'
import Text from '../../../Components/Text'
import Language from '../../../Components/Language/Language'
import { Link } from 'react-router-dom'

 const Signout = () => {
  return (
    <div className='signout-hole'>
        <div>
        <img src={netflixlogo} alt="" className='netflix-signup'/>
        <Link to="/signin">
        <Button  content={"Signin"} name={'Button-signout'} />
        </Link>
        </div>
        <div className='signout-text'>
            <Text value="Leaving So Soon?" className="signout-text1"/>
            <Text className="signout-text2" value={<pre>Just so you know, you don’t always need to sign <br />out of Netflix. It’s only necessary if you’re on a <br />shared or public computer.</pre>}/>
            <Text className="signout-text3" value="You’ll be redirected to Netflix.com in 30 seconds."/>
            <Link to="/landingpage">
            <Button content="Go Now" name="gonow-button"/>
            </Link>
        </div>
        <div className='signout-footer'>
        <div className="number">
                <Text value={"Questions? call" } className="call"/>
                <p style={{textDecoration:"underline", marginLeft:"5px"}}>000-800-919-1694</p>
        </div>
            <div className="footer">
                <Text value={"Faq"} className="foot"/>
                <Text value={"Help Center"} className="foot"/>
                <Text value={"Terms of Use"} className="foot"/>
                <Text value={"Privacy"} className="foot"/>
                <Text value={"Cookie Preferences"} className="foot"/>
                <Text value={"Corporate Information"} className="foot"/>
                
            </div>
            <div className="language-footer1">
                <Language/>
                {/* <p className="foot-india">Netflix India</p> */}
            </div>
        </div>
       
    </div>
  )
}

export default Signout;
