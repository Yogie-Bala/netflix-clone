import React from "react";
import "../Input/Input.css"

const Input = ({className,required}) => {
    return (
        <div>
            <input className={`${className}`}  type="text" placeholder='Email or Mobile number' required={required} />
        </div>
    )
}

export default Input;