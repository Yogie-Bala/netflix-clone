import React from "react";
import './Input.css'

const Input = ({className, placeholder, type,required}) =>{
    return (
        <div className="input-parent">
            <input type={`${type}`} className={`${className}`}  placeholder={`${placeholder}`}  required={required}/>
            
        </div>
        // {label && <label>{label}</label>}
    )

}
export default Input;