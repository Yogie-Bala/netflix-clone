import React from "react";
import "../Public/landingpage.css"
import Navbar from '../../Components/Navbar/Navbar'
import i from '../../Assests/tv.png'
import y from '../../Assests/strangeThings.jpg'
import z from '../../Assests/tvImg2.png'
import x from '../../Assests/children.png'
import s from '../../Assests/strange_dwld.png'
import video1 from '../../Assests/tvVideo1.m4v'
import video2 from'../../Assests/tvVideo2.m4v'
import Text from "../../Components/Text";
import Inputbox from '../../Components/Input/Inputbox'
import Secondcontent from "../../Components/Secondcontent/Second";
import  Accordion  from "../../Components/Accordion/Accordion";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";

// import Secondcontent from "../../Components/Secondcontent/Second";




const Landingpage = () =>{
    return(
        <div>
            <div className="Landingpage-header">
                <Navbar/>
                <div className="header-content">
                   
                    <Text value="Unlimited movies, TV shows and more" className="unlimited"/>
                    <Text value="Watch anywhere. Cancel anytime."  className={"watch"}/>
                    <Text value="Ready to watch? Enter your email or mobile number to create or restart your membership." className={"ready"} />
                </div> 
                <div>
                    <Inputbox/>
                </div>
            </div>
            <div className="second-content">
                 <div >
                    <Secondcontent value={"Enjoy on your TV"} classname="enjoy"/>
                    <Secondcontent value={ <pre>Watch on smart TVs, PlayStation, Xbox, Chromecast, <br />Apple TV, Blu-ray players and more.</pre>} classname="smart"/>
                </div>
                <div>
                     <Secondcontent image={i}/>
                     <Secondcontent vid1={video1}/>
                     {/* <Inputbox/> */}
                </div>
            </div>
            <div className="third-content">
                 <div >
                    <Secondcontent value={<pre>Download your shows <br />to watch offline</pre>} classname="strange"/>
                    <Secondcontent value={ <pre>Save your favourites easily and always have something <br />to watch.</pre>} classname="strange1"/>
                </div>
                <div>
                     <Secondcontent image1={y}   />
                   <div className="input">
                    <Secondcontent image4={s} value={"Stranger Things"} classname={"strange2"}/>
                    <Text value="Downloading..." className={"download"}/> 
                   </div>
                     {/* <Secondcontent vid1={video1}/> */}
                </div>
            </div>
            <div className="fourth-content">
                 <div >
                    <Secondcontent value={"Watch everywhere"} classname="four1"/>
                    <Secondcontent value={ <pre>Stream unlimited movies and TV shows on your <br />phone, tablet, laptop, and TV</pre>} classname="four2"/>
                </div>
                <div>
                     <Secondcontent image2={z}/>
                     <Secondcontent vid2={video2}/>
                </div>
            </div>
            <div className="fifth-content">
                 <div >
                    <Secondcontent value={"Create profiles for kids"} classname="five1"/>
                    <Secondcontent value={ <pre>Send children on adventures with their favourite <br />characters in a space made just for them—free with <br />your membership.</pre>} classname="five2"/>
                </div>
                <div>
                     <Secondcontent image3={x}/>
                     {/* <Secondcontent vid1={video1}/> */}
                </div>
            </div>
            <div className="sixth-content">
                <h1 className="frequent">Frequently asked Questions</h1>
                <Accordion/>  
                <div>
                <Text value="Ready to watch? Enter your email or mobile number to create or restart your membership." className={"one"} />
                </div>
                <div>
                    <Input className={"email-bottom"}/>
                    <Button content={'Get started'} name="Getstart" />
                </div>
            </div>
            <div className="seven-content">
                <Footer/>
               
            </div>
            
            
         
                    
   
        </div>
    )
}

export default Landingpage;

