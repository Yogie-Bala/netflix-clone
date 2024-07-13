import React from "react";
import Text from "../Text";
import './footer.css'
import Language from "../Language/Language";

const Footer = () => {
    return(
        <div className="foot-head">
            <div className="number">
                <Text value={"Questions? call" } className="call"/>
                <p style={{textDecoration:"underline", marginLeft:"5px"}}>000-800-919-1694</p>
            </div>
            <div className="footer">
                <Text value={"Faq"} className="foot"/>
                <Text value={"Help Center"} className="foot"/>
                <Text value={"Account"} className="foot"/>
                <Text value={"Media Center"} className="foot"/>
                <Text value={"Investor Relations"} className="foot"/>
                <Text value={"Jobs"} className="foot"/>
                <Text value={"Ways to Watch"} className="foot"/>
                <Text value={"Terms of use"} className="foot"/>
                <Text value={"Privacy"} className="foot"/>
                <Text value={"Cookie Preferces"} className="foot"/>
                <Text value={"corporate Information"} className="foot"/>
                <Text value={"Cpntact Us"} className="foot"/>
                <Text value={"Speed Test"} className="foot"/>
                <Text value={"Legal Notices"} className="foot"/>
                <Text value={"Only on Netflix"} className="foot"/>
            </div>
            <div className="language-footer">
                <Language/>
                <p className="foot-india">Netflix India</p>
            </div>
          
        </div>
        
    )
}
export default Footer;