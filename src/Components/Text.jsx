// const Text = () =>{
//     const data = {
//         content: "Unlimited movies, TV shows and more",
//         content1: "Watch anywhere. Cancel anytime.",
//         content2: "Ready to watch? Enter your email or mobile number to create or restart your membership."
//     };

//     return(
//         <div>
//             <div className="Container1">
//                 <h1 style={{color:"white", fontSize:"xxx-large"}}>{data.content}</h1>
//                 <p style={{color:"white", fontSize:"x-large"}} >{data.content1}</p>
//                 <p style={{color:"white", fontSize:"large"}}>{data.content2}</p>

//             </div>
//         </div>
//     )
// };

// export default Text;

import React from 'react'
import "./text.css" 

export const Text = ({value,className}) => {
  return (
    <div>
        <p className={`${className}` }>{value}</p>
        {/* <p className={`${value1}`} id='container1'>{value1}</p> */}
        {/* <p className={`${value2}`} id='container1'>{value2}</p> */}
    </div>
  )
}

export default Text;
