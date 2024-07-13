import React from "react";
import './navbar2.css'
import logo from '../../Assests/netflix.svg'
import profile from '../../Assests/profile.png'
import Text from "../Text";
import { Link } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { MdOutlineAccountCircle, MdOutlineLiveHelp } from "react-icons/md";
const NavbarHome = () =>{
    return(
        <div className="home-navbar">
            <div>
                <img src={logo} alt=""  className="home-netflixsvg"/>
            </div>
            <div className="home-link">
                <Link to="/home"  style={{color:"white", textDecoration:"none"}}>
                <Text className="link-home" value="Home" />
                </Link>
               
                <Link to="/tv" style={{color:"white", textDecoration:"none"}}>
                <Text className="link-home"  value="TV shows"/>
                </Link>
                <Link to="/navmovies" style={{color:"white", textDecoration:"none"}}>
                <Text className="link-home" value="Movies"/>
                </Link>
                <Link to="/newpopular" style={{color:"white", textDecoration:"none"}}>
                <Text className="link-home" value="New and Popular"/>
                </Link>
                <Link to="/mylist" style={{color:"white", textDecoration:"none"}}>
                <Text className="link-home" value="My lists"/>
                </Link>
                
                <Text className="link-home" value="Browse by language"/>
                <div className="navbar-icons">
                <svg id="search-svg" style={{height:"20px" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <svg id="search-svg2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                </svg>
                <img src={profile} alt="" className="nav-profile"/>
                <svg id="search-svg3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                <div className="profile-div">
                    <div className="profile-one">
                     <img src={profile} alt="" className="nav-profile1"/>
                     <Text value="Yogeshh" className="profile-name"/>
                    </div>
                    <div className="profile-one">
                        <FaPencil/>
                        <Text value="Manage profile" className="profile-name"/>
                    </div>
                    <div className="profile-one">
                        <ImProfile/>
                        <Text value="Transfer profile" className="profile-name"/>
                    </div>
                    <div className="profile-one">
                        <MdOutlineAccountCircle/>
                        <Text value="Account" className="profile-name"/>
                    </div>
                    <div className="profile-one">
                        <MdOutlineLiveHelp/>
                        <Text value="Help center" className="profile-name"/>
                    </div>
                    <hr />
                    <div className="profile-signout">
                        <Text value="Signout of Netflix" className="signout-style"/>
                    </div>

                </div>

                {/* <svg id="search-svg3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg> */}

                </div>
               

            </div>
            

            
        </div>
    )
}

export default NavbarHome;