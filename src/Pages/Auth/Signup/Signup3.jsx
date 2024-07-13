import React from 'react'
import './signup3.css'
import netflixlogo from "../../../Assests/netflix.svg"
// import './signup.css'
import Button from '../../../Components/Button/Button'
import { Link } from 'react-router-dom'
import Text from '../../../Components/Text'
import Footersignup from '../../../Components/Footersignin/Footersignup'
// import Language from '../../../Components/Language/Language'
import Language2 from '../../../Components/Language/Language2'

 const Signup3 = () => {
  return (
    <div>
        <div>
        <img src={netflixlogo} alt="" className='netflix-signup2'/>
          <Link to="/signout">
          <Button  content={"Signout"} name={'Button-signup'} />
          </Link>
          <hr className='hr1' />
        </div>
        <div>
            <Text value="STEP 3 of 3"/>
            <Text value="Choose the plan that's right for you "/>
            <div>
               <div className='plan-hole'>
                
                <div className='premium-hole'>
                    <div className='premium-price'>
                        <Text value={<pre>Premium <br />4K + HDR</pre>} className={"premium-4k"}/>
                        <p></p>
                    </div>
                    <div className='premium-plan'>
                        <Text value={<pre>Monthly price <br />₹649 </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px" }}/>
                        <Text value={<pre>Video and sound quality<br />Best </pre>}/>
                        <hr style={{width:"230px",  marginLeft:"0px"}}/>
                        <Text value={<pre>Resolutions <br />4K(Ultra HD) + HDR </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px"}} />
                        <Text value={<pre>Spatial audio(immersive sound) <br />Included </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px"}} />
                        <Text value={<pre>Supported devices <br />TV, computer,mobile phone,tablet </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px"}}/>
                        <Text value={<pre>Devices your household can watch at <br />the same time <br />4 </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px"}} />
                        <Text value={<pre>Download devices <br />6 </pre>}/>
                        {/* <hr style={{width:"230px", marginLeft:"0px"}}/> */}

                    </div>
                </div>
                <div className='premium-hole1'>
                    <div className='premium-price'>
                        <Text value={<pre>Premium <br />4K + HDR</pre>} className={"premium-4k"}/>
                        <p></p>
                    </div>
                    <div className='premium-plan'>
                        <Text value={<pre>Monthly price <br />₹649 </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px" }}/>
                        <Text value={<pre>Video and sound quality<br />Best </pre>}/>
                        <hr style={{width:"230px",  marginLeft:"0px"}}/>
                        <Text value={<pre>Resolutions <br />4K(Ultra HD) + HDR </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px"}} />
                        <Text value={<pre>Spatial audio(immersive sound) <br />Included </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px"}} />
                        <Text value={<pre>Supported devices <br />TV, computer,mobile phone,tablet </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px"}}/>
                        <Text value={<pre>Devices your household can watch at <br />the same time <br />4 </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px"}} />
                        <Text value={<pre>Download devices <br />6 </pre>}/>
                        {/* <hr style={{width:"230px", marginLeft:"0px"}}/> */}

                    </div>
                </div>
                <div className='premium-hole2'>
                    <div className='premium-price'>
                        <Text value={<pre>Premium <br />4K + HDR</pre>} className={"premium-4k"}/>
                        <p></p>
                    </div>
                    <div className='premium-plan'>
                        <Text value={<pre>Monthly price <br />₹649 </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px" }}/>
                        <Text value={<pre>Video and sound quality<br />Best </pre>}/>
                        <hr style={{width:"230px",  marginLeft:"0px"}}/>
                        <Text value={<pre>Resolutions <br />4K(Ultra HD) + HDR </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px"}} />
                        <Text value={<pre>Spatial audio(immersive sound) <br />Included </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px"}} />
                        <Text value={<pre>Supported devices <br />TV, computer,mobile phone,tablet </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px"}}/>
                        <Text value={<pre>Devices your household can watch at <br />the same time <br />4 </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px"}} />
                        <Text value={<pre>Download devices <br />6 </pre>}/>
                        {/* <hr style={{width:"230px", marginLeft:"0px"}}/> */}

                    </div>
                </div>
                <div className='premium-hole3'>
                    <div className='premium-price'>
                        <Text value={<pre>Premium <br />4K + HDR</pre>} className={"premium-4k"}/>
                        <p></p>
                    </div>
                    <div className='premium-plan'>
                        <Text value={<pre>Monthly price <br />₹649 </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px" }}/>
                        <Text value={<pre>Video and sound quality<br />Best </pre>}/>
                        <hr style={{width:"230px",  marginLeft:"0px"}}/>
                        <Text value={<pre>Resolutions <br />4K(Ultra HD) + HDR </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px"}} />
                        <Text value={<pre>Spatial audio(immersive sound) <br />Included </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px"}} />
                        <Text value={<pre>Supported devices <br />TV, computer,mobile phone,tablet </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px"}}/>
                        <Text value={<pre>Devices your household can watch at <br />the same time <br />4 </pre>}/>
                        <hr style={{width:"230px", marginLeft:"0px"}} />
                        <Text value={<pre>Download devices <br />6 </pre>}/>
                        {/* <hr style={{width:"230px", marginLeft:"0px"}}/> */}

                    </div>
                </div>
             </div>
             <Text className="plan-text" value={<pre>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details. <br />
              Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium,
             2 with Standard, and 1 with Basic and Mobile.</pre>}/>
                        
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
                <Language2 className={"signuplang"}/>
                <p className="foottt">Netflix India</p>
                </div>
             
      </div>
        </div>
    </div>
  )
}

export default Signup3;
