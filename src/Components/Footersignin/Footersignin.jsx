import React from "react";
import Text from "../Text";
import './footersignin.css'
import Language from "../Language/Language";

const Footersignin = () => {
    return(
        <div className="foot-head">
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
                <p className="foot-india">Netflix India</p>
            </div>
        </div>    
            )
        }

export default Footersignin;
   