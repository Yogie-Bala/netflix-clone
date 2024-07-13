// import "./second.css"
// import img1 from '../../Assests/tv.png'
// const Secondcontent = () =>{
//     const data = {
//         content: "Enjoy on your TV",
//         content1: "Watch on smart TVs, PlayStation, Xbox, Chromecast,",
//         content2: "Apple TV, Blu-ray players and more."
        
//     };

//     return(
//         <div>
//             <div className="Container2">
//                 <div>
//                 <h1 style={{fontSize:"xxx-large"}}>{data.content}</h1>
//                 <p style={{ fontSize:"large"}} >{data.content1}</p>
//                 <p style={{ fontSize:"large", marginTop:"-10px"}} >{data.content2}</p>
//                 </div>
//                 <div>
//                     <img src={img1} alt="" id="img1" />
//                 </div>

//             </div>
//         </div>
//     )
// };

// export default Secondcontent;


import React from "react";
import '../Secondcontent/second.css'

const Secondcontent = ({image,value,classname,vid1,image1,image2,vid2,image3,image4}) =>{
    return(
        <div className="container1">
            <p className={`${classname}` } >{value}</p>
            <img id="image1" src={image} alt="" />
            <video  id="video1" src={vid1} alt="video" typeof="m4v" muted autoPlay loop></video> 
            <img id="image2" src={image1} alt="" />
            <img id="image3" src={image2} alt="" />
            <video  id="video2" src={vid2} alt="video" typeof="m4v" muted autoPlay loop></video> 
            <img id="image4" src={image3} alt="" />
            <img id="image5" src={image4} alt="" />


        </div>
    )
}
export default Secondcontent;