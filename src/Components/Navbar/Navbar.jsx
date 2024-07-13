import React from "react";
import Language from "../Language/Language";
import Button from "../Button/Button";
import "./navbar.css"
import logo from "../../Assests/netflix.svg"
import {Link} from 'react-router-dom'


const Navbar = () =>{
    return(
        <div className="netflix_main">
            <div className="netlfix_logo">
            <img src={logo} alt="" className='Netflix-logo' />
            </div>
            <div className="netflix_ryt">
                <div className="lang_opt">
                <Language className ={'Language'}/>
                </div>
                <div className="Sign_in">
                <Link to="/Signin">
             <Button content={"Signin"} name={'Button-signin'}  />
            </Link>
                </div>
            </div>

             
        </div>
    )
}

export default Navbar;