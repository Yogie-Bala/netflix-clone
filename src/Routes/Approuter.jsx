import React from "react";
import Landingpage from "../Pages/Public/Landingpage";
import { Routes,Route } from "react-router-dom";
import { Signin } from "../Pages/Auth/Signin/Signin";
import  Signup  from "../Pages/Auth/Signup/Signup";
import Signincode from "../Pages/Auth/Signin/Signincode"
import Signup2 from "../Pages/Auth/Signup/Signup2"
import Signout from "../Pages/Auth/Signout/Signout";
import Signup3 from "../Pages/Auth/Signup/Signup3";
import Home from "../Pages/Portal/Home/Home";
import Tvshows from "../Pages/Portal/Tv shows/Tvshows";
import Navmovies from "../Pages/Portal/Navmovies/Navmovies";
import Newpopular from "../Pages/Portal/Newpopular/Newpopular";
import Mylist from "../Components/Wishlist/Mylist";
const Approuter = () => {
    return (
       
        <Routes>
            <Route path="/landingpage" element={<Landingpage/>} />
             <Route path="/signin" element={<Signin/>}/>
             <Route path="/signup" element={<Signup/>}/>
             <Route path="/signincode" element={<Signincode/>}/>
             <Route path="/signup2" element={<Signup2/>}/>
             <Route path="/signout" element={<Signout/>}/>
             <Route path="/signup3" element={<Signup3/>}/>
             <Route path="/Home" element={<Home/>}/>
             <Route path="/tv" element={<Tvshows/>}/>
             <Route path="/navmovies" element={<Navmovies/>}/>
             <Route path="/newpopular" element={<Newpopular/>}/>
             <Route path="/mylist" element={<Mylist/>}/>
           
             <Route/> 
        </Routes>
    
    )
}
export default Approuter;
