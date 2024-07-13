import React, { useState } from "react";
import './formsignup.css'
import Text from "../Text";
import Inputsignin from '../Input/Inputsignin'
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Footersignup from "../Footersignin/Footersignup";
// import Language from "../Language/Language";
import { useNavigate } from "react-router-dom";
import Language2 from "../Language/Language2";


const Formsignup = ({isSignup}) =>{
    const navigate=useNavigate();
    const initialvalue={
        username:"",
        password:"",
    };
    const [user,setUser] = useState(initialvalue);

    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(!isSignup){
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if(
                storedUser &&
                storedUser.username === user.username &&
                storedUser.password === user.password 

            ){
                navigate("/Home");
            }else{
                navigate("/Home");
                alert("Signed Up Successfully");
            }
            
        }else{
            localStorage.setItem("user", JSON.stringify(user));
            alert("Signed Up Successfully");
            navigate("/Signin");
        }
    };
    const handlechange = (event)=>{
        const {name, value} = event.target;
        setUser({...user,[name]:value});
    };
    return(
        <div className="form-signup">
            <form onSubmit={handleSubmit} action="">
            <div className="signup-form">
               <Text value="STEP 1 OF 3" className="step" />
               <Text value="Welcome back!" className="welcome-signup" />
               <Text value="Joining Netflix is easy." className="join-signup" />
               <Text value="Enter your password and you'll be watching in no time."  className="enter-signup"/>
               {/* <Text value="Email" className="email-signup"/>
               <Text value="balajiyogesh12@gmail.com" className="mail"/> */}
               <Inputsignin onChange={handlechange} className="email-signup" placeholder="E-mail or Phone number "  required/>
               <Inputsignin onChange={handlechange} className="input-signup" placeholder=" Enter your Password" type="password" required />
               <p className="forget-signup"> <Link to="#" style={{color:'blue', marginLeft:"2px", textDecoration:"none"}}>Forgot your Password?</Link></p>
               {/* <Link to="/signup2"> */}
               <Button content="Next" name="signup-next"/>
               {/* </Link> */}
            </div>
            </form>
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
                <Language2 />
                <p className="foottt">Netflix India</p>
                </div>
             
            </div>
            
        </div>
    )
}

export default Formsignup;