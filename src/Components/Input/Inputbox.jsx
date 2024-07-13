import React from "react";
import Button from "../Button/Button";
import Input from "./Input";
import './inputbox.css'
import {Link} from 'react-router-dom'
// import { FaAngleRight } from "react-icons/fa";


const Inputbox = ({required}) =>{
    return (
        <div>
            <div>
                    <Input className={"email_input"}  />
                    <Link to="/signup">
                    <Button content={'Get Started'} name="Getstart-button" /> <br /> <br /> <br /> <br />
                    </Link>
                    {/* < FaAngleRight className="get-arrow"/> */}
                    
            </div>
        </div>
    )
}

export default Inputbox;