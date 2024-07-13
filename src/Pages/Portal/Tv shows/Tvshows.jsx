import React from 'react'
import Navbartv from '../../../Components/Navbar/Navbartv';
import Row from '../../../Components/Row/Row';
import { useEffect, useState } from "react";
import { getPageData } from "../../../Api/Movies";
import Navbar2 from "../../../Components/Navbar/Navbar2"
import Herobanner from '../../../Components/Herobanner/Herobanner';
import Footersignup from '../../../Components/Footersignin/Footersignup';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Text from '../../../Components/Text';
import './tv.css'
// import Home from '../Home/Home';

 const Tvshows = () => {

    
        const [data, setData] = useState(null);
      
        useEffect(() => {
          getPageData().then((request) => setData(request));
        }, []);
  return (
    <>
    <main className="main_home">
    <Navbar2 isUser />
    <Navbartv/>
      <Herobanner />
      {data && (
        <div className="movie-row">
          <div className="movie-row1">
          <Row
            title="NETFLIX ORIGINALS"
            data={data.netflixOriginals?.results}
			      className={"NETFLIXORIGINALS"}
          />
          <Row title="TRENDING NOW" data={data.trendingNow?.results}  className={"trending"}/>
          <Row title="TOP RATED" data={data.topRated?.results} className={"top-rated"}/>
          <Row title="ACTION MOVIES" data={data.actionMovies?.results}  className={"action"}/>
          
          <Row title="HORROR MOVIES" data={data.horrorMovies?.results}  className={"horror"}/>
          <Row title="ROMANCE MOVIES" data={data.romanceMovies?.results}  className={"romance"}/>
          <Row title="WAR MOVIES" data={data.warMovies?.results} className={"war"}/>
          <Row
            title="SCIENCE FICTION MOVIE"
            data={data.scienceFictionMovies?.results} 
            className={"science"}
          />
          <Row title="DOCUMENTARIES" data={data.documentaries?.results}  className={"documentaries"}/>
		  {/* <Row title="COMEDY MOVIES" data={data.comedyMovies?.results} /> */}
          </div>
          
        </div>
      )}
    </main>
    <div className="tv-footer">
    <div className="tvfooter-icons">
       <FaFacebook className="tv-face"/>
       <FaInstagram className="tv-insta"/>
       <FaTwitter className="tv-twit"/>
       <FaYoutube className="tv-you"/>
     </div>
      <div className="tv-footer1">
    <Footersignup content={"Audio Description"} classname={"audio-foot"}/>
    <Footersignup content={"Help Center"} classname={"audio-foot"}/>
    <Footersignup content={"Gift Cards"} classname={"audio-foot"}/>
    <Footersignup content={"Media Center"} classname={"audio-foot"}/>
    <Footersignup content={"Investor Relation"} classname={"audio-foot"}/>
    <Footersignup content={"Jobs"} classname={"audio-foot"}/>
    <Footersignup content={"Terms of Use"} classname={"audio-foot"}/>
    <Footersignup content={"Privacy"} classname={"audio-foot"}/>
    <Footersignup content={"Legal Notices"} classname={"audio-foot"}/>
    <Footersignup content={"Cookie Preferences"} classname={"audio-foot"}/>
    <Footersignup content={"Corporate Information"} classname={"audio-foot"}/>
    <Footersignup content={"Contact Us"} classname={"audio-foot"}/>
    <div className="tv-footer2">
  <Text value="Service Code" className="service-tv"/>
  <Text value="1917-2024 Netflix. Inc." className="num-tv"/>

 </div>
    </div>
    
   </div>
    </>
  
  )
}
 

export default Tvshows;
